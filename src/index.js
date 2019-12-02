console.log("%c HI", "color: firebrick");

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";

document.addEventListener("DOMContentLoaded", () => {
  getImagesCall(), getBreedCall(), addSomeListeners();
});

function addSomeListeners() {
  document
    .getElementById("breed-dropdown")
    .addEventListener("change", filterFunction);
}

function getImagesCall() {
  fetch(imgUrl)
    .then(res => res.json())
    .then(res => loopThroughDogs(res.message))
    .catch(err => console.log(err));
}
function loopThroughDogs(dogs) {
  dogs.forEach(dog => appendOneDog(dog));
}

function appendOneDog(dog) {
  const dogsContainer = document.getElementById("dog-image-container");

  const img = document.createElement("img");
  img.setAttribute("src", dog);
  img.setAttribute("class", "dog");

  dogsContainer.appendChild(img);
}

function getBreedCall() {
  fetch(breedUrl)
    .then(res => res.json())
    // .then(res => console.log(res))
    .then(res => loopThroughBreeds(res.message))
    .catch(err => console.log(err));
}

function loopThroughBreeds(breeds) {
  const breedList = Object.keys(breeds);
  breedList.forEach(breed => appendOneBreed(breed));
}

let counter = 1;

function appendOneBreed(breed) {
  const breedList = document.getElementById("dog-breeds");

  const li = document.createElement("li");
  li.setAttribute("id", counter);
  li.innerText = breed;

  li.addEventListener("click", () => changeColor(li));
  breedList.appendChild(li);
  counter++;
}

function changeColor(li) {
  // const li = event.target.parentElement;
  if (li.classList.contains("red")) {
    li.classList.remove("red");
  } else {
    li.classList.add("red");
  }
}

function filterFunction(event) {
  event.preventDefault();
  const ul = document.getElementById("dog-breeds");
  const breedLetter = document.getElementById("breed-dropdown").value;
  if (breedLetter === "none") {
    for (let i = 0; i < ul.children.length; i++) {
      const li = ul.children[i];
      li.classList.remove("hidden");
    }
  } else {
    for (let i = 0; i < ul.children.length; i++) {
      const li = ul.children[i];
      if (li.innerText.charAt(0) === breedLetter) {
        li.classList.remove("hidden");
      } else {
        li.classList.add("hidden");
      }
    }
  }
}
