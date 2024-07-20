const scrollindicator = document.getElementById("scrollindicator");

const totalscrollheight = document.body.scrollHeight - window.innerHeight;

function updatescrollindicator(){
    const scrollpercentage = (window.scrollY/totalscrollheight) * 100;
    scrollindicator.style.width = scrollpercentage + "%";

}

window.addEventListener("scroll", updatescrollindicator);


updatescrollindicator();
