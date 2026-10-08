# Inclass 05 - Profile Details App

A single-screen React Native application using Expo SDK 57 and JavaScript.

## Features

- Black My Profile header and light background matching the assignment reference.
- Local circular photo with a decorative green check badge.
- Name, email and points with icons.
- Floating + button: each tap adds exactly one point.
- Scrollable content and safe spacing around system bars.

Points start at zero and reset on a full application restart. No database or login is required.

## Personalize

Edit `profile.js` to set your name and email. The supplied photo is loaded from
`assets/profile.jpeg`. Replace it with your own JPEG or update the static require
path in profile.js if using a different filename. The badge is a visual element,
not an account verification feature.

## Replace the existing project on Windows

1. Stop the running Expo terminal with Ctrl+C.
2. Extract the ZIP into a temporary folder.
3. Open the extracted inclass05-profile folder.
4. Copy its contents into C:\Users\LENOVO\Desktop\mad\inclass05-profile.
5. Choose Replace the files in the destination. Copy the contents, not the outer folder.
6. Keep your existing Git history and unrelated local files.
7. Open PowerShell in the project folder and run:

```powershell
npm ci
```

8. Start an Android emulator from Android Studio's Device Manager.
9. Run these commands in that same terminal:

```powershell
$env:ANDROID_HOME = "$env:LOCALAPPDATA\Android\Sdk"
$env:Path += ";$env:ANDROID_HOME\platform-tools;$env:ANDROID_HOME\emulator"
adb devices
npx expo start --android --clear
```

The SDK path assumes the default Windows installation location. Your emulator
must appear with status device. Keep the Expo terminal running.

## Fresh download

Install Node.js LTS, extract the ZIP, open the project folder and run npm ci.
Then start your emulator and run npx expo start --android.
Dependencies, Git metadata and generated folders are excluded from the ZIP.

## Manual checks

1. Photo, name and email are visible.
2. Initial points are 0.
3. One tap on + changes points to 1.
4. Four more taps change points to 5.
5. Rapid taps each add one point.
6. Large text settings allow scrolling without covering content with the button.

## Submission

Create a public GitHub repository and push the source, assets and lockfile.
Keep node_modules and .expo excluded. Put the repository URL in a Word document,
save as YOUR_STUDENT_INDEX.docx and upload to Inclass 05. Verify the repository
is visible while signed out of GitHub.

## Code checks

Run `npm run lint` and `npm run typecheck`. Both passed for this update.
The Android production bundle also exported successfully. An emulator UI test
was not performed in the editing environment; use the manual checks above.
