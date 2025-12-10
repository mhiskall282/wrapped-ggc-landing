@echo off
REM Quick commit helper - stages all changes and commits with message
REM Usage: .\commit.cmd "your commit message"

set PATH=C:\nvm4w\nodejs;%PATH%

if "%~1"=="" (
    echo Error: Please provide a commit message
    echo Usage: .\commit.cmd "your commit message"
    exit /b 1
)

echo.
echo [1/3] Staging all changes...
git add .

echo.
echo [2/3] Committing with message: %~1
git commit -m "%~1"

echo.
echo [3/3] Showing status...
git status

echo.
echo Done! To push changes, run: git push
