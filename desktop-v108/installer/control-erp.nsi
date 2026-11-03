; Control ERP - Windows installer (NSIS 3, Modern UI 2)
; Built by scripts/build-win-installer.sh. The usual build is `npm run dist` (electron-builder);
; this script is the offline alternative that needs no npm packages.
;
;   makensis -DVERSION=1.0.0 -DSTAGE=<unpacked app folder> -DOUTFILE=<Setup.exe> control-erp.nsi

Unicode true
!ifndef VERSION
  !define VERSION "1.0.0"
!endif
!ifndef STAGE
  !error "Pass -DSTAGE=<unpacked program folder>"
!endif
!ifndef OUTFILE
  !define OUTFILE "Control-ERP-Desktop-Setup-${VERSION}.exe"
!endif

!define APPNAME "Control ERP Desktop"
!define EXENAME "Control ERP Desktop.exe"
!define DATAFOLDER "Control ERP"
!define COMPANY "Control Contracting & Trading Company (Private) L.L.C"
!define AUMID "ae.control.erp.desktop"
!define UNKEY "Software\Microsoft\Windows\CurrentVersion\Uninstall\ControlERPDesktop"

Name "${APPNAME}"
OutFile "${OUTFILE}"
InstallDir "$LOCALAPPDATA\Programs\${APPNAME}"
InstallDirRegKey HKCU "${UNKEY}" "InstallLocation"
RequestExecutionLevel user
SetCompressor /SOLID lzma
SetCompressorDictSize 64
BrandingText "${APPNAME} ${VERSION}"
ShowInstDetails nevershow
ShowUninstDetails nevershow

VIProductVersion "${VERSION}.0"
VIAddVersionKey "ProductName" "${APPNAME}"
VIAddVersionKey "FileDescription" "${APPNAME} Setup"
VIAddVersionKey "CompanyName" "${COMPANY}"
VIAddVersionKey "LegalCopyright" "Copyright (C) 2026 ${COMPANY}"
VIAddVersionKey "FileVersion" "${VERSION}"
VIAddVersionKey "ProductVersion" "${VERSION}"

!include "MUI2.nsh"
!include "LogicLib.nsh"
!include "FileFunc.nsh"

!define MUI_ICON "${STAGE}\resources\app\build\icon.ico"
!define MUI_UNICON "${STAGE}\resources\app\build\icon.ico"
!define MUI_WELCOMEFINISHPAGE_BITMAP "${BUILDRES}\installerSidebar.bmp"
!define MUI_UNWELCOMEFINISHPAGE_BITMAP "${BUILDRES}\installerSidebar.bmp"
!define MUI_HEADERIMAGE
!define MUI_HEADERIMAGE_RIGHT
!define MUI_HEADERIMAGE_BITMAP "${BUILDRES}\installerHeader.bmp"
!define MUI_ABORTWARNING

!define MUI_WELCOMEPAGE_TITLE "Install ${APPNAME} ${VERSION}"
!define MUI_WELCOMEPAGE_TEXT "This installs ${APPNAME} on this computer.$\r$\n$\r$\nYour company data is kept in one file in Documents\${DATAFOLDER}. Installing a newer version or uninstalling the program never deletes it.$\r$\n$\r$\nClick Next to continue."
!insertmacro MUI_PAGE_WELCOME
!insertmacro MUI_PAGE_DIRECTORY
!insertmacro MUI_PAGE_INSTFILES
!define MUI_FINISHPAGE_RUN "$INSTDIR\${EXENAME}"
!define MUI_FINISHPAGE_RUN_TEXT "Open ${APPNAME} now"
!insertmacro MUI_PAGE_FINISH

!insertmacro MUI_UNPAGE_CONFIRM
!insertmacro MUI_UNPAGE_INSTFILES
!define MUI_UNFINISHPAGE_NOAUTOCLOSE
!insertmacro MUI_UNPAGE_FINISH

!insertmacro MUI_LANGUAGE "English"

!macro WaitForAppClosed
  ${Do}
    nsProcess::_FindProcess "${EXENAME}"
    Pop $R0
    ${If} $R0 != 0
      ${Break}
    ${EndIf}
    MessageBox MB_RETRYCANCEL|MB_ICONEXCLAMATION "${APPNAME} is open. Close it first (so your last changes are saved), then click Retry." IDRETRY +2
    Abort
  ${Loop}
  nsProcess::_Unload
!macroend

Section "Install"
  !insertmacro WaitForAppClosed
  SetOutPath "$INSTDIR"
  ; Remove the previous program files (never the data folder) so no old file is left behind.
  RMDir /r "$INSTDIR\resources\app"
  RMDir /r "$INSTDIR\locales"
  File /r "${STAGE}\*.*"

  WriteUninstaller "$INSTDIR\Uninstall ${APPNAME}.exe"

  CreateShortCut "$SMPROGRAMS\${APPNAME}.lnk" "$INSTDIR\${EXENAME}" "" "$INSTDIR\${EXENAME}" 0
  WinShell::SetLnkAUMI "$SMPROGRAMS\${APPNAME}.lnk" "${AUMID}"
  CreateShortCut "$DESKTOP\${APPNAME}.lnk" "$INSTDIR\${EXENAME}" "" "$INSTDIR\${EXENAME}" 0
  WinShell::SetLnkAUMI "$DESKTOP\${APPNAME}.lnk" "${AUMID}"

  WriteRegStr HKCU "${UNKEY}" "DisplayName" "${APPNAME}"
  WriteRegStr HKCU "${UNKEY}" "DisplayVersion" "${VERSION}"
  WriteRegStr HKCU "${UNKEY}" "Publisher" "${COMPANY}"
  WriteRegStr HKCU "${UNKEY}" "DisplayIcon" "$INSTDIR\${EXENAME},0"
  WriteRegStr HKCU "${UNKEY}" "InstallLocation" "$INSTDIR"
  WriteRegStr HKCU "${UNKEY}" "UninstallString" '"$INSTDIR\Uninstall ${APPNAME}.exe"'
  WriteRegStr HKCU "${UNKEY}" "QuietUninstallString" '"$INSTDIR\Uninstall ${APPNAME}.exe" /S'
  WriteRegDWORD HKCU "${UNKEY}" "NoModify" 1
  WriteRegDWORD HKCU "${UNKEY}" "NoRepair" 1
  ${GetSize} "$INSTDIR" "/S=0K" $0 $1 $2
  IntFmt $0 "0x%08X" $0
  WriteRegDWORD HKCU "${UNKEY}" "EstimatedSize" "$0"
SectionEnd

Section "Uninstall"
  !insertmacro WaitForAppClosed
  WinShell::UninstAppUserModelId "${AUMID}"
  Delete "$SMPROGRAMS\${APPNAME}.lnk"
  Delete "$DESKTOP\${APPNAME}.lnk"
  RMDir /r "$INSTDIR"
  DeleteRegKey HKCU "${UNKEY}"
  MessageBox MB_OK|MB_ICONINFORMATION "${APPNAME} has been removed.$\r$\n$\r$\nYour data file and backups were kept in Documents\${DATAFOLDER}." /SD IDOK
SectionEnd
