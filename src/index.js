

const imgUrl = 'https://dog.ceo/api/breeds/image/random/4'
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

fetchAllDogsImage()
fetchAllDogBreeds()

//data

function fetchAllDogsImage(){
    fetch(imgUrl)
    .then(res => res.json())
    .then(dogs => dogs.message.forEach(dog => BuildDogImages(dog)))
}
//note. the .message looks at the console where it says 
//{message: (4)}
//note. we then get that json data..
//set a name of 'dogs' that is basically data, then we look at
//that data and into the message. then we iterate over that using
//the.foreach and then now that we have that we get a dog and we 
//pass it into the next function that builds the dogs, called 
//buildDogimages, and we pass in that dog as a argument.
//the 'dog' is basically the data we iterated through, can be any name.
//challenge 1 complete.


function fetchAllDogBreeds(){
    fetch(breedUrl)
    .then(res => res.json())
    .then(breeds => {
        allDogs = Object.keys(breeds.message)
        allDogs.forEach(dog => renderDogBreeds(dog) )
    })
}
//object.keys(obj) gives us an array of all the keys that 
//was in that array
//or object.values() that gets the values
//these are way to iterate over a array. 
//we then set allDogs as a variable equal to our dog breed iterator
//that returns all of our keys as the name implies Object.keys
//we then call our variable that we just created, 
//and get each dog breed using 'forEach' and we pass 
//in a dog into our buildDogBreeds function 











//DOM
function BuildDogImages(dog){
    let dogImgContainer = document.querySelector('#dog-image-container')
    let img = document.createElement('img')
    img.src = dog
    img.style.width = '200px'
    dogImgContainer.appendChild(img)
}

//in this one we console to log to make sure it is passing in what we want 
//we then select the container in our id where we want 
//to put the image in, and set it to a new variable
//then we set a variable called img and created a element in the
//index,
//then we set that element src 'source' to dog, which is
//the dog url we got from our first fetch function.
//next line we simply set the size for all the pictures that are created
//then we appended it meaning we added that img to
//that conatiner in our html 
//Challenge 1 complete.

function renderDogBreeds(dog){
    console.log(dog)
    let dogUl = document.querySelector('.dog-breeds')
    let li = document.createElement('li')
    li.textContent = dog
    li.id = dog 
    dogUl.appendChild(li)
}
//we then grab the class from the html using a query selector.
//where we want to display our breeds
//to grab a class we use a . 
//this will grab the first class that exist
//then we create a li inside that container that we grabbed.
//we use a console.log(dog) to make sure our previous function
//that iterated over to get breeds is Actually working
//we then get that li we just created and add '.textContent' 
//to add our dog breed  information to it
//after that we append that li with the dog breed info 
//to our class called 'dog-breeds'

