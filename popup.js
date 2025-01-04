document.getElementById('applyFont').addEventListener('click', () => {
    const selectedFont = document.getElementById('fontSelector').value;
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, {font: selectedFont});
    });
  });
  