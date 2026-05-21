let menubtn = document.querySelector("#menubtn");
let menu = document.querySelector(".menu");

menubtn.addEventListener("click",()=>{

    menu.classList.toggle("active");

    if(menubtn.innerText === "☰"){
        menubtn.innerText = "X";
    }
    else{
        menubtn.innerText = "☰";
    }

});

let menuanchor = document.querySelectorAll(".menuanchor");

menuanchor.forEach((anchor)=>{

    anchor.addEventListener("click",()=>{
        setTimeout(()=>{ 
    menu.classList.remove("active");
    menubtn.innerText = "☰";},300);
        

    });

});

let slider = document.querySelector(".slider");

let currentSlide = 0;

setInterval(()=>{

    currentSlide++;

    if(currentSlide > 2){
        currentSlide = 0;
    }

    slider.style.transform =
    `translateX(-${currentSlide * 100}%)`;

    slider.style.transition =
    "1s ease-in-out 0s";

},3000);
let cateopener = document.querySelector(".categoryopener");
let catecontainer = document.querySelector(".categorycontainer");

cateopener.addEventListener("click", () => {
    cateopener.classList.toggle("active");
    catecontainer.classList.toggle("active");
});

let categorybtn = document.querySelectorAll(".categorybtn");

categorybtn.forEach((btn) => {
    btn.addEventListener("click", () => {
        setTimeout(()=>{
            cateopener.classList.remove("active");
        catecontainer.classList.remove("active");
        },500);
        
    });
});

let contact = document.querySelector("#contact");
let contactclose = document.querySelector(".contactclose");

menuanchor[4].addEventListener("click", () => {
    contact.classList.add("active");
});

contactclose.addEventListener("click", () => {
    contact.classList.remove("active");
});
let aboutus= document.querySelector("#aboutus");
let aboutclose = document.querySelector(".aboutclose");

menuanchor[3].addEventListener("click", () => {
    aboutus.classList.add("active");
});

aboutclose.addEventListener("click", () => {
    aboutus.classList.remove("active");
});
let whatsappBtn = document.querySelector("#whatsappBtn");

whatsappBtn.addEventListener("click", () => {

    let message =
`Hello Bags Planet,

Customer Name:
Customer Address:
Customer Contact No:

Product Name: 
Price: 

Quantity:

`;



    let whatsappLink =
`https://wa.me/919930520375?text=${encodeURIComponent(message)}`;

    window.open(whatsappLink, "_blank");

});
