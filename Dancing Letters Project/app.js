
const container = document.querySelectorAll(".container span");

container.forEach((letter)=>{

    letter.addEventListener("click",(e)=>{
        e.target.classList.add("active");
    });
});
 