let newArray = [];



// vs code suggested asycn function and i stuck it in here before the function was regular, doing research to figure out how this impacts my code and what it is
async function getPhotoApi() {
    try {
        const response = await fetch(
            "https://api.nasa.gov/planetary/apod?start_date=2024-08-27&end_date=2024-08-29&api_key=podRVC8objAhx7IraJtGncf5cZxYXZYoUsHChWyc"
        );
        const data = await response.json();
        newArray = data;
        console.log("Data stored in array:", newArray);
        displayCards();
    } catch (error) {
        return console.error("Error fetching data:", error);
    } 

  
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

// function showPicture() {
//     getPhotoApi().then(() => {
//         displayCards();
//     });
// }

// showPicture();

const refreshButton = document.querySelector('.reset');
const refreshPage = () => {
    location.reload();
}
refreshButton.addEventListener('click', refreshPage)