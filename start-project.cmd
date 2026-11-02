@echo off
setlocal

cd /d "%~dp0"
if errorlevel 1 (
  echo Could not open the project folder.
  exit /b 1
)

where node >nul 2>&1
if errorlevel 1 (
  echo Node.js is required. Install the current LTS release, then run this file again.
  pause
  exit /b 1
)

where npm.cmd >nul 2>&1
if errorlevel 1 (
  echo npm is required. Reinstall Node.js with npm included, then run this file again.
  pause
  exit /b 1
)

if not exist "node_modules\vite\bin\vite.js" (
  echo Installing project dependencies...
  call npm.cmd install
  if errorlevel 1 (
    echo Dependency installation failed. Check your network connection and try again.
    pause
    exit /b 1
  )
)

echo Starting MI Wardrobe at http://127.0.0.1:3000
call npm.cmd run dev -- --open
set "EXIT_CODE=%ERRORLEVEL%"
if not "%EXIT_CODE%"=="0" (
  echo The development server stopped with an error.
  pause
)
exit /b %EXIT_CODE%
