# Variant-Poster-App

To run you need:
1. An OCR server (you can download the OCR server code I have in my other repo)
2. In the project directory, run 'cordova build && cordova emulate'
3. Drag and drop your poster picture into the iOS emulator to save to your photo libary


ToDo

1. Add functionality to take picture from app instead of just uploading
2. Add an aesthetic table presentation from returned JSON data
3. Clean up comments in code
4. Compile for Android

# Used this technique to get Android to compile to correct target (23):
http://stackoverflow.com/questions/29396252/cordova-error-please-install-android-target-android-21

# Resource used to install android emulator. Didn't quite work:
http://www.panopticdev.com/blog2014/phonegap-mac-osx-setup-configuration-android-ios/

# Personal Notes
Be sure to debug and develop using the 'cordova serve' command because it compiles and serves libraries the correct way (rather than forcing it with 'python -m SimpleHTTPServer' in the 'www' directory).


