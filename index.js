let apiURL = 'https://api.imgflip.com/get_memes'

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

dislikeButton.addEventListener('click',()=>{

})


