# Chrome Extension to Run Ping Command on Windows

This is a Chrome extension that allows you to run the ping command on Windows and get the result in your browser.

## Installation

1. Clone or download this repository to your computer.
2. Open Google Chrome and go to chrome://extensions/.
3. Enable Developer mode by clicking the toggle switch in the upper-right corner.
4. Click the "Load unpacked" button and select the folder where you cloned or downloaded this repository.

## Usage

1. Open a webpage in Google Chrome.
2. Click the extension icon in the toolbar to open the popup window.
3. The popup window will display the hostname of the current webpage.
4. The extension will automatically send a ping request to the hostname and display the result in the popup window.

## Files

### manifest.json

This file contains the metadata for the extension, including the name, version, and permissions. It also specifies the background script and popup window.

### background.js

This file is the background script for the extension. It listens for messages from the popup window and sends them to the native messaging host, which executes the ping command and sends the result back.

### ping_batch.bat

This file is a batch script that executes the ping command and returns the result code.

### ping.json

This file is a configuration file for the native messaging host. It specifies the path to the Python script and the allowed origins for the extension.

### ping.py

This file is the Python script that executes the ping command and sends the result back to the extension.

### popup.html

This file is the HTML file for the popup window. It displays the hostname and the result of the ping request.

### popup.js

This file is the JavaScript file for the popup window. It sends a message to the background script with the hostname and displays the result of the ping request in the popup window.

## Native Messaging Host Installation

In addition to installing the Chrome extension, you must also install the native messaging host to run the ping command.

1. Copy the ping folder to C:\Users\<username>\.
2. Open the ping.reg file and add it to the Windows registry.
3. Make sure that the path in ping.json matches the path to the ping.py file.
4. Make sure user system install python. 
## Limitations

This extension only works on Windows and requires the ping command to be installed. It may not work on some systems due to security restrictions.
