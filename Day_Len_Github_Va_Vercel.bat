@echo off
chcp 65001 >nul
title NIHONGO GO - ĐẨY CODE LÊN GITHUB VA VERCEL
cd /d "%~dp0"

echo ======================================================================
echo    🌸 NIHONGO GO! - CÔNG CỤ TỰ ĐỘNG ĐẨY CODE LÊN GITHUB & VERCEL 🌸
echo ======================================================================
echo.

where git >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [!] Khong tim thay Git trong PATH he thong, dang kiem tra thu muc Antigravity...
    set "GIT_CMD=%USERPROFILE%\.gemini\antigravity\bin\mingit\cmd\git.exe"
) else (
    set "GIT_CMD=git"
)

powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0push_github.ps1"
if %ERRORLEVEL% NEQ 0 (
    echo.
    echo [!] Chay truc tiep Git fallback...
    "%GIT_CMD%" add -A
    "%GIT_CMD%" commit -m "update: release Nihongo Go responsive PC/iPad/Mobile and 25 lessons Minna"
    "%GIT_CMD%" push origin main
)

echo.
pause
