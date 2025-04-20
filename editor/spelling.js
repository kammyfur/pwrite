if (require('os').platform() == "linux") {
    global.SpellCheckHandler   = require('electron-spellchecker').SpellCheckHandler;
    global.ContextMenuBuilder  = require('electron-spellchecker').ContextMenuBuilder;
    global.ContextMenuListener = require('electron-spellchecker').ContextMenuListener;
}

if (require('os').platform() == "win32") {
    global.SpellCheckHandler   = require('../win32_bin/node_modules/electron-spellchecker').SpellCheckHandler;
    global.ContextMenuBuilder  = require('../win32_bin/node_modules/electron-spellchecker').ContextMenuBuilder;
    global.ContextMenuListener = require('../win32_bin/node_modules/electron-spellchecker').ContextMenuListener;
}

if (require('os').platform() != "linux" && require('os').platform() != "win32") {
    console.error("Platform not supported by pWrite spell checking");
}

window.spellCheckHandler = new SpellCheckHandler();
window.spellCheckHandler.attachToInput();

window.spellCheckHandler.switchLanguage(langprop);
window.spellCheckHandler._automaticallyIdentifyLanguages = false;

let contextMenuBuilder = new ContextMenuBuilder(window.spellCheckHandler);
let contextMenuListener = new ContextMenuListener((info) => {
  contextMenuBuilder.showPopupMenu(info);
});

contextMenuBuilder.stringTable.copyMail = () => lang.spellcheckmenu.copymail;
contextMenuBuilder.stringTable.copyLinkUrl = () => lang.spellcheckmenu.copylink;
contextMenuBuilder.stringTable.openLinkUrl = () => lang.spellcheckmenu.openlink;
contextMenuBuilder.stringTable.copyImageUrl = () => lang.spellcheckmenu.copyimgsrc;
contextMenuBuilder.stringTable.copyImage = () => lang.spellcheckmenu.copyimg;
contextMenuBuilder.stringTable.addToDictionnary = () => lang.spellcheckmenu.add;
contextMenuBuilder.stringTable.lookUpDefinition = (word) => lang.spellcheckmenu.lookup + word;
contextMenuBuilder.stringTable.searchGoogle = () => lang.spellcheckmenu.search;
contextMenuBuilder.stringTable.cut = () => lang.spellcheckmenu.cut;
contextMenuBuilder.stringTable.copy = () => lang.spellcheckmenu.copy;
contextMenuBuilder.stringTable.paste = () => lang.spellcheckmenu.paste;
contextMenuBuilder.stringTable.inspectElement = () => lang.spellcheckmenu.inspect;
