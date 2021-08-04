
const captionBtn = document.getElementById("new");
const captionDiv = document.getElementById("captionsTextBox");


captionBtn.addEventListener('click', (e) => {
    e.preventDefault(); //Prevents refresh
    
    //let newDiv = document.createElement('div');
    let newTextArea = document.createElement('textarea');
    captionDiv.appendChild(newTextArea);
    //form.appendChild(newDiv);

})



    
    
      
    
    

                  
