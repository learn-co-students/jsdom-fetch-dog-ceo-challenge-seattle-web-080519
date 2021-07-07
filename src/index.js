// console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
let breeds = [];
// parse the response as JSON
// add image elements to the DOM for each🤔 image in the array
function fetchImgs() {
    return fetch(imgUrl)
            .then(response => response.json())
            .then(json => addImgs(json));
}

function addImgs(json) {
    
    const img1 = document.createElement('img')
    const img2 = document.createElement('img')
    const img3 = document.createElement('img')
    const img4 = document.createElement('img')
// debugger 
    // console.log(json.message);

    img1.src = json.message[0];
    img2.src = json.message[1];
    img3.src = json.message[2];
    img4.src = json.message[3];

    parent = document.querySelector("#dog-image-container"); 
    parent.appendChild(img1);
    parent.appendChild(img2);
    parent.appendChild(img3);
    parent.appendChild(img4);
}

function fetchBreeds(){
    return fetch(breedUrl)
            .then(response => response.json())
            .then(json => addBreeds(json));
}

function addBreeds(json) {
    const hash = json.message;
    let listItem = '';
    const parent = document.getElementById("dog-breeds");
    
    for (breed in hash) {
        listItem = document.createElement("li");
        listItem.innerHTML = breed;
        breeds.push(breed);
        listItem.id = `${breed}`;
        parent.appendChild(listItem);
    }
}

document.addEventListener('click', function(e){
    e.target.style.color = 'blue';
})

document.addEventListener('input', function(e){
    const firstLetter = e.target.value;
    let hash = {};
    breeds.forEach(element => {
        let elementCharArray = element.split('');
        if (elementCharArray[0] === firstLetter) {
            hash[`${element}`] = '';
        }
    });
    const parent = document.getElementById("dog-breeds");
    parent.textContent = '';
    const hashOfSortedBreeds= {'message':  hash};
    addBreeds(hashOfSortedBreeds);
})

fetchImgs();
fetchBreeds();