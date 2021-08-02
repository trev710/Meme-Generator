let apiURL = 'https://api.imgflip.com/get_memes'

let likeButton = document.querySelector('.like')
let dislikeButton = document.querySelector('.dislike')
let makeAMemeButton = document.querySelector('.makeAMeme')

//variable to access the name to change with the new meme
let memeHeader = document.querySelector('h2')

let loadApiImage = () => {
    fetch(apiURL)
    .then(res => res.json())
    .then(el => {
        let memeData = el.data.memes[3]
        imageInfo(memeData)
    })
}

likeButton.addEventListener('click',()=>{
})


makeAMemeButton.addEventListener('submit', (e) => {
    e.preventDefault()
})


dislikeButton.addEventListener('click',()=>{

})


