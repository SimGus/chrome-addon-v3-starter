// This is the service worker script, which executes in its own context
// when the extension is installed or refreshed (or when you access its console).
// It would correspond to the background script in chrome extensions v2.

console.log("This prints to the adfds of the service worker (background script)")
console.log("OOGA BOOGA!")

// Importing and using functionality from external files is also possible.
importScripts('service-worker-utils.js')

// This code runs in the service worker (background) context

function logURL(details) {
    console.log(details);
    // console.log(`Loading: ${details.url}`);
}
  
// chrome.webRequest.onBeforeRequest.addListener(logURL,
//     { urls: ["<all_urls>"]},
// );

chrome.webRequest.onCompleted.addListener(
    function(details) {
        console.log(details.url);
    },
    {urls: ["*://content.echo360.org.uk/*.m3u8*"]}
);