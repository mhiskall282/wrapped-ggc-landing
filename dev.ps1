#!/usr/bin/env pwsh
# Helper script to run Next.js dev server with explicit node path
# Usage: .\dev.ps1

$NODE = "C:\nvm4w\nodejs\node.exe"
$NEXT = "node_modules\next\dist\bin\next"

Write-Host "Starting Next.js dev server..." -ForegroundColor Cyan
& $NODE $NEXT dev
