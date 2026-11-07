@echo off
chcp 65001 >nul
title NIHONGO GO - DONG BO CODE LEN GITHUB VA VERCEL
cd /d "%~dp0"

echo ======================================================================
echo    NIHONGO GO! - CONG CU DONG BO CODE LEN GITHUB VA VERCEL
echo ======================================================================
echo.

powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0push_github.ps1"

echo.
pause
