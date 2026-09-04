@echo off
setlocal
cd /d "%~dp0"

where py >nul 2>nul
if %errorlevel%==0 (
  start "JC Birthday Local Server" cmd /k "cd /d ""%~dp0"" && py -m http.server 8080"
  goto OPEN
)

where python >nul 2>nul
if %errorlevel%==0 (
  start "JC Birthday Local Server" cmd /k "cd /d ""%~dp0"" && python -m http.server 8080"
  goto OPEN
)

where node >nul 2>nul
if %errorlevel%==0 (
  start "JC Birthday Local Server" cmd /k "cd /d ""%~dp0"" && node local-server.js"
  goto OPEN
)

echo.
echo Python or Node.js is required for local microphone testing.
echo You can also upload this folder to GitHub Pages and test the HTTPS site.
echo.
pause
exit /b 1

:OPEN
timeout /t 2 /nobreak >nul
start "" "http://localhost:8080"
exit /b 0
