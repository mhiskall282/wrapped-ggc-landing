@echo off
REM Production build script
REM Usage: .\build.cmd

set PATH=C:\nvm4w\nodejs;%PATH%

echo Building for production...
pnpm build

echo.
echo Build complete! To start production server, run:
echo   .\start.cmd
