let shopcont = document.querySelector(".shopcontainer");
let arrow = document.querySelector(".arrow");
let shopnow = document.querySelector(".shopnow");


shopcont.addEventListener("click", () => {

    // transition speed
    arrow.style.transition = "2s";
    shopnow.style.transition = "2s";

    // move buttons
    arrow.style.transform = "translateX(140px)";
    shopnow.style.transform = "translateX(-110px)";

    // after transition complete go to next page
    setTimeout(() => {

        window.location.href = "Home.html";

    }, 2000);

});
