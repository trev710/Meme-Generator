let apiURL = 'https://api.imgflip.com/get_memes'

let likeButton = document.getElementById('like')
let dislikeButton = document.getElementById('dislike')
let generateNewMeme = document.getElementById('makeAMeme')

//variable to access the name to change with the new meme
let memeHeader = document.querySelector('h2')

let loadApiImage = () => {
    fetch(apiURL)
    .then(res => res.json())
    .then(el => {
        let memeData = el.data.memes[3]
        imageInfo(memeData)
    });
}
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


dislikeButton.addEventListener('click',()=>{
//on click we want to invoke the generate new meme function
//we also want to remove the current meme from the api list


//maybe add color changes
})


