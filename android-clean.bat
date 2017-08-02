@echo off
SET apk1=C:\Users\Lenovo\Projects\Mobile-Projects\sandwich\platforms\android\build\outputs\apk\unsigned.apk
SET apk2=C:\Users\Lenovo\Projects\Mobile-Projects\sandwich\platforms\android\build\outputs\apk\android-release-unsigned.apk

powershell.exe -Command "Remove-Item C:\Users\Lenovo\Projects\Mobile-Projects\sandwich\platforms\android\build\outputs\apk\*.apk"

