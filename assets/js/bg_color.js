const presets = {
    "blue": "linear-gradient(334deg, #0066ff, #4073bf, #000000)"
};

const message = "Select from one of the colors below: \n";
for (let key in presets) {
    if (presets.hasOwnProperty(key)) {
        const message = message + "\n- " + key;
    }
};

const userInput = window.prompt(message);

if (presets.hasOwnProperty(userInput)) {
    const styleTag = document.getElementById("main-style");
        for (let i = 0; i < sheet.cssRules.length; i++) {
            const rule = sheet.cssRules[i];
            if (rule.selectorText === '.gradient') {
                // Update the .gradient rule with a new background
                rule.style.background = presets[userInput];
                break;
            }
    }
}
