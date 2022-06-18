// create a context menu
browser.contextMenus.create({
    id: "dictionary",
    title: "search on cambridge dictionary",
    contexts: ["selection"]
});

//add action listener to the context menu
browser.contextMenus.onClicked.addListener(contextMenuAction);

function contextMenuAction(info, tab) {
    let term = info.selectionText;
    browser.sidebarAction.setPanel({
        panel: `/index.html#${term}`
    });
    browser.sidebarAction.open();
}