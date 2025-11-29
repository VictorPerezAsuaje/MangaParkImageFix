document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("fixBtn");
    if (!btn) return;
    
    btn.addEventListener("click", () => {
        chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
            chrome.scripting.executeScript({
                target: { tabId: tabs[0].id },
                func: fixImagesInPage
            });
        });
    });
});

function fixImagesInPage() {
    console.log("Fixing images in MangaPark...");
    document.querySelectorAll("img").forEach(img => {
        if (/https:\/\/s0\d+/.test(img.src)) {
            img.src = img.src.replace(/s0\d+/, "s01");
        }
    });
    console.log("Fixed!");
  }