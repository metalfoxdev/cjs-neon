const array = [
    "LOLOLOLOLOLOLOLOL",
    "Are you sure about that?",
    "Hello user, this is the website speaking!",
    "We are going to need a bigger boat.",
    "If you came here for a study guide, you should leave.",
    "Definitely not clickbait!",
    "Have you done your homework? Didn't think so.",
    "Yep, you found it.",
    "Made in England!",
    "Thatoneham is a holy man",
    "If two witches had two watches, which witch would be looking at which watch?",
    "<-- i love arrows -->",
    "Road work ahead? Uh yea, I sure hope it does.",
    "Salute Max and Bailey. They both did their TASSSOOOMMMAAAIII and contributed game suggestions. 🫡",
    "If RoBeats is too hard for you, I think that's a skill issue. (I'm taking to you Connar)",
    "Hi Logan!",
    "im getting paid with gum, worth it",
    "You can submit ideas in the q/a page!",
    "always listening...",
    "the germans came back on the 15th of may 2024, we survived",
    "dont try beef noodles from canteen, i tried twice",
    "spanish is useless, change my mind",
    "who ever asked for bloxrob can keep dreaming",
    "if i get pulled out of lesson for this website,🙈 🙉 🙊",
    "dw olli apps ill revenge you 😡💢"
];
const randomIndex = Math.floor(Math.random() * array.length);

document.getElementById("desc").textContent = array[randomIndex];
