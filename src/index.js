console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", () => {addListeners()} )

function addListeners() {
    breedValue = document.getElementById("breed-dropdown")
    breedValue.addEventListener("change", filterBreeds)
}


const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
// fetch the images using the url:
fetch("https://dog.ceo/api/breeds/image/random/4")
// parse the response as JSON:
    .then(response => response.json())
    // add image elements to the DOM for each image in the array:
    .then(json => { json.message.forEach(url_element => {console.log(url_element);  
    // creates an img node:
    let i = document.createElement('img')
    // assigns new 'img' tag to 'src' so it can be displayed:
    i.src = url_element;
    i.style['height'] = '150px'
    // 'appends' (adds) to DOM body/structure:
    document.querySelector("#dog-image-container").appendChild(i);
    // document.getElementById("dog-image-container").appendChild(i);
    } ) }
    );

const breedUrl = 'https://dog.ceo/api/breeds/list/all'
// fetch all the dog breeds:
fetch(breedUrl)
    .then(response => response.json())
    // add the breeds to the page in an <ul> (take a look at the included index.html)
    .then(json => { for (breed in json.message) 
        // for...in extracts property NAME's(keys), for...of extracts values only
        { const li = document.createElement("li")
        li.innerText = breed;
        document.getElementById("dog-breeds").appendChild(li);
        li.style.color = "#ff99cc"
        li.addEventListener("click", function() {
            if (li.style.color === "#ff99cc") {
                (li.style.color = "#6666ff");
            };            
        });
        };
    });

    function filterBreeds(event) {
        event.preventDefault()
        const ul = document.getElementById("dog-breeds")
        const breedName = document.getElementById("breed-dropdown").value
        for(let i = 0; i< ul.children.length; i++) {
            const li = ul.children[i]
            if (li.innerText.charAt(0) !== breedName) {
                li.classList.add("hidden")
            } else {
                li.classList.remove("hidden")
            }
        }

    }