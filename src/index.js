

const imgUrl = 'https://dog.ceo/api/breeds/image/random/4'
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

fetchAllDogsImage()
fetchAllDogBreeds()


////DATA

function fetchAllDogsImage(){
    fetch(imgUrl)
    .then(res => res.json())
    .then(dogs => dogs.message.forEach(dog => BuildDogImages(dog)))
}
//the ImgUrl is the link made into a constant, so we passed that into our fetch function.
//we got that response back and turned it into json data
//we then iterated over the data messages and pass in dog to another function that builds the dog images.







function fetchAllDogBreeds(){
    fetch(breedUrl)
    .then(res => res.json())
    .then(breeds => {
        allDogs = Object.keys(breeds.message)
        allDogs.forEach(dog => buildDogBreeds(dog) )
    })
}
//fetching the breedUrl that only has the breeds
//turn that data into json data
//we use the Object.keys to return an array of an object's own enurable property names,
//in this case we pass in the breeds message and return an array of the breed. message
//we then iterate over that array using the .forEach method and pass in that breed into a function that builds that dog breeds






////DOM

function BuildDogImages(dog){
    let dogImgContainer = document.querySelector('#dog-image-container')
    let img = document.createElement('img')
    img.src = dog
    img.style.width = '200px'
    dogImgContainer.appendChild(img)
}
//here we select the dog image container from the html, where the dog image will go.
//we then create a img element, and after we set that image source tp the dog we passed in 
//we set the width to a standared 200px
//we then added that img to the container we selected.





function buildDogBreeds(dog){
    let dogUl = document.querySelector('#dog-breeds')
    let li = document.createElement('li')
    li.textContent = dog
    dogUl.appendChild(li)
}
//here we select the un ordered list based of its id that is dog-breeds
//we the create a li element 
//we set the text of that li to the dog that was passed into this function
//then we added that li to that un ordered list that we selected. 


