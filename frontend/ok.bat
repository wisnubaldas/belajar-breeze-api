@echo off
Set "PathFolder=C:\laragon\www\belajar-breeze-api\frontend"
Set "LogFile=C:\laragon\www\belajar-breeze-api\frontend\Tree_Result.txt"
Rem simply pipe tree output to skip the two lines in the header
Tree "%PathFolder%" /F /A | more +2>"%LogFile%" 
If Exist "%LogFile%" Start "" "%LogFile%"