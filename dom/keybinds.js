const Mousetrap = require('mousetrap');

Mousetrap.bind(["command+n", "ctrl+n"], () => {
    menuActions.new();
})

Mousetrap.bind(["command+o", "ctrl+o"], () => {
    menuActions.open.pwrite();
})

Mousetrap.bind(["command+o", "ctrl+o"], () => {
    menuActions.open.pwrite();
})

Mousetrap.bind(["command+shift+i", "ctrl+shift+o"], () => {
    menuActions.settings();
})

Mousetrap.bind(["command+shift+alt+r", "ctrl+shift+alt+r"], () => {
    menuActions.reloadui();
})

Mousetrap.bind(["command+w", "ctrl+w"], () => {
    menuActions.close();
})

Mousetrap.bind(["command+q", "ctrl+q"], () => {
    menuActions.quit();
})

Mousetrap.bind(["command+s", "ctrl+s"], () => {
    menuActions.save();
})

Mousetrap.bind(["command+p", "ctrl+p"], () => {
    menuActions.print();
})

Mousetrap.bind(["command+shift+s", "ctrl+shift+s"], () => {
    menuActions.saveAs();
})

Mousetrap.bind(["command+alt+s", "ctrl+alt+s"], () => {
    menuActions.settings();
})

Mousetrap.bind(["command+e", "ctrl+e"], () => {
    menuActions.export();
})

Mousetrap.bind("f1", () => {
    menuActions.docs();
})

Mousetrap.bind("shift+f1", () => {
    menuActions.aboutApp();
})

Mousetrap.bind(["command+shift+f1", "ctrl+shift+f1"], () => {
    menuActions.aboutMprj();
})
