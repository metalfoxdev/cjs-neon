const themes = {
    "red": "linear-gradient(334deg, #ff0000, #bf4040, #000000)",
    "blue": "linear-gradient(334deg, #0000ff, #4040bf, #000000)",
    "lime": "linear-gradient(334deg, #00ff00, #40bf40, #000000)",
    "hell": "linear-gradient(334deg, #ff0000, #bf7340, #000000)",
    "flames": "linear-gradient(360deg, #ff9933, #663300, #000000)"
};

const themesArray = Object.values(themes);

const randomTheme = themesArray[Math.floor(Math.random() * themesArray.length)];

document.getElementById("gradient").style = `width: 100%; height: 100%; position: fixed; top: 0; left: 0; z-index: -1; background: ${randomTheme}; background-size: 180% 180%; animation: gradient-animation 6s ease infinite; filter: brightness(0.85);`
