function saveNewLang() {
    config.lang = document.getElementById('langlist').value;
    require('fs').writeFileSync(datadir + "/config.json", JSON.stringify(config, null, 4));
}
