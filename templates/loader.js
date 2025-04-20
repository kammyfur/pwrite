const templates = require("../templates/list.json");

function loadTemplates() {
    if (typeof templates[langprop] != "undefined") {
        if (typeof templates[langprop] == "object") {
            if (templates[langprop].length < 1) {
                document.getElementById('templates').innerHTML = "<i>" + lang.templates.empty + "</li>";
            } else {
                templatespretty = "";
                global.templatesarray = [];
                templates[langprop].forEach(el => {
                    templatespretty = templatespretty + "<div class=\"template\" onclick=\"openTemplate('" + el.file + "')\">" + el.name + "</div>";
                    templatesarray.push({label:el.name,enabled:true,click:()=>{titlebar.closeMenu();openTemplate(el.file);}});
                });
                menuFile.submenu.items[1].submenu.items[3].submenu.items = templatesarray;
                menuFile.submenu.items[1].submenu.items[3].enabled = true;
                document.getElementById('templates').innerHTML = templatespretty;
            }
        } else {
            document.getElementById('templates').innerHTML = "<i>" + lang.templates.none + "</li>";
        }
    } else {
        document.getElementById('templates').innerHTML = "<i>" + lang.templates.none + "</li>";
    }
}

function openTemplate(src) {
    if (!documentOpenned) {
        menuActions.new();
    }
    document.getElementById('app').focus()
    fs = require('fs');
    path = "./templates/" + langprop + "/" + src
    if (!fs.existsSync(path)) {
        remote.dialog.showMessageBoxSync(remote.getCurrentWindow(), {type:"error",title:lang.dialogs.template.notfound[0],message:lang.dialogs.template.notfound[1],buttons:["OK"]});
        continueAction = false;
    } else {
        continueAction = true;
    }
    if (continueAction) {
        try {
            try {
                text = decodeURI(atob(fs.readFileSync(path).toString()));
            } catch (err) {
                remote.dialog.showMessageBoxSync(remote.getCurrentWindow(), {type:"error",title:lang.dialogs.template.error[0],message:lang.dialogs.template.error[2],buttons:["OK"]});
                console.error(err);
            }
            if (typeof text !== "undefined" && typeof text !== "null") {
                locks.lock()
                document.getElementById('status').innerHTML = lang.status.template;
                titlebar.updateTitle(lang.untitled + " — pWrite");
                documentName = lang.untitled;
                documentPath = "";
                lastSaveContentHTML = "";
                editplace.setData(text);
                locks.unlock()
            }
        } catch (err) {
            remote.dialog.showMessageBoxSync(remote.getCurrentWindow(), {type:"error",title:lang.dialogs.template.error[0],message:lang.dialogs.template.error[1],detail:err.message,buttons:["OK"]});
            console.error(err);
        }
    }
}
