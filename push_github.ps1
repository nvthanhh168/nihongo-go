# ==============================================================================
# NIHONGO GO! - CONG CU DONG BO CODE LEN GITHUB VA VERCEL
# ==============================================================================
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
$Host.UI.RawUI.WindowTitle = "NIHONGO GO - DONG BO GITHUB & VERCEL"

Clear-Host
Write-Host "======================================================================" -ForegroundColor Cyan
Write-Host "   🌸 NIHONGO GO! - DONG BO CODE LEN GITHUB VA VERCEL 🌸              " -ForegroundColor Magenta
Write-Host "======================================================================" -ForegroundColor Cyan
Write-Host ""

$gitExe = "git"
if (-not (Get-Command git -ErrorAction SilentlyContinue)) {
    $minGit = Join-Path $env:USERPROFILE ".gemini\antigravity\bin\mingit\cmd\git.exe"
    if (Test-Path $minGit) {
        $gitExe = $minGit
    } else {
        Write-Host "[ERROR] Khong tim thay Git!" -ForegroundColor Red
        exit 1
    }
}

$projDir = $PSScriptRoot
if (-not $projDir) { $projDir = (Get-Location).Path }
Set-Location $projDir

Write-Host "[1/2] Dang kiem tra va dong goi ma nguon moi nhat..." -ForegroundColor Yellow
& $gitExe add -A
$status = & $gitExe status --porcelain
if ($status) {
    & $gitExe commit -m "update: release Nihongo Go responsive PC/iPad/Mobile and N5-N4 curriculum"
    Write-Host "[OK] Da tao commit moi thanh cong." -ForegroundColor Green
} else {
    Write-Host "[INFO] Ma nguon da san sang, khong co file moi can commit." -ForegroundColor Cyan
}

# Doc token tu file .git_token local (neu co)
$tokenFile = Join-Path $projDir ".git_token"
if (Test-Path $tokenFile) {
    $token = (Get-Content $tokenFile -Raw).Trim()
    if ($token) {
        $authUrl = "https://" + $token + "@github.com/nvthanhh168/nihongo-go.git"
        & $gitExe remote set-url origin $authUrl
    }
}

Write-Host "[2/2] Dang day code len GitHub (origin main)..." -ForegroundColor Yellow
& $gitExe push origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "======================================================================" -ForegroundColor Green
    Write-Host "  🎉 THANH CONG! CODE DA DUOC DONG BO LEN GITHUB HOAN TAT!            " -ForegroundColor Green
    Write-Host "======================================================================" -ForegroundColor Green
    Write-Host ""
    Write-Host "👉 Vercel se tu dong build & cap nhat tai: https://vercel.com/nvt1" -ForegroundColor Cyan
    Write-Host ""
} else {
    Write-Host ""
    Write-Host "[!] Neu GitHub yeu cau xac thuc token, vui long kiem tra file .git_token hoac cau hinh git." -ForegroundColor Yellow
}
