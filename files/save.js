function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
}

function generateFile(text) {
    return btoa(text);
}
