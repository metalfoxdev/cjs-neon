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
    </style>
`;

// Define the HTML content of the changelog popup
const changelogHTML = `
    <div class="changelog glowcl">
        <center><h1> Changelog </h1></center>
        <h2> V0.0.1 </h2>
        <h4>---=== added games ===---</h4>
        <h5> dadish 2 </h5>
        <h5> eagler craft 1.5.2 </h5>
        <h5> roof top snipers 2 </h5>
        <h5> dadish 2 </h5>
        <h5> borrito bison revenge </h5>
        <h5> borrito bison launcha libre </h5>
        <h5> spelunkey </h5>
        <h5> samurai rabbit 1 and 2 </h5>
        <h5> friday night funkin </h5>
        <p>
        <h4>---=== issues fixed ===---</h4>
        <h5> fixed little alchemy 2 </h5>
        <p>  
        <h4>---=== issues to be fixed / games to add ===---</h4>
        <h5> add settings </h5>
        <h5> fix cookie clicker </h5>
        <h5> adding doge miner 2 </h5>
        <h5> fix grind craft (its pretty fun) </h5>
        <h5> fix quake </h5>
        <h5> unblock sand boxels and re add it </h5>
        <p>
        <div class="fade-under-settings" id="fade-under-settings"></div>
    </div>
    <button class="closebt">Close</button>
`;

// Define the CSS styles for the changelog and close button

// Create a <style> element and append the CSS styles
const styleElement = document.createElement('style');
styleElement.innerHTML = changelogCSS;
document.head.appendChild(styleElement);

// Create a <div> element for the changelog and set its HTML content
const changelogDiv = document.createElement('div');
changelogDiv.innerHTML = changelogHTML;

// Append the changelog <div> to the document body
document.body.appendChild(changelogDiv);

// Add event listener for the close button
const closeButton = document.querySelector('.closebt');
closeButton.addEventListener('click', () => {
    changelogDiv.style.display = 'none';
});

// Function to show the changelog
function showChangelog() {
    changelogDiv.style.display = 'block';
}

// Call the function to show the changelog (you can call this function whenever you want to show the changelog)
showChangelog();
