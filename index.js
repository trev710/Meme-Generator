
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
getMemes() //Invokes the function each time the page is loaded


function chooseRandomMeme(memeData) { //Chooses a random element from the array of memes
    let randomIndex = Math.floor(Math.random() * memeData.length); //Selects a random index value from the array and assigns to the variable
    let randomImage = memeData[randomIndex]; //Selects the element from the array with the matching index value and assigns to the variable
        displayRandomMeme(randomImage) //Invokes a function that will display the selected meme's image and name
}

function displayRandomMeme(randomImage) { //Displays the random meme's name and image
    memeImage.src = randomImage.url; //Assigns the meme's url to the image source
    memeName.innerHTML = randomImage.name; //Assigns the meme's name to the inner HTML of the h2
}






//likeButton.addEventListener('click',()=>{
//})

//dislikeButton.addEventListener('click',()=>{