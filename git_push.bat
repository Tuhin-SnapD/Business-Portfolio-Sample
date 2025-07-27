@echo off
echo Git Auto Push Script

REM Add all changes
git add .

REM Prompt user for commit message
set /p msg="Enter commit message: "

REM Only commit if message is not empty
if "%msg%"=="" (
    echo Commit message cannot be empty.
    pause
    exit /b
)

REM Commit and push
git commit -m "%msg%"
git push

echo ✅ Changes pushed successfully!
pause
