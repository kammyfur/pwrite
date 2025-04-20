function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
}

const menuActions = {
    docs: async () => {
        const { shell } = require('electron')
        await shell.openExternal('https://gitlab.com/minteck-projects/pwrite/wiki')
    },
    new: () => {
        if (!documentOpenned) {
            documentOpenned = true;
            document.getElementById('home').classList.add('hide');
            titlebar.updateTitle(lang.untitled + " — pWrite");
            documentName = lang.untitled;
            document.getElementById('fileopenned').classList.remove('hide');
            document.getElementById('status').innerHTML = lang.status.new;
        } else {
            menuActions.close(true);
        }
    },
    close: (reopen, close) => {
        if (typeof reopen == "undefined") {
            reopen = false;
        }
        if (typeof close == "undefined") {
            close = false;
        }
        if (!documentOpenned) {
            documentOpenned = false;
            documentRecovery = false;
            editplace.setData("");
            documentPath = "";
            lastSaveContentHTML = "";
            titlebar.updateTitle("pWrite");
            documentName = "";
            document.getElementById('home').classList.remove('hide');
            document.getElementById('fileopenned').classList.add('hide');
            if (reopen) {
                documentOpenned = true;
                document.getElementById('home').classList.add('hide');
                titlebar.updateTitle(lang.untitled + " — pWrite");
                documentName = lang.untitled;
                document.getElementById('fileopenned').classList.remove('hide');
                document.getElementById('status').innerHTML = lang.status.new;
            }
            if (close) {
                remote.getCurrentWindow().destroy();
            }
        } else {
            if (lastSaveContentHTML === editplace.getData()) {
                continueProcess = true;
                backupfile = documentPath + ".bak";
                fs = require('fs');
                if (fs.existsSync(backupfile)) {
                    if (documentRecovery) {
                        delbkp = remote.dialog.showMessageBoxSync(remote.getCurrentWindow(),
                            {
                                type: "question",
                                title: lang.dialogs.delbackup.title,
                                message: lang.dialogs.delbackup.message,
                                buttons: [
                                    lang.dialogs.delbackup.ok,
                                    lang.dialogs.delbackup.cancel
                                ],
                                cancelId: 1,
                                defaultId: 1
                            }
                        )
                        if (delbkp == 0) {
                            fs.unlinkSync(backupfile);
                        }
                    } else {
                        fs.unlinkSync(backupfile);
                    }
                }
                if (continueProcess) {
                    documentOpenned = false;
                    documentRecovery = false;
                    editplace.setData("");
                    documentPath = "";
                    lastSaveContentHTML = "";
                    titlebar.updateTitle("pWrite");
                    documentName = "";
                    document.getElementById('home').classList.remove('hide');
                    document.getElementById('fileopenned').classList.add('hide');
                    if (reopen) {
                        documentOpenned = true;
                        document.getElementById('home').classList.add('hide');
                        titlebar.updateTitle(lang.untitled + " — pWrite");
                        documentName = lang.untitled;
                        document.getElementById('fileopenned').classList.remove('hide');
                        document.getElementById('status').innerHTML = lang.status.new;
                    }
                    if (close) {
                        remote.getCurrentWindow().destroy();
                    }
                }
            } else {
                remote.dialog.showMessageBox(remote.getCurrentWindow(),
                    {
                        type: "question",
                        title: lang.confirm[4],
                        message: lang.confirm[0] + '"' + documentName + '"' + lang.confirm[1],
                        buttons: [
                            lang.confirm[2],
                            lang.confirm[3],
                            lang.confirm[5]
                        ],
                        cancelId: 1,
                        defaultId: 1
                    }
                ).then(back => {
                    if (back.response == 2) {
                        continueProcess = true;
                        backupfile = documentPath + ".bak";
                        fs = require('fs');
                        if (fs.existsSync(backupfile)) {
                            if (documentRecovery) {
                                delbkp = remote.dialog.showMessageBoxSync(remote.getCurrentWindow(),
                                    {
                                        type: "question",
                                        title: lang.dialogs.delbackup.title,
                                        message: lang.dialogs.delbackup.message,
                                        buttons: [
                                            lang.dialogs.delbackup.ok,
                                            lang.dialogs.delbackup.cancel
                                        ],
                                        cancelId: 1,
                                        defaultId: 1
                                    }
                                )
                                if (delbkp == 0) {
                                    fs.unlinkSync(backupfile);
                                }
                            } else {
                                fs.unlinkSync(backupfile);
                            }
                        }
                        if (continueProcess) {
                            if (menuActions.save() !== false) {
                                documentOpenned = false;
                                documentRecovery = false;
                                editplace.setData("");
                                documentPath = "";
                                lastSaveContentHTML = "";
                                titlebar.updateTitle("pWrite");
                                documentName = "";
                                document.getElementById('home').classList.remove('hide');
                                document.getElementById('fileopenned').classList.add('hide');
                                if (reopen) {
                                    documentOpenned = true;
                                    document.getElementById('home').classList.add('hide');
                                    titlebar.updateTitle(lang.untitled + " — pWrite");
                                    documentName = lang.untitled;
                                    document.getElementById('fileopenned').classList.remove('hide');
                                    document.getElementById('status').innerHTML = lang.status.new;
                                }
                                if (close) {
                                    remote.getCurrentWindow().destroy();
                                }
                            }
                        }
                    }
                    if (back.response == 0) {
                        continueProcess = true;
                        backupfile = documentPath + ".bak";
                        fs = require('fs');
                        if (fs.existsSync(backupfile)) {
                            if (documentRecovery) {
                                delbkp = remote.dialog.showMessageBoxSync(remote.getCurrentWindow(),
                                    {
                                        type: "question",
                                        title: lang.dialogs.delbackup.title,
                                        message: lang.dialogs.delbackup.message,
                                        buttons: [
                                            lang.dialogs.delbackup.ok,
                                            lang.dialogs.delbackup.cancel
                                        ],
                                        cancelId: 1,
                                        defaultId: 1
                                    }
                                )
                                if (delbkp == 0) {
                                    fs.unlinkSync(backupfile);
                                }
                            } else {
                                fs.unlinkSync(backupfile);
                            }
                        }
                        if (continueProcess) {
                            documentOpenned = false;
                            documentRecovery = false;
                            editplace.setData("");
                            documentPath = "";
                            lastSaveContentHTML = "";
                            titlebar.updateTitle("pWrite");
                            documentName = "";
                            document.getElementById('home').classList.remove('hide');
                            document.getElementById('fileopenned').classList.add('hide');
                            if (reopen) {
                                documentOpenned = true;
                                document.getElementById('home').classList.add('hide');
                                titlebar.updateTitle(lang.untitled + " — pWrite");
                                documentName = lang.untitled;
                                document.getElementById('fileopenned').classList.remove('hide');
                                document.getElementById('status').innerHTML = lang.status.new;
                            }
                            if (close) {
                                remote.getCurrentWindow().destroy();
                            }
                        }
                    }
                });
            }
        }
    },
    print: () => {
        if (documentOpenned) {
            locks.lock();
            document.getElementById('print-frame').contentDocument.head.innerHTML = "<style>" + document.getElementsByTagName('style')[0].innerHTML + "img{width: 100%;}figure{display: inline-block;}blockquote{border-left: #cecece solid 7px;margin-left: 30px;padding-left: 10px;font-style:italic;}" + "</style>";
            document.getElementById('print-frame').contentDocument.body.innerHTML = editplace.getData();
            document.getElementById('print-frame').contentWindow.print();
            locks.unlock();
        }
    },
    quit: () => {
        // Call the close function
        menuActions.close(false, true);
    },
    save: () => {
        returnstr = null;
        path = undefined;
        if (!documentOpenned) {
            remote.dialog.showMessageBoxSync(remote.getCurrentWindow(), {type:"error",title:lang.dialogs.notopenned.title,message:lang.dialogs.notopenned.message,buttons:["OK"]});
        } else {
            if (documentPath.trim() == "") {
                if (menuActions.saveAs() !== false) {
                    returnstr = true;
                } else {
                    returnstr = false;
                }
            } else {
                if (require('fs').existsSync(documentPath)) {
                    locks.lock()
                    backupfile = documentPath + ".bak";
                    fs = require('fs');
                    if (fs.existsSync(backupfile)) {
                        fs.unlinkSync(backupfile);
                    }
                    fs = require('fs');
                    text = btoa(encodeURI(editplace.getData()));
                    fs.writeFileSync(documentPath, text);
                    document.getElementById('status').innerHTML = lang.status.saved;
                    titlebar.updateTitle(require('path').basename(documentPath) + " — pWrite");
                    documentName = require('path').basename(documentPath);
                    lastSaveContentHTML = editplace.getData();
                    locks.unlock()
                } else {
                    if (menuActions.saveAs() !== false) {
                        returnstr = true;
                    } else {
                        returnstr = false;
                    }
                }
            }
        }
        return returnstr;
    },
    saveAs: () => {
        path = undefined;
        if (!documentOpenned) {
            remote.dialog.showMessageBoxSync(remote.getCurrentWindow(), {type:"error",title:lang.dialogs.notopenned.title,message:lang.dialogs.notopenned.message,buttons:["OK"]});
        } else {
            fs = require('fs');
            path = remote.dialog.showSaveDialogSync(remote.getCurrentWindow(), {
                title: lang.dialogs.save.title,
                filters: [
                    {
                        name: lang.dialogs.save.extension,
                        extensions: [ "pwd", "pwrite" ]
                    }
                ]
            });
            if (typeof path == "undefined" || typeof path == "null" || path == undefined || path == null) {
                return false;
            } else {
                if (typeof path !== "undefined") {
                    if (path.endsWith(".pwd") || path.endsWith(".pwrite")) {} else {
                        path = path + ".pwd";
                    }
                    if (fs.existsSync(path)) {
                        action = remote.dialog.showMessageBoxSync(remote.getCurrentWindow(),
                            {
                                type: "question",
                                title: lang.dialogs.replace.title,
                                message: lang.dialogs.replace.message,
                                buttons: [
                                    lang.dialogs.replace.replace,
                                    lang.dialogs.replace.cancel
                                ],
                                cancelId: 1
                            }
                        )
                        continueAction = action == 0;
                    } else {
                        continueAction = true;
                    }
                    if (continueAction) {
                        try {
                            locks.lock()
                            text = btoa(encodeURI(editplace.getData()));
                            fs.writeFileSync(path, text);
                            document.getElementById('status').innerHTML = lang.status.saved;
                            titlebar.updateTitle(require('path').basename(path) + " — pWrite");
                            documentName = require('path').basename(path);
                            documentPath = path;
                            lastSaveContentHTML = editplace.getData();
                            locks.unlock()
                        } catch (err) {
                            remote.dialog.showMessageBoxSync(remote.getCurrentWindow(), {type:"error",title:lang.dialogs.save.error[0],message:lang.dialogs.save.error[1],detail:err.message,buttons:["OK"]});
                        }
                    }
                }
            }
        }
    },
    _continueOpenHTML: () => {
        if (remote.dialog.showMessageBoxSync(remote.getCurrentWindow(), {type:"question",title:lang.dialogs.convert.title,message:lang.dialogs.convert.message,detail:lang.dialogs.convert.desc,buttons:["OK"]}) == 0) {
            if (!documentOpenned) {
                documentOpenned = true;
                document.getElementById('home').classList.add('hide');
                titlebar.updateTitle(lang.untitled + " — pWrite");
                documentName = lang.untitled;
                document.getElementById('fileopenned').classList.remove('hide');
            }
            fs = require('fs');
            path = remote.dialog.showOpenDialogSync(remote.getCurrentWindow(), {
                title: lang.dialogs.open.titlehtml,
                filters: [
                    {
                        name: lang.dialogs.open.extensionhtml,
                        extensions: [ "html", "htm", "xhtm", "xhtml" ]
                    }
                ]
            });
            if (typeof path == "undefined" || typeof path == "null" || path == undefined || path == null) {
                return false;
            } else {
                if (typeof path == "array" || typeof path == "object") {
                    path = path[0];
                }
                if (typeof path !== "undefined") {
                    if (!fs.existsSync(path)) {
                        remote.dialog.showMessageBoxSync(remote.getCurrentWindow(), {type:"error",title:lang.dialogs.open.notfound[0],message:lang.dialogs.open.notfound[1],buttons:["OK"]});
                        continueAction = false;
                    } else {
                        continueAction = true;
                    }
                    if (continueAction) {
                        try {
                            try {
                                text = fs.readFileSync(path).toString();
                            } catch (err) {
                                remote.dialog.showMessageBoxSync(remote.getCurrentWindow(), {type:"error",title:lang.dialogs.open.error[0],message:lang.dialogs.open.error[2],buttons:["OK"]});
                                console.error(err);
                            }
                            if (typeof text !== "undefined" && typeof text !== "null") {
                                locks.lock()
                                document.getElementById('status').innerHTML = lang.status.openned;
                                titlebar.updateTitle(lang.untitled + " — pWrite");
                                documentName = lang.untitled;
                                documentPath = "";
                                lastSaveContentHTML = "";
                                editplace.setData(text);
                                locks.unlock()
                            }
                        } catch (err) {
                            remote.dialog.showMessageBoxSync(remote.getCurrentWindow(), {type:"error",title:lang.dialogs.open.error[0],message:lang.dialogs.open.error[1],detail:err.message,buttons:["OK"]});
                            console.error(err);
                        }
                    }
                }
            }
        }
    },
    _continueOpenPWrite: () => {
        if (!documentOpenned) {
            documentOpenned = true;
            document.getElementById('home').classList.add('hide');
            titlebar.updateTitle(lang.untitled + " — pWrite");
            documentName = lang.untitled;
            document.getElementById('fileopenned').classList.remove('hide');
        }
        fs = require('fs');
        path = remote.dialog.showOpenDialogSync(remote.getCurrentWindow(), {
            title: lang.dialogs.open.title,
            filters: [
                {
                    name: lang.dialogs.save.extension,
                    extensions: [ "pwd", "pwrite" ]
                }
            ]
        });
        if (typeof path == "undefined" || typeof path == "null" || path == undefined || path == null) {
            return false;
        } else {
            if (typeof path == "array" || typeof path == "object") {
                path = path[0];
            }
            if (typeof path !== "undefined") {
                if (!fs.existsSync(path)) {
                    remote.dialog.showMessageBoxSync(remote.getCurrentWindow(), {type:"error",title:lang.dialogs.open.notfound[0],message:lang.dialogs.open.notfound[1],buttons:["OK"]});
                    continueAction = false;
                } else {
                    continueAction = true;
                }
                if (continueAction) {
                    backupfile = path + ".bak";
                    if (fs.existsSync(backupfile)) {
                        documentRecovery = true;
                        back = remote.dialog.showMessageBoxSync(remote.getCurrentWindow(),
                            {
                                type: "question",
                                title: lang.dialogs.usebackup.title,
                                message: lang.dialogs.usebackup.message,
                                buttons: [
                                    lang.dialogs.usebackup.ok,
                                    lang.dialogs.usebackup.cancel
                                ],
                                cancelId: 1,
                                defaultId: 1
                            }
                        )
                        if (back == 0) {
                            continueAction = false;
                            try {
                                text = decodeURI(atob(fs.readFileSync(backupfile).toString()));
                            } catch (err) {
                                remote.dialog.showMessageBoxSync(remote.getCurrentWindow(), {type:"error",title:lang.dialogs.template.error[0],message:lang.dialogs.template.error[2],buttons:["OK"]});
                                console.error(err);
                            }
                            if (typeof text !== "undefined" && typeof text !== "null") {
                                locks.lock()
                                document.getElementById('status').innerHTML = lang.status.template;
                                titlebar.updateTitle(lang.recovered + " — pWrite");
                                documentName = lang.recovered;
                                documentPath = "";
                                lastSaveContentHTML = "";
                                editplace.setData(text);
                                locks.unlock()
                            }
                        }
                    }
                    if (continueAction) {
                        try {
                            try {
                                text = decodeURI(atob(fs.readFileSync(path).toString()));
                            } catch (err) {
                                remote.dialog.showMessageBoxSync(remote.getCurrentWindow(), {type:"error",title:lang.dialogs.open.error[0],message:lang.dialogs.open.error[2],buttons:["OK"]});
                                console.error(err);
                            }
                            if (typeof text !== "undefined" && typeof text !== "null") {
                                locks.lock()
                                document.getElementById('status').innerHTML = lang.status.opennedhtml;
                                titlebar.updateTitle(require('path').basename(path) + " — pWrite");
                                documentName = require('path').basename(path);
                                documentPath = path;
                                lastSaveContentHTML = text;
                                editplace.setData(text);
                                locks.unlock()
                            }
                        } catch (err) {
                            remote.dialog.showMessageBoxSync(remote.getCurrentWindow(), {type:"error",title:lang.dialogs.open.error[0],message:lang.dialogs.open.error[1],detail:err.message,buttons:["OK"]});
                            console.error(err);
                        }
                    }
                }
            }
        }
    },
    open: {
        pwrite: () => {
            path = undefined;
            if (false) {} else {
                if (lastSaveContentHTML === editplace.getData()) {
                    documentOpenned = false;
                    editplace.setData("");
                    documentPath = "";
                    lastSaveContentHTML = "";
                    titlebar.updateTitle("pWrite");
                    documentName = "";
                    document.getElementById('home').classList.remove('hide');
                    document.getElementById('fileopenned').classList.add('hide');
                    menuActions._continueOpenPWrite();
                } else {
                    remote.dialog.showMessageBox(remote.getCurrentWindow(),
                        {
                            type: "question",
                            title: lang.confirm[4],
                            message: lang.confirm[0] + '"' + documentName + '"' + lang.confirm[1],
                            buttons: [
                                lang.confirm[2],
                                lang.confirm[3],
                                lang.confirm[5]
                            ],
                            cancelId: 1
                        }
                    ).then(back => {
                        if (back.response == 2) {
                            if (menuActions.save() !== false) {
                                menuActions._continueOpenPWrite();
                            } else {
                                return;
                            }
                        }
                        if (back.response == 1) {
                            return;
                        }
                        if (back.response == 0) {
                            menuActions._continueOpenPWrite();
                        }
                    });
                }
            }
        },
        html: () => {
            path = undefined;
            if (false) {} else {
                if (lastSaveContentHTML === editplace.getData()) {
                    documentOpenned = false;
                    editplace.setData("");
                    documentPath = "";
                    lastSaveContentHTML = "";
                    titlebar.updateTitle("pWrite");
                    documentName = "";
                    document.getElementById('home').classList.remove('hide');
                    document.getElementById('fileopenned').classList.add('hide');
                    menuActions._continueOpenHTML();
                } else {
                    remote.dialog.showMessageBox(remote.getCurrentWindow(),
                        {
                            type: "question",
                            title: lang.confirm[4],
                            message: lang.confirm[0] + '"' + documentName + '"' + lang.confirm[1],
                            buttons: [
                                lang.confirm[2],
                                lang.confirm[3],
                                lang.confirm[5]
                            ],
                            cancelId: 1
                        }
                    ).then(back => {
                        if (back.response == 2) {
                            if (menuActions.save() !== false) {
                                menuActions._continueOpenHTML();
                            } else {
                                return;
                            }
                        }
                        if (back.response == 1) {
                            return;
                        }
                        if (back.response == 0) {
                            menuActions._continueOpenHTML();
                        }
                    });
                }
            }
        }
    },
    export: () => {
        path = undefined;
        if (!documentOpenned) {
            remote.dialog.showMessageBoxSync(remote.getCurrentWindow(), {type:"error",title:lang.dialogs.notopenned.title,message:lang.dialogs.notopenned.message,buttons:["OK"]});
        } else {
            fs = require('fs');
            path = remote.dialog.showSaveDialogSync(remote.getCurrentWindow(), {
                title: lang.dialogs.export.title,
                filters: [
                    {
                        name: lang.dialogs.open.extensionhtml,
                        extensions: [ "htm", "html", "php", "asp", "aspx" ]
                    }
                ]
            });
            if (typeof path == "undefined" || typeof path == "null" || path == undefined || path == null) {
                return false;
            } else {
                if (typeof path !== "undefined") {
                    if (!path.includes(".")) {
                        path = path + ".html";
                    }
                    if (fs.existsSync(path)) {
                        action = remote.dialog.showMessageBoxSync(remote.getCurrentWindow(),
                            {
                                type: "question",
                                title: lang.dialogs.replace.title,
                                message: lang.dialogs.replace.message,
                                buttons: [
                                    lang.dialogs.replace.replace,
                                    lang.dialogs.replace.cancel
                                ],
                                cancelId: 1
                            }
                        )
                        continueAction = action == 0;
                    } else {
                        continueAction = true;
                    }
                    if (continueAction) {
                        try {
                            locks.lock()
                            text = editplace.getData();
                            fs.writeFileSync(path, "<!DOCTYPE html pwrite><head>" + "<style>" + document.getElementsByTagName('style')[0].innerHTML + "img{width: 100%;}figure{display: inline-block;}blockquote{border-left: #cecece solid 7px;margin-left: 30px;padding-left: 10px;font-style:italic;}" + "</style>" + "</head><body pwrite-document>" + text + "</body></html>");
                            document.getElementById('status').innerHTML = lang.status.export;
                            locks.unlock()
                        } catch (err) {
                            remote.dialog.showMessageBoxSync(remote.getCurrentWindow(), {type:"error",title:lang.dialogs.export.error[0],message:lang.dialogs.export.error[1],detail:err.message,buttons:["OK"]});
                        }
                    }
                }
            }
        }
    },
    settings: () => {
        if (document.getElementById('settings').classList.contains('hide')) {
            global.oldwintt = window.title;
            if (documentOpenned) {
                global.olduiel = "fileopenned";
            } else {
                global.olduiel = "home";
            }
            window.title = lang.settings.window + " — pWrite";
            document.getElementById(olduiel).classList.add('hide');
            document.getElementById('settings').classList.remove('hide');
        }
    },
    about: () => {
        document.getElementById('about').classList.remove('hide');
    },
    reloadui: () => {
        if (remote.dialog.showMessageBoxSync(remote.getCurrentWindow(),
            {
                type: "warning",
                title: lang.dialogs.reloadui.title,
                message: lang.dialogs.reloadui.message,
                buttons: [
                    lang.dialogs.reloadui.ok,
                    lang.dialogs.reloadui.cancel
                ],
                cancelId: 1
            }
        ) == 0) {
            remote.getCurrentWindow().hide();
            remote.getCurrentWindow().setSize(800, 450);
            remote.getCurrentWindow().resizable = false;
            window.onbeforeunload = null;
            remote.getCurrentWindow().show();
            remote.getCurrentWindow().center();
            location.reload(false);
        }
    },
    setlang: (lang) => {
        titlebar.closeMenu();
        window.spellCheckHandler.switchLanguage(lang);
    }
}

window.onbeforeunload = (e) => {
    e.returnValue = false;
    e.preventDefault();
    menuActions.quit()
};

setInterval(() => {
    document.getElementById('status').innerHTML = lang.ready;
}, 10000)
