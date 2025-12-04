document.addEventListener("DOMContentLoaded", () => {
    const servers = document.createElement("datalist");
    servers.id = "servers";
    let validOptions = [];

    for(let i = 0; i <= 99; i++){
        let option = document.createElement("option");
        let optionValue = `s${`${i}`.padStart(2, "0")}`
        option.value = optionValue;
        servers.appendChild(option)
        validOptions.push(optionValue)
    }

    console.log(servers)
    serverContainer.appendChild(servers);

    // Just making sure default is not lost
    serverInput.value = "s01";
    serverInput.list = servers.id;

    const btn = document.getElementById("fixBtn");
    if (!btn) return;
    
    btn.addEventListener("click", () => {
        const chosenServer = serverInput.value || "s01"; // by default I will keep the original s01 that seemed to work generally

        if (!validOptions.includes(chosenServer))
        {
            error.classList.remove("hidden")
            error.innerText = `Chosen server '${chosenServer}' is not valid (only s00 to s99 allowed)`
            return;
        }

        hideError();
        chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
            chrome.scripting.executeScript({
                target: { tabId: tabs[0].id },
                func: fixImagesInPage,
                args: [chosenServer]
            });
        });
    });
});

function fixImagesInPage(server) {
    console.log("Fixing images in MangaPark with server:", server);
    document.querySelectorAll("img").forEach(img => {
        if (/https:\/\/s[0-9][0-9]/.test(img.src)) {
            img.src = img.src.replace(/s[0-9][0-9]/, server);
        }
    });
    console.log("Fixed!");
  }

  function hideError(){
      error.classList.add("hidden")
      error.innerText = "";
  }