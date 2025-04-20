function newFile() {
    menuActions.new()
}

console.log("%c" + lang.devtools.warning + "\n%c" + lang.devtools.message[0] + "\n%c" + lang.devtools.message[1] + "\n%c" + lang.devtools.message[2], 'color:red;background-color:pink;font-family:sans-serif;font-size:24px;font-weight;700;', 'color:blue;font-family:sans-serif;font-size:18px;', 'color:green;font-family:sans-serif;font-size:18px;', 'color:green;font-family:sans-serif;font-size:18px;text-decoration-line:underline;', 'color:green;font-family:sans-serif;font-size:18px;', 'color:gray;font-family:sans-serif;font-size:14px;');

setInterval(() => {
    if (documentOpenned) {
        if (documentPath.trim() != "") {
            locks.lock()
            fs = require('fs');
            text = btoa(encodeURI(editplace.getData()));
            fs.writeFileSync(documentPath + ".bak", text);
            document.getElementById('status').innerHTML = lang.status.autosave;
            locks.unlock()
        }
    }
}, 60000)
