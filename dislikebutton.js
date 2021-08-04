//Add dislikeMessage.innerHTML = ''; to the 'Like' button and any other buttons
//Remove the blocked memes array before pulling in and then add back in


const newMemeButton = document.getElementById('makeAMeme');
const dislikeButton = document.getElementById('dislike');
const dislikeMessage = document.getElementById('dislikeMessage');
const listOfDislikedMemes = document.getElementById('listOfDislikedMemes');
const reloadListButton = document.getElementById('reloadList');
const listDiv = document.getElementById('listDiv');


//'Generate New Meme!' button
newMemeButton.addEventListener('click', (e) => { //Displays a new random meme
    e.preventDefault(); //Prevents refresh
    getMemes(); //Gets a new random meme
    dislikeMessage.innerHTML = ''; //Removes the dislike message if currently displaying
})


//'Dislike' button 
dislikeButton.addEventListener('click', (e) => {
    e.preventDefault();
    dislikeMessage.innerHTML = 'Ouch! We added this meme to the "Disliked Memes" list so it can be reviewed for removal.';
    let currentMemeObj = {
        name:memeName.innerHTML
    }
    addToDislikedMemes(currentMemeObj);
})


//Adds meme to the disliked memes list in db.json
function addToDislikedMemes (currentMemeObj) {
    fetch('http://localhost:3000/blockedMemes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(currentMemeObj)
    })
    .then(res => res.json())
    .then(data => console.log(data))
}


//'See all of the disliked memes!' button
reloadListButton.addEventListener('click', (e) => {
    e.preventDefault();
    listOfDislikedMemes.innerHTML = '';
    getDislikedMemes();
})


//Gets the array of disliked memes from db.json
const getDislikedMemes = () => { 
    fetch('http://localhost:3000/blockedMemes')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        const dislikedMemes = data; //Creates a variable for the array of disliked meme names
        console.log(dislikedMemes);
        displayDislikedMemes(dislikedMemes);
    })
}


//Displays the list of disliked memes on the page
function displayDislikedMemes(dislikedMemes) {
    dislikedMemes.forEach(meme => {
        dislikedMemeListItem = document.createElement('li');
        dislikedMemeListItem.innerHTML = meme.name;
        listOfDislikedMemes.appendChild(dislikedMemeListItem);
    });
}


