let photo = document.getElementById("goose")

console.log(photo);

const changeImg = () =>{
    if(photo.src.match("./goose_img.jpg")){
        photo.src = "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGRvZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
        photo.style.width = "200px"
        photo.alt = "dog-img"
    } else{
        photo.src = "./goose_img.jpg"
    }
    console.log("click");

} 
let title = document.querySelector("h1")


const changeTitle = () =>{
    title.textContent = "BISTRO OF A BLACK GOOSE?"
}
   
title.addEventListener("mousemove", changeTitle)
    


