chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    document.body.style.fontFamily = request.font;
  });
  