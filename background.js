// create a context menu
browser.contextMenus.create({
    id: "dictionary",
    title: "search on cambridge dictionary",
    contexts: ["selection"]
});

//add action listener to the context menu
browser.contextMenus.onClicked.addListener(contextMenuAction);

function contextMenuAction(info, tab) {
    const url = "https://dictionary.cambridge.org/dictionary/english/"+info.selectionText;
    browser.tabs.create({url: url});
}