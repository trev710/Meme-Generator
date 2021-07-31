let apiURL = 'https://api.imgflip.com/get_memes'

let loadApiImage = () => {
    fetch(apiURL)
    .then(res => res.json())
    .then(element => {
        let memeData = element.data.memes
        imageInfo(memeData)
    })
}
likeButton.addEventListener('click',()=>{
})

dislikeButton.addEventListener('click',()=>{

})
 