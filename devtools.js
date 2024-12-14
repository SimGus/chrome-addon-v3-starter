console.log("BOMBOOOCLAAATTT!!!!");
chrome.devtools.network.onRequestFinished.addListener(function (request) {
    const url = request.request.url;
    // Implement your logic to handle the URL
    console.log("Request URL:", url);
});
