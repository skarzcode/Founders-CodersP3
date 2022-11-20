const name = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#comment");
const button = document.querySelector("#button");
const commentSection = document.querySelector(".commentSection");
const comments = [];
let count = document.querySelector(".count")
let counter = 0;

function createRecord(){	
	event.preventDefault();
	
}

const comment = (name, email, comment) => {

    return { name, email, comment};
  };

function renderComment(curr){
    let card = document.createElement("div");
    card.classList.add("commentCard");
    commentSection.appendChild(card);
    let author = document.createElement("h2");
    author.innerHTML = curr.name;
    card.appendChild(author);
    let comment = document.createElement("p");
    comment.innerHTML = curr.comment;
    card.appendChild(comment);

}

function clearForm(){
    name.value = "";
    email.value = "";
    message.value = ""
    counter = 0;
    count.innerHTML = 0;
}



button.addEventListener("click", function(){
    if(name.value == 0 || message.value == 0 || email.value == 0 || counter > 140){

    } else{
    let newComment = comment(name.value,email.value,message.value);
    console.log(newComment);
    renderComment(newComment);
    clearForm();
    }
})

message.addEventListener("keydown", function(event){
        if (event.key == "Backspace" && counter > 0){
            counter = counter-1;
            count.innerHTML = counter
            if(counter <= 140){
                message.classList.remove("error");
                count.classList.remove("error2");
            } 
        } else if (event.key != "Backspace"){
            counter = counter + 1;
            count.innerHTML = counter
            if(counter > 140){
                message.classList.add("error");
                count.classList.add("error2");
            } 
        }
})
