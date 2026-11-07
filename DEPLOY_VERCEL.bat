@echo off
chcp 65001 >nul
title NIHONGO GO - DEPLOY VERCEL VA GITHUB
cd /d "%~dp0"

echo ======================================================================
echo    NIHONGO GO! - DEPLOY LEN VERCEL VA DONG BO GITHUB
echo ======================================================================
echo.

powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0push_github.ps1"

echo.
pause
