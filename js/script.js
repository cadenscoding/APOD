let newArray = [];


function getPhotoApi() {
    return fetch(
        "https://api.nasa.gov/planetary/apod?start_date=2024-08-27&end_date=2024-08-29&api_key=podRVC8objAhx7IraJtGncf5cZxYXZYoUsHChWyc"
    )
    .then(response => response.json())
    .then(data => {
        newArray = data;
        console.log("Data stored in array:", newArray);
    })
    .catch(error => console.error("Error fetching data:", error)); 

  displayCards();
};

function displayCards() {
    const container = document.querySelector(".picture-cards");

    for (let item of newArray) {
        let makeCard = document.createElement("div");
        makeCard.className = "card";
        makeCard.innerHTML = `
            <h4 class="project-title">${item.title}</h4>
            <img class="card-image" src="${item.url}" alt="${item.title}">
            <p class="card-description">${item.explanation}</p>
            <p class="card-date">Date: ${item.date}</p>
            <p class="card-credits">Photographer: ${item.copyright ? item.copyright : 'Unknown'}</p>
        `;
        container.appendChild(makeCard);
    }
};

function showPicture() {
    getPhotoApi().then(() => {
        displayCards();
    });
}

showPicture();

const refreshButton = document.querySelector('.reset');
const refreshPage = () => {
    location.reload();
}
refreshButton.addEventListener('click', refreshPage)