import { response } from "express"

console.log("work") //tjekker om siden vises via html <script>




const dogMatchesImageContainerDiv = document.getElementById("dog-matches-image-container")


function getMatches() {
//fetch henter urlen
fetch("https://dog.ceo/api/breeds/image/random")
//response laver bytestreamen
.then((response) => response.json())
.then((result) => {
    const dog = {
        imageURL: result.message
    };
    createMatchesProfile(dog);
});
};
getMatches();

function createMatchesProfile(dog){
const dogMatchesImageImg = document.createElement("img");
dogMatchesImageImg.src = dog.imageURL;
dogMatchesImageImg.alt = "dog match profile pic";
dogMatchesImageImg.id = "dog-matches-image";

dogMatchesImageContainerDiv.innerHtml = "";

dogMatchesImageContainerDiv.appendChild(dogMatchesImageImg);
};