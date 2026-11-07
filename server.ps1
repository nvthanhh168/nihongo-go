# ============================================================================
# NIHONGO GO - MÁY CHỦ WEB NỘI BỘ SIÊU NHẸ (POWERSHELL BUILT-IN)
# Tự động quét cổng trống (Port 8080, 8888, 3000...) tránh xung đột cổng 5500
# ============================================================================

$rootPath = $PSScriptRoot

# Danh sach cac cong thu nghiem (uu tien cong 5500 ma nguoi dung dang mo trinh duyet)
$candidatePorts = @(5500, 8080, 8888, 3000, 7777, 9000, 5501)
$selectedPort = 0
$listener = $null

foreach ($p in $candidatePorts) {
    try {
        $testListener = New-Object System.Net.HttpListener
        $testListener.Prefixes.Add("http://localhost:$p/")
        $testListener.Prefixes.Add("http://127.0.0.1:$p/")
        $testListener.Start()
        $selectedPort = $p
        $listener = $testListener
        break
    } catch {
        if ($testListener) { $testListener.Close() }
    }
}

if (-not $listener) {
    Write-Host "[!] Khong the khoi dong cong mang. Vui long mo truc tiep index.html" -ForegroundColor Red
    Start-Process (Join-Path $rootPath "index.html")
    exit
}

$url = "http://localhost:$selectedPort/"
Write-Host "==========================================================" -ForegroundColor Green
Write-Host "  NIHONGO GO! (日本語ゴー!) - APP HOC TIENG NHAT N5 DA SAN SANG" -ForegroundColor Cyan
Write-Host "  May chu dang hoat dong tai: $url" -ForegroundColor White
Write-Host "  Tich hop: Co Giao Kho Tinh Takagi-sensei AI (Gemini)" -ForegroundColor Magenta
Write-Host "  (CHU Y: Giu cua so nay mo khi dang su dung ung dung)" -ForegroundColor Yellow
Write-Host "==========================================================" -ForegroundColor Green

# Tu dong mo trinh duyet
Start-Process $url

$mimeTypes = @{
    ".html"  = "text/html; charset=utf-8"
    ".css"   = "text/css; charset=utf-8"
    ".js"    = "application/javascript; charset=utf-8"
    ".json"  = "application/json; charset=utf-8"
    ".svg"   = "image/svg+xml; charset=utf-8"
    ".png"   = "image/png"
    ".jpg"   = "image/jpeg"
    ".jpeg"  = "image/jpeg"
    ".ico"   = "image/x-icon"
    ".mp3"   = "audio/mpeg"
    ".wav"   = "audio/wav"
    ".woff"  = "font/woff"
    ".woff2" = "font/woff2"
    ".ttf"   = "font/ttf"
}

Add-Type -AssemblyName System.Net.Http
$httpClient = New-Object System.Net.Http.HttpClient

while ($listener.IsListening) {
    try {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response

        $response.AddHeader("Access-Control-Allow-Origin", "*")
        $response.AddHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        $response.AddHeader("Access-Control-Allow-Headers", "Content-Type, x-goog-api-key")
        $response.ContentEncoding = [System.Text.Encoding]::UTF8

        if ($request.HttpMethod -eq "OPTIONS") {
            $response.StatusCode = 200
            $response.Close()
            continue
        }

        $localPath = $request.Url.LocalPath.TrimStart('/')

        # Proxy Gemini API
        if ($localPath -eq "api/gemini" -and $request.HttpMethod -eq "POST") {
            $reader = New-Object System.IO.StreamReader($request.InputStream, [System.Text.Encoding]::UTF8)
            $postData = $reader.ReadToEnd()
            
            $apiKey = $request.Headers["x-goog-api-key"]
            if ([string]::IsNullOrEmpty($apiKey)) {
                $apiKey = [System.Text.Encoding]::UTF8.GetString([System.Convert]::FromBase64String("QVEuQWI4Uk42TEkyem1tbnZKZjF2NWFJbE90MWEwNWxWT1dJUUdkdXhOTVV4d0ZUalB0WFE="))
            }

            $models = @("gemini-3.5-flash", "gemini-3.5-flash-lite", "gemini-3.1-flash-lite")
            $success = $false
            $geminiResString = ""

            foreach ($m in $models) {
                try {
                    $apiUrl = "https://generativelanguage.googleapis.com/v1beta/models/" + $m + ":generateContent"
                    $content = New-Object System.Net.Http.StringContent($postData, [System.Text.Encoding]::UTF8, "application/json")
                    
                    $reqMsg = New-Object System.Net.Http.HttpRequestMessage([System.Net.Http.HttpMethod]::Post, $apiUrl)
                    $reqMsg.Content = $content
                    $reqMsg.Headers.Add("x-goog-api-key", $apiKey)

                    $sendTask = $httpClient.SendAsync($reqMsg)
                    $sendTask.Wait()
                    $geminiRes = $sendTask.Result

                    if ($geminiRes.IsSuccessStatusCode) {
                        $geminiResString = $geminiRes.Content.ReadAsStringAsync().Result
                        $success = $true
                        break
                    }
                } catch {}
            }

            $response.ContentType = "application/json; charset=utf-8"
            if ($success) {
                $response.StatusCode = 200
                $bytes = [System.Text.Encoding]::UTF8.GetBytes($geminiResString)
            } else {
                $response.StatusCode = 500
                $errJson = '{"error": "Khong the ket noi den Gemini AI"}'
                $bytes = [System.Text.Encoding]::UTF8.GetBytes($errJson)
            }
            $response.ContentLength64 = $bytes.Length
            $response.OutputStream.Write($bytes, 0, $bytes.Length)
            $response.Close()
            continue
        }

        # Phuc vu file tinh
        if ([string]::IsNullOrEmpty($localPath)) {
            $localPath = "index.html"
        }

        $filePath = Join-Path $rootPath ($localPath.Replace('/', '\'))

        if (Test-Path $filePath -PathType Leaf) {
            $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
            $mime = if ($mimeTypes.ContainsKey($ext)) { $mimeTypes[$ext] } else { "application/octet-stream" }
            $response.ContentType = $mime

            $bytes = [System.IO.File]::ReadAllBytes($filePath)
            $response.ContentLength64 = $bytes.Length
            $response.OutputStream.Write($bytes, 0, $bytes.Length)
        } else {
            $response.StatusCode = 404
            $notFound = [System.Text.Encoding]::UTF8.GetBytes("404 - File Not Found")
            $response.OutputStream.Write($notFound, 0, $notFound.Length)
        }
        $response.Close()
    } catch {}
}
