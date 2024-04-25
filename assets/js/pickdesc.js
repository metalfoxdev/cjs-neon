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
    "This site is so cold, it will put your firewall out!",
    "If two witches had two watches, which witch would be looking at which watch?",
    "<-- i love arrows -->",
    "Road work ahead? Uh yea, I sure hope it does."
];
const randomIndex = Math.floor(Math.random() * array.length);

document.getElementById("desc").textContent = array[randomIndex];
