root = __dirname;
if (require('os').platform == "win32") {
    arr = root.split("\\");
} else {
    arr = root.split("/");
}
arr.pop();
if (require('os').platform == "win32") {
    root = arr.join("\\");
} else {
    root = arr.join("/");
}

function titlebarInit() {
    global.menu = new remote.Menu();
    const customTitlebar = require('custom-electron-titlebar');

    global.menuFile = new remote.MenuItem(
        {
            label: lang.menu.file.title,
            icon: root + "/icon/menu/file.png",
            submenu: [
                {
                    label: lang.menu.file.new,
                    click: () => { menuActions.new(); },
                    accelerator: 'CmdOrCtrl+N',
                    icon: root + "/icon/menu/new.png"
                },
                {
                    label: lang.menu.file.open.title,
                    icon: root + "/icon/menu/open.png",
                    submenu: [
                        {
                            label: lang.menu.file.open.pwrite,
                            click: () => { menuActions.open.pwrite(); },
                            accelerator: 'CmdOrCtrl+O',
                            icon: root + "/icon/menu/open-pwrite.png"
                        },
                        {
                            label: lang.menu.file.open.html,
                            click: () => { menuActions.open.html(); },
                            accelerator: 'CmdOrCtrl+Shift+O',
                            icon: root + "/icon/menu/open-html.png"
                        },
                        {
                            type: "separator"
                        },
                        {
                            label: lang.menu.file.open.template,
                            submenu: [],
                            enabled: false,
                            icon: root + "/icon/menu/templates.png"
                        }
                    ]
                },
                {
                    type: "separator"
                },
                {
                    label: lang.menu.file.save,
                    click: () => { menuActions.save(); },
                    accelerator: 'CmdOrCtrl+S',
                    icon: root + "/icon/menu/save.png"
                },
                {
                    label: lang.menu.file.saveas,
                    click: () => { menuActions.saveAs(); },
                    accelerator: 'CmdOrCtrl+Shift+S',
                    icon: root + "/icon/menu/save-as.png"
                },
                {
                    label: lang.menu.file.export,
                    click: () => { menuActions.export(); },
                    accelerator: 'CmdOrCtrl+E',
                    icon: root + "/icon/menu/export.png"
                },
                {
                    type: "separator"
                },
                {
                    label: lang.menu.file.print,
                    click: () => { menuActions.print(); },
                    accelerator: 'CmdOrCtrl+P',
                    icon: root + "/icon/menu/print.png"
                },
                {
                    type: "separator"
                },
                {
                    label: lang.menu.file.close,
                    click: () => { menuActions.close(); },
                    accelerator: 'CmdOrCtrl+W',
                    icon: root + "/icon/menu/close.png"
                },
                {
                    label: lang.menu.file.quit,
                    click: () => { menuActions.quit(); },
                    accelerator: 'CmdOrCtrl+Q',
                    icon: root + "/icon/menu/quit.png"
                }
            ]
        }
    )
    menu.append(menuFile);

    global.menuEdit = new remote.MenuItem(
        {
            label: lang.menu.edit.title,
            icon: root + "/icon/menu/edit.png",
            submenu: [
                {
                    label: lang.menu.edit.undo,
                    click: () => { editplace.commands.get("undo").execute(); },
                    accelerator: 'CmdOrCtrl+Z',
                    icon: root + "/icon/menu/undo.png"
                },
                {
                    label: lang.menu.edit.redo,
                    click: () => { editplace.commands.get("redo").execute(); },
                    accelerator: 'CmdOrCtrl+Y',
                    icon: root + "/icon/menu/redo.png"
                },
                {
                    type: "separator"
                },
                {
                    label: lang.menu.edit.lang.title,
                    icon: root + "/icon/menu/language.png",
                    submenu: [
                        {
                            label: lang.menu.edit.lang.fr,
                            click: () => { menuActions.setlang("fr"); }
                        },
                        {
                            label: lang.menu.edit.lang.en,
                            click: () => { menuActions.setlang("en"); }
                        },
                        {
                            label: lang.menu.edit.lang.es,
                            click: () => { menuActions.setlang("es"); }
                        },
                        {
                            label: lang.menu.edit.lang.de,
                            click: () => { menuActions.setlang("de"); }
                        },
                        {
                            label: lang.menu.edit.lang.it,
                            click: () => { menuActions.setlang("it"); }
                        },
                        {
                            label: lang.menu.edit.lang.nl,
                            click: () => { menuActions.setlang("nl"); }
                        },
                        {
                            label: lang.menu.edit.lang.ru,
                            click: () => { menuActions.setlang("ru"); }
                        },
                        {
                            label: lang.menu.edit.lang.zh,
                            click: () => { menuActions.setlang("zh"); }
                        },
                        {
                            label: lang.menu.edit.lang.jp,
                            click: () => { menuActions.setlang("jp"); }
                        }
                    ]
                }
            ]
        }
    );
    menu.append(menuEdit);

    global.menuTools = new remote.MenuItem(
        {
            label: lang.menu.tools.title,
            icon: root + "/icon/menu/tools.png",
            submenu: [
                {
                    label: lang.menu.tools.settings,
                    click: () => { menuActions.settings(); },
                    accelerator: 'CmdOrCtrl+Alt+I',
                    icon: root + "/icon/menu/settings.png"
                },
                {
                    label: lang.menu.tools.dev.title,
                    icon: root + "/icon/menu/devoptions.png",
                    submenu: [
                        {
                            label: lang.menu.tools.dev.tools,
                            role: 'toggledevtools',
                            icon: root + "/icon/menu/dev.png"
                        },
                        {
                            label: lang.menu.tools.dev.reload,
                            click: () => { menuActions.reloadui(); },
                            accelerator: 'CmdOrCtrl+Alt+Shift+R',
                            icon: root + "/icon/menu/reload.png"
                        },
                    ]
                },
            ]
        }
    );
    menu.append(menuTools);

    global.menuHelp = new remote.MenuItem(
        {
            label: lang.menu.help.title,
            icon: root + "/icon/menu/helpi.png",
            submenu: [
                {
                    label: lang.menu.help.help,
                    click: () => { menuActions.docs(); },
                    accelerator: 'F1',
                    icon: root + "/icon/menu/help.png"
                },
                {
                    type: "separator"
                },
                {
                    label: lang.menu.help.about,
                    click: () => { menuActions.about(); },
                    accelerator: 'Shift+F1',
                    icon: root + "/icon/menu/about.png"
                }
            ]
        }
    );
    menu.append(menuHelp);

    titlebar = new customTitlebar.Titlebar({
        backgroundColor: customTitlebar.Color.fromHex('#eeeeee'),
        icon: "../icon/pwrite.png",
        menu: menu
    });
}
