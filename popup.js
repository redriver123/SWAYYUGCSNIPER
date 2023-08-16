    chrome.runtime.sendMessage({ action: "buyItem", itemID: itemID });
  }
});

document.getElementById("resetIDs").addEventListener("click", function () {
chrome.runtime.sendMessage({ action: "resetIDs"});
});  

document.getElementById("showIDs").addEventListener("click", function () {
chrome.runtime.sendMessage({ action: "showIDs"});
}); 

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  alert(message.message)
});
