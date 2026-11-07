# ==============================================================================
# NIHONGO GO! - CÔNG CỤ TỰ ĐỘNG ĐẨY CODE LÊN GITHUB & VERCEL
# ==============================================================================
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
$Host.UI.RawUI.WindowTitle = "NIHONGO GO - ĐẨY CODE LÊN GITHUB VÀ VERCEL"

Clear-Host
Write-Host "======================================================================" -ForegroundColor Cyan
Write-Host "   🌸 NIHONGO GO! - CÔNG CỤ ĐẨY CODE LÊN GITHUB & DEPLOY VERCEL 🌸    " -ForegroundColor Magenta
Write-Host "======================================================================" -ForegroundColor Cyan
Write-Host ""

# 1. Định vị Git
$gitExe = "git"
if (-not (Get-Command git -ErrorAction SilentlyContinue)) {
    $minGit = Join-Path $env:USERPROFILE ".gemini\antigravity\bin\mingit\cmd\git.exe"
    if (Test-Path $minGit) {
        $gitExe = $minGit
    } else {
        Write-Host "[LỖI] Không tìm thấy Git trên hệ thống!" -ForegroundColor Red
        Write-Host "Vui lòng cài đặt Git hoặc liên hệ hỗ trợ." -ForegroundColor Yellow
        Read-Host "Nhấn Enter để thoát..."
        exit 1
    }
}

$gitVer = & $gitExe --version
Write-Host "[✓] Đang sử dụng: $gitVer" -ForegroundColor Green
Write-Host ""

# 2. Định vị thư mục dự án
$projDir = $PSScriptRoot
if (-not $projDir) { $projDir = (Get-Location).Path }
Set-Location $projDir

Write-Host "[✓] Thư mục dự án: $projDir" -ForegroundColor Gray
Write-Host ""

# 3. Đồng bộ và commit mọi thay đổi mới nhất
Write-Host "[1/3] Đang kiểm tra và đóng gói thay đổi mới nhất..." -ForegroundColor Yellow
& $gitExe add -A
& $gitExe commit -m "update: release Nihongo Go responsive PC/iPad/Mobile and 25 lessons Minna" 2>$null | Out-Null
& $gitExe branch -M main

$remoteUrl = "https://github.com/nvthanhh168/nihongo-go.git"
$remotes = & $gitExe remote
if ($remotes -contains "origin") {
    & $gitExe remote set-url origin $remoteUrl
} else {
    & $gitExe remote add origin $remoteUrl
}

Write-Host "[✓] Nhánh chính: main" -ForegroundColor Green
Write-Host "[✓] Địa chỉ GitHub đích: $remoteUrl" -ForegroundColor Green
Write-Host ""

# 4. Hướng dẫn & Tùy chọn đẩy code
Write-Host "======================================================================" -ForegroundColor Cyan
Write-Host "                 HƯỚNG DẪN XÁC THỰC VỚI GITHUB                        " -ForegroundColor Yellow
Write-Host "======================================================================" -ForegroundColor Cyan
Write-Host "GitHub yêu cầu xác thực bằng Personal Access Token (PAT) thay cho mật khẩu." -ForegroundColor White
Write-Host ""
Write-Host "👉 CÁCH LẤY TOKEN GITHUB (NẾU CHƯA CÓ - CHỈ MẤT 30 GIÂY):" -ForegroundColor Cyan
Write-Host "   1. Mở link: https://github.com/settings/tokens/new" -ForegroundColor Gray
Write-Host "   2. Đặt Note: NihongoGo -> Tích chọn ô [x] repo" -ForegroundColor Gray
Write-Host "   3. Kéo xuống dưới cùng bấm [Generate token]" -ForegroundColor Gray
Write-Host "   4. Copy chuỗi Token dạng: ghp_xxxxxxxxxxxxxxxxxxxx" -ForegroundColor Gray
Write-Host ""
Write-Host "Bạn muốn đẩy code theo cách nào?" -ForegroundColor Yellow
Write-Host "  [1] Đẩy trực tiếp (Tự động mở trình duyệt hoặc nhập Token khi được hỏi)" -ForegroundColor Green
Write-Host "  [2] Dán Token GitHub (Đẩy tự động 100% không cần hỏi lại)" -ForegroundColor Cyan
Write-Host "  [3] Hủy thao tác" -ForegroundColor Gray
Write-Host ""

