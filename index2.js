
const apiURL = 'https://api.imgflip.com/get_memes'
const memeImage = document.getElementById('meme'); 
const memeName = document.querySelector('h2');
console.log(memeName);

const getMemes = () => { //Gets the memes from the external API
    fetch(apiURL)
    .then(res => res.json())
    .then(elements => {  
        const memeData = elements.data.memes; //Creates a variable for the array of memes
        chooseRandomMeme(memeData); //Invokes a function that will choose a random element from the array of memes
    })
}
<<<<<<< HEAD:index.js
getMemes() //Invokes the function each time the page is loaded
=======
let likeCount = 0
likeButton.addEventListener('click',(e)=>{
    const likesP = document.getElementById('likesP')
    likeCount = likeCount+1
    if (likeCount === 1){
      likesP.textContent ='1 like'
    } else {
      likesP.textContent = `${likeCount} likes`
    fetch('http://localhost:3000/memes', {
    method: "PATCH", 
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify({
    likes: likeCount })
      
  })
  }    
//on click we want to increase a counter
//we want to patch the likes with a count to the api list

//maybe add color change on click
})


generateNewMeme.addEventListener('submit', (e) => {
    e.preventDefault()
//on submit we want to fetch a new meme from the api
//we want to append the name to the h2 reference
//we want to make the image data appear on the image box
})
>>>>>>> 5e36e2b0d36108cec861f8cff989c7a9e3f200a7:index2.js


function chooseRandomMeme(memeData) { //Chooses a random element from the array of memes
    let randomIndex = Math.floor(Math.random() * memeData.length); //Selects a random index value from the array and assigns to the variable
    let randomImage = memeData[randomIndex]; //Selects the element from the array with the matching index value and assigns to the variable
        displayRandomMeme(randomImage) //Invokes a function that will display the selected meme's image and name
}

function displayRandomMeme(randomImage) { //Displays the random meme's name and image
    memeImage.src = randomImage.url; //Assigns the meme's url to the image source
    memeName.innerHTML = randomImage.name; //Assigns the meme's name to the inner HTML to the h2
}


