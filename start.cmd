@echo off
REM Start production server
REM Usage: .\start.cmd

set PATH=C:\nvm4w\nodejs;%PATH%

echo Starting production server...
pnpm start
