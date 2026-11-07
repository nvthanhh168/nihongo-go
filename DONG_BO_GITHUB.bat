@echo off
chcp 65001 >nul
title NIHONGO GO - DONG BO CODE LEN GITHUB
cd /d "%~dp0"

echo ======================================================================
echo    NIHONGO GO! - DONG BO CODE LEN GITHUB
echo ======================================================================
echo.

powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0push_github.ps1"

echo.
pause
