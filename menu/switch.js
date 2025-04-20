function setupMenuSwitches() {
    setInterval(() => {
        if (!documentOpenned) {
            menuFile.submenu.items[3].enabled = false;
            menuFile.submenu.items[4].enabled = false;
            menuFile.submenu.items[5].enabled = false;
            menuFile.submenu.items[7].enabled = false;
            menuFile.submenu.items[9].enabled = false;

            menuEdit.submenu.items[0].enabled = false;
            menuEdit.submenu.items[1].enabled = false;
            menuEdit.submenu.items[3].submenu.items.forEach(el => el.enabled = false);
        } else {
            menuFile.submenu.items[3].enabled = true;
            menuFile.submenu.items[4].enabled = true;
            menuFile.submenu.items[5].enabled = true;
            menuFile.submenu.items[7].enabled = true;
            menuFile.submenu.items[9].enabled = true;
            menuFile.submenu.items[9].enabled = true;

            menuEdit.submenu.items[0].enabled = true;
            menuEdit.submenu.items[1].enabled = true;
            menuEdit.submenu.items[3].submenu.items.forEach(el => el.enabled = true);
        }

        menuEdit.submenu.items[3].submenu.items.forEach(el => { el.checked = false; });
        try {
            menuEdit.submenu.items[3].submenu.items[menuEdit.submenu.items[3].submenu.items.findIndex(el => el.label == lang.menu.edit.lang[window.spellCheckHandler.currentSpellcheckerLanguage.substring(0, 2)])].checked = true;
        } catch (err) {
            menuEdit.submenu.items[3].submenu.items.forEach(el => el.enabled = false);
        }
    }, 1)
}
