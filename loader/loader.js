scripts = [
    "../files/save.js",
    "../home/home.js",
    "../menu/actions.js",
    "../dom/keybinds.js",
    "../templates/loader.js",
    "../titlebar/titlebar.js",
    "../editor/spelling.js",
    "../editor/editor.js",
    "../editor/init.js",
    "../settings/save.js",
    "../menu/switch.js"
]

styles = [
    "../fonts/fonts.css",
    "../editor/editor.css",
    "../status/status.css",
    "../home/home.css",
    "../settings/settings.css",
    "../templates/templates.css",
    "../dom/scrollbar.css"
]

// ========================= //

function generateConfig() {
    if (!require('fs').existsSync(datadir + "/config.json")) {
        document.getElementById("loader-app-progress").innerHTML = lang.loading.confgen;
        require('fs').writeFileSync(datadir + "/config.json", require('fs').readFileSync("./config_system.json"));
        setTimeout(() => {
            return;
        }, 1500)
    }
}

function removejscssfile(filename, filetype){
    var targetelement=(filetype=="js")? "script" : (filetype=="css")? "link" : "none" //determine element type to create nodelist from
    var targetattr=(filetype=="js")? "src" : (filetype=="css")? "href" : "none" //determine corresponding attribute to test for
    var allsuspects=document.getElementsByTagName(targetelement)
    for (var i=allsuspects.length; i>=0; i--){ //search backwards within nodelist for matching elements to remove
    if (allsuspects[i] && allsuspects[i].getAttribute(targetattr)!=null && allsuspects[i].getAttribute(targetattr).indexOf(filename)!=-1)
        allsuspects[i].parentNode.removeChild(allsuspects[i]) //remove element by calling parentNode.removeChild()
    }
}

function include(url, callback){
    var script = document.createElement('script');
    script.type = 'text/javascript';

    script.src = url + '?' + (new Date().getTime());

    if (callback) {
        script.onreadystatechange = callback;
        script.onload = script.onreadystatechange;
    }

    document.getElementsByTagName('head')[0].appendChild(script);
}

function cssInclude(url) {
    var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = url;
    link.media = 'all';
    head.appendChild(link);
}

function loadScripts() {
    scripts.forEach(el => {
        include(el);
    })
}

function loadStyles() {
    styles.forEach(el => {
        cssInclude(el);
    })
}

function langlist() {
    fs = require('fs');
    langfiles = fs.readdirSync("./lang");
    llparray = [];
    langfiles.forEach(el => {
        if (el != "langlist.json") {
            if (el.replace(".json", "") == config.lang) {
                pvtmp = "selected ";
            } else {
                pvtmp = "";
            }
            llparray.push("<option " + pvtmp + "value=\"" + el.replace(".json", "") + "\">" + require('../lang/' + el).$name + "</option>");
            langListPretty = llparray.join("");
            if (document.getElementById('settings-lang')) {
                document.getElementById('settings-lang').innerHTML = langListPretty;
            }
        }
    })
    fs = undefined;
}

function continueSetup() {
    document.getElementById("loader-app-progress").innerHTML = lang.loading.ui;

    setTimeout(() => {
        titlebarInit();
        loadTemplates();
        setupMenuSwitches();
        remote.getCurrentWindow().hide();
        document.getElementById("loader-app").classList.add('hide');
        document.getElementById("app").classList.remove('hide');
        setTimeout(() => {
            remote.getCurrentWindow().show();
        }, 1000)
        setTimeout(() => {
            removejscssfile("../loader/loadertemp.css", "css")
            remote.getCurrentWindow().resizable = true;
            remote.getCurrentWindow().setSize(900, 600);
            remote.getCurrentWindow().center();
        }, 200)
    }, 1500)
}

window.onload = () => {
    document.getElementById("loader-app-progress").innerHTML = lang.loading.js;
    setTimeout(() => {
        loadScripts()
        generateConfig()
        document.getElementById("loader-app-progress").innerHTML = lang.loading.settings;
        config = require(datadir + '/config.json');
        setTimeout(() => {
            document.getElementById("loader-app-progress").innerHTML = lang.loading.meta;
            meta = require('../package.json');
            setTimeout(() => {
                document.getElementById("loader-app-progress").innerHTML = lang.loading.perms;
                require('fs').writeFileSync(require('os').tmpdir() + "/MprjAppTmp");
                require('fs').unlinkSync(require('os').tmpdir() + "/MprjAppTmp");
                setTimeout(() => {
                    document.getElementById("loader-app-progress").innerHTML = lang.loading.style;
                    setTimeout(() => {
                        loadStyles()
                        document.getElementById("loader-app-progress").innerHTML = lang.loading.setuppg;
                        setTimeout(() => {
                            document.getElementById("loader-app-progress").innerHTML = lang.loading.int;
                            setTimeout(() => {
                                document.getElementById("loader-app-progress").innerHTML = lang.loading.langlist;
                                reloadLangs();
                                langlist();
                                continueSetup();
                            }, 200)
                        }, 100)
                    }, 600)
                }, 400)
            }, 500)
        }, 300)
    }, 200)
}
