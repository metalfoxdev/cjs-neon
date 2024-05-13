const changelogCSS = `
    <style>
    .fade-under-settings {
        position: fixed;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent black fade */
        top: 0;
        left: 0;
        z-index: 1;
        display: none;  
    }
    .changelog-image {
        max-width: 130%;
        max-height: 130%;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 9999;
        display: none;
    }
    .closebt {
        font-family: 'Comfortaa', sans-serif;
        position: fixed;
        top: 10px;
        right: 10px;
        padding: 10px 20px;
        border-radius: 50px;
        cursor: pointer;
        border: 0;
        background-color: white;
        box-shadow: rgb(0 0 0 / 5%) 0 0 8px;
        letter-spacing: 1.5px;
        text-transform: uppercase;
        font-size: 15px;
        transition: all 0.5s ease;
        z-index: 10000;
    }
    .closebt:hover {
        letter-spacing: 3px;
        background-color: rgb(148, 84, 196);
        color: hsl(0, 0%, 100%);
        box-shadow: rgb(93 24 220) 0px 7px 29px 0px;
    }
    .closebt:active {
        letter-spacing: 3px;
        background-color: rgb(148, 84, 196);
        color: hsl(0, 0%, 100%);
        box-shadow: rgb(93 24 220) 0px 0px 0px 0px;
        transform: translateY(10px);
        transition: 100ms;
    }
    </style>
`;

const styleElement = document.createElement('style');
styleElement.innerHTML = changelogCSS;
document.head.appendChild(styleElement);

const changelogImage = document.createElement('img');
changelogImage.src = "assets/img/change_Log/changelog_V0.0.2.png";
changelogImage.alt = "Change Log";
changelogImage.classList.add("changelog-image");

document.body.appendChild(changelogImage);

const closeButton = document.createElement('button');
closeButton.innerText = "Close";
closeButton.classList.add("closebt");
closeButton.addEventListener('click', () => {
    changelogImage.style.display = 'none';
    closeButton.style.display = 'none';
});

document.body.appendChild(closeButton);

function showChangelog() {
    changelogImage.style.display = 'block';
    closeButton.style.display = 'block';
}

showChangelog();
