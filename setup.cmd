@echo off
REM Setup script - installs dependencies and approves build scripts
REM Usage: .\setup.cmd

set PATH=C:\nvm4w\nodejs;%PATH%

echo ========================================
echo  wGGC Landing - Project Setup
echo ========================================
echo.

echo [1/3] Installing dependencies...
pnpm install

echo.
echo [2/3] Approving build scripts...
echo y | pnpm approve-builds

echo.
echo [3/3] Verifying installation...
pnpm list --depth=0

echo.
echo ========================================
echo  Setup Complete!
echo ========================================
echo.
echo Next steps:
echo   .\dev.cmd              - Start dev server
echo   .\add-component.cmd    - Add UI components
echo   .\commit.cmd "message" - Quick commit
echo.
