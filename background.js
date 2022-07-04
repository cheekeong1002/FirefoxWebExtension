// create a context menu
browser.contextMenus.create({
    id: "dictionary",
    title: "search on cambridge dictionary",
    contexts: ["selection"]
});

//add action listener to the context menu
browser.contextMenus.onClicked.addListener(contextMenuAction);

function contextMenuAction(info, tab) {
    //store the higlighted text in a blocked scope variable called term 
    let term = info.selectionText;
    //set the sidebar's panel which defines the content of the sidebar
    browser.sidebarAction.setPanel({
        //set index.html as content of sidebar and pass the variable to the html file
        panel: `/index.html#${term}`
    });
    browser.sidebarAction.open(); //displays the sidebar
}