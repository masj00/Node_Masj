let dogs = [];

const dogMatchesImageContainerDiv = document.getElementById("dog-matches-image-container");
const dogMatchesNameH2 = document.getElementById("dog-matches-name");
const dogMatchesBioH3 = document.getElementById("dog-matches-bio");
const dogMatchesAddressH6 = document.getElementById("dog-matches-address");
const dogMatchesCityH5 = document.getElementById("dog-matches-city");

function getMatches() {
    fetch("/api/matches")
    .then((response) => response.json())
    .then((result) => {
        dogs = result.data;
        createMatchesProfile(dogs.pop());
    });
}

getMatches();

function createMatchesProfile(dog) {
    dogMatchesNameH2.textContent = dog.name;
    dogMatchesBioH3.textContent = dog.bio;
    dogMatchesAddressH6.textContent = dog.address;
    dogMatchesCityH5.textContent = dog.city;

    const dogMatchesImageImg = document.createElement("img");
    dogMatchesImageImg.src = dog.imageURL;
    dogMatchesImageImg.alt = "dog match profile picture";
    dogMatchesImageImg.id = "dog-matches-image";

    dogMatchesImageContainerDiv.innerHTML = "";

    dogMatchesImageContainerDiv.appendChild(dogMatchesImageImg);

    setupHammerPanEvents(dogMatchesImageImg);
}

function setupHammerPanEvents(dogImageTag) {
    const hammertime = new Hammer(dogImageTag);

    hammertime.on('pan', (event) => {
        // Calculate the new position based on the pan movement
        const deltaX = event.deltaX;

        // Apply the transformation to the image
        dogImageTag.style.transform = `translateX(${deltaX}px)`;
    });

    hammertime.on('panend', (event) => {
        if (event.deltaX > 0) {
            console.log("Ended dragging to the right");
            // todo: Handle end of right drag here
        } else {
            console.log("Ended dragging to the left");
            // todo: Handle end of left drag here
        }
        
        if (dogs.length > 0) {
            createMatchesProfile(dogs.pop());
        } else {
            getMatches();
        }
    });
}