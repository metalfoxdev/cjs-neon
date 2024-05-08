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
];
const randomIndex = Math.floor(Math.random() * array.length);

document.getElementById("desc").textContent = array[randomIndex];
