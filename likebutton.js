let likeButton = document.getElementById("like");

let likeCount = 0
likeButton.addEventListener('click',(e)=>{
    e.preventDefault()
    const likesP = document.querySelector('#likesP')
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
})

