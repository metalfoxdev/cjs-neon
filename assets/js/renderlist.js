document.getElementById("loader").style.display = "block";
const container = document.getElementById("itembox");

fetch('assets/data/index.json')
  .then(response => response.json())
  .then(data => {
    // Iterate through the JSON data
    data.sort((a, b) => (a.name > b.name) ? 1 : -1);
    data.forEach(item => {
      // Access and process each item

      const listItem = document.createElement("a")
      listItem.classList.add("griditem")
      listItem.href = item.url
      listItem.innerHTML = `
      <div class="col zoom-effect">
          <img src="${item.img}" class="img-fluid grid-img rounded-4 img-hover-shadow" alt="Image">
          <p class="text-center listing-text">${item.name}</p>
      </div>
      `;
      container.appendChild(listItem);
    });
  })
  .catch((error) => console.error("Error:", error));

document.getElementById("loader").style.display = "none";
