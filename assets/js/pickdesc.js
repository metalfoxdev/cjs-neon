const array = [
    "LOLOLOLOLOLOLOLOL",
    "Are you sure about that?",
    "Hello user, this is the website speaking!",
    "We are going to need a bigger boat.",
    "If you came here for a study guide, you should leave.",
    "Definitely not clickbait!",
    "Have you done your homework? Didn't think so.",
    "Yep, you found it.",
];
const randomIndex = Math.floor(Math.random() * array.length);

document.getElementById("desc").textContent = array[randomIndex];
