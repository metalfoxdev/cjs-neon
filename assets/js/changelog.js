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
        max-width: 110%;
        max-height: 110%;
        position: fixed;
        top: 48%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 998;
        display: none;
    }
    .closebt {
        background-color: #8a4db9;
        border: none;
        position: fixed;
        outline: none;
        padding: 15px 20px;
        font-size: 12px;
        font-weight: 700;
        color: #fff;
        border-radius: 5px;
        transition: all ease 0.1s;
        box-shadow: 0px 5px 0px 0px #6c3d91;
        left: 66%;
        top: 1%;
        z-index: 999;
    }
    .closebt:active {
        transform: translateY(5px);
        box-shadow: 0px 0px 0px 0px #6c3d91;
    }
    </style>
`;

const styleElement = document.createElement('style');
styleElement.innerHTML = changelogCSS;
document.head.appendChild(styleElement);

const changelogImage = document.createElement('img');
changelogImage.src = "assets/img/change_Log/changelog_V0.0.5.png";
changelogImage.alt = "Change Log";
changelogImage.classList.add("changelog-image");

document.body.appendChild(changelogImage);

const closeButton = document.createElement('button');
closeButton.innerText = "X";
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
