@echo off
REM Helper to add shadcn components with node in PATH
set PATH=C:\nvm4w\nodejs;%PATH%
pnpm dlx shadcn@latest add %*
