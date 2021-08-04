
const captionBtn = document.getElementById("new");
const captionDiv = document.getElementById("captionsTextBox");



document.addEventListener("DOMContentLoaded", () => {
    const commentForm = document.getElementById('createComment');
    commentForm.addEventListener('submit', addToComments);
});
function addToComments(e){
    e.preventDefault();
    const commentText = e.target.newComment.value
    const commentList = document.getElementById('commentul')
    const newComment = document.createElement('li');
    newComment.innerText = commentText;
//    const deleteCommentButton = document.createElement('button');
//    deleteCommentButton.innerText('[ X ]')
//    newComment.append(deleteCommentButton);
//    deleteCommentButton.addEventListener('click' , e => {
//    })
    commentList.append(newComment)
    e.target.reset()
}



    
    
      
    
    

                  
