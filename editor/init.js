const fontList = require('font-list')

fontList.getFonts()
.then(fonts => {
    SystemFonts = ["default"];
    fonts.forEach((el) => {
        SystemFonts.push(el.replace("\"", "").replace("\"", ""));
    })
    SystemFonts.sort( function(a, b) {return a-b} );
    document.body.classList.remove('hide');
    editorInit()
})
.catch(err => {
    console.log(err)
})