$choice = Read-Host "Nhập lựa chọn của bạn (1, 2 hoặc 3)"

if ($choice -eq "2") {
    Write-Host ""
    $token = Read-Host "Dán Token GitHub của bạn vào đây (ghp_...)"
    $token = $token.Trim()
    if ($token) {
        $authUrl = "https://${token}@github.com/nvthanhh168/nihongo-go.git"
        Write-Host "Đang đẩy lên GitHub với Token đã nhập..." -ForegroundColor Yellow
        & $gitExe push -u $authUrl main
        if ($LASTEXITCODE -eq 0) {
            $success = $true
        } else {
            $success = $false
        }
    } else {
        Write-Host "Token trống, hủy thao tác." -ForegroundColor Red
        Read-Host "Nhấn Enter để thoát..."
        exit 0
    }
} elseif ($choice -eq "1" -or [string]::IsNullOrWhiteSpace($choice)) {
    Write-Host ""
    Write-Host "Đang đẩy lên GitHub (Vui lòng xác thực nếu có cửa sổ hiện ra)..." -ForegroundColor Yellow
    & $gitExe push -u origin main
    if ($LASTEXITCODE -eq 0) {
        $success = $true
    } else {
        $success = $false
    }
} else {
    Write-Host "Đã hủy thao tác." -ForegroundColor Gray
    Read-Host "Nhấn Enter để thoát..."
    exit 0
}

Write-Host ""
if ($success) {
    Write-Host "======================================================================" -ForegroundColor Green
    Write-Host "  🎉 THÀNH CÔNG RỰC RỠ! CODE ĐÃ ĐƯỢC ĐẨY LÊN GITHUB HOÀN TẤT!         " -ForegroundColor Green
    Write-Host "======================================================================" -ForegroundColor Green
    Write-Host ""
    Write-Host "👉 BƯỚC TIẾP THEO: XUẤT BẢN LÊN VERCEL (https://vercel.com/nvt1)" -ForegroundColor Yellow
    Write-Host "   1. Mở trình duyệt vào: https://vercel.com/new" -ForegroundColor White
    Write-Host "   2. Ở danh sách GitHub Repositories, tìm: nihongo-go -> Bấm [Import]" -ForegroundColor White
    Write-Host "   3. Framework Preset: Để Other (hoặc mặc định)" -ForegroundColor White
    Write-Host "   4. Bấm nút [Deploy] màu xanh -> Chờ 20 giây!" -ForegroundColor White
    Write-Host ""
    Write-Host "🌟 Vercel sẽ cấp đường link trực tiếp (ví dụ: https://nihongo-go-nvt1.vercel.app)" -ForegroundColor Cyan
    Write-Host "   Bất kỳ ai trên máy tính, điện thoại hay iPad đều có thể truy cập học!" -ForegroundColor Cyan
    Write-Host ""
} else {
    Write-Host "======================================================================" -ForegroundColor Red
    Write-Host "  [!] QUÁ TRÌNH PUSH GẶP GIÁN ĐOẠN HOẶC CHƯA XÁC THỰC ĐƯỢC           " -ForegroundColor Red
    Write-Host "======================================================================" -ForegroundColor Red
    Write-Host "Vui lòng kiểm tra:" -ForegroundColor Yellow
    Write-Host "1. Bạn đã tạo Repository 'nihongo-go' trên GitHub chưa? (https://github.com/new)" -ForegroundColor White
    Write-Host "2. Nếu GitHub yêu cầu Token, hãy chọn cách [2] và dán Token (ghp_...)" -ForegroundColor White
    Write-Host ""
}

Read-Host "Nhấn Enter để kết thúc..."
