if (require('fs').existsSync(datadir + "/config.json")) {
    global.lang = require('../lang/' + require(datadir + "/config.json").lang + ".json");
    global.langprop = require(datadir + "/config.json").lang;
} else {
    global.lang = require('../lang/fr.json');
    global.langprop = "fr";
}

Array.from(document.getElementsByTagName("lang")).forEach(el => {
	if (el.getAttribute("parent") == null) {
		el.innerHTML = lang[el.getAttribute("string")];
	} else {
		el.innerHTML = lang[el.getAttribute("parent")][el.getAttribute("string")];
	}
});
Array.from($("[lang^='::'")).forEach(el => { el.title = lang[el.getAttribute("lang").replace("::", "")]; });

function reloadLangs() {
	fs = require("fs");
	langfiles = fs.readdirSync("./lang");
	llparray = [];
	langfiles.forEach(el => {
		if (el != "langlist.json" && el != "processor.js") {
			if (el.replace(".json", "") == langprop) {
				pvtmp = "selected ";
			} else {
				pvtmp = "";
			}
			llparray.push("<option " + pvtmp + "value=\"" + el.replace(".json", "") + "\">" + require("../lang/" + el).$name + "</option>");
			langListPretty = llparray.join("");
			if (document.getElementById("langlist")) {
				document.getElementById("langlist").innerHTML = langListPretty;
			}
		}
	});
	fs = undefined;
}
