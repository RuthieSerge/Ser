var btnArea = document.querySelector(".button-area")
var btn = document.querySelector(".button")
var p = document.querySelector(".indication")
var text = document.querySelector(".text")
var imgg = document.querySelector(".imgg")
var link = document.querySelectorAll("a")


btnArea.addEventListener("click", () => {
    btnArea.classList.toggle("move");
    text.classList.toggle("bold")
    btnArea.classList.toggle("change")
    if(btnArea.classList.contains("move")) {
        p.textContent = "dark";
        p.style.color = "white";
        btn.style.backgroundColor = "white";
        document.body.style.backgroundColor = "black";
        imgg.src = "image2.jpg";
        link.forEach((loop) => {
            loop.style.color =  "white";
        })

    }else {
        p.textContent = "light";
        p.style.color = "black";
        btn.style.backgroundColor = "black";
        document.body.style.backgroundColor = "white";
        imgg.src = "image1.jpg";
        link.forEach((loop) => {
            loop.style.color =  "black";
        })
    }
})