const fs = require('fs');

// Function to log the event
function logEvent(event) {
    const timestamp = new Date().toISOString();
    const logMessage = `${timestamp} - ${event}\n`;

    fs.appendFile('log.txt', logMessage, (err) => {
        if (err) {
            console.error('Error writing to log file:', err);
        }
    });
}

// Example usage: Log the event when slow website trigger is activated
const slowWebsiteTriggerEvent = 'Slow website trigger activated: Redirecting to Google.com';
logEvent(slowWebsiteTriggerEvent);
