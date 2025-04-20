const { app, BrowserWindow, session } = require('electron');
const open = require('opn');

var force_quit = false;

function createWindow() {
    let win = new BrowserWindow({
        width: 800,  // WARNING: Default window size is overridden by the runtime, this is just loader size
        height: 450, // WARNING: Default window size is overridden by the runtime, this is just loader size
        frame: false,
        resizable: false,
        title: "pWrite",
        icon: "icon/pwrite.png",
        webPreferences: {
            forceQuit: false,
            nodeIntegration: true,
        }
    })
    win.loadFile('dom/main.html');
    win.webContents.on('new-window', function(event, url){
        event.preventDefault();
        open(url);
    });
}

app.on('ready', createWindow)
