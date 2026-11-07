@echo off
title Nihongo Go! - Ung Dung Hoc Tieng Nhat N5 & N4
color 0B
echo ================================================================
echo    DANG KHOI DONG APP HOC TIENG NHAT N5 & N4 (NIHONGO GO!)...
echo ================================================================
echo.
cd /d "%~dp0"
powershell -ExecutionPolicy Bypass -NoProfile -File "server.ps1"
if errorlevel 1 (
    echo.
    echo [!] Khong the khoi dong qua cong mang.
    echo [*] Dang mo truc tiep index.html vao trinh duyet...
    start "" "index.html"
)
pause
