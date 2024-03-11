function initPopup() {
    chrome.tabs.query({"currentWindow": true}, function(tabs){
        if (!tabs.length) return;

        var listTextArea = document.getElementById("list");

        for (var i=0; i<tabs.length; ++i) {
            listTextArea.value += tabs[i].url + "\n";
            console.log(i, " ", tabs[i].url)
        }

        if (location.search != "?focusHack") location.search = "?focusHack";
        listTextArea.select();
});

document.getElementById("openButton").addEventListener("click", openTextAreaList);


}

function openTextAreaList() {
    openList(document.getElementById("list").value);
}

window.addEventListener("load", initPopup);
