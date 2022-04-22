


let mainul = document.getElementById('mainul');
mainul.style.right = "-260px";
function menu() {
    if (mainul.style.right == "0px") {
        mainul.style.right = "-260px";
    } else {
        mainul.style.right = "0px";
    }
}




var swiper = new Swiper(".review-slider", {
    loop: true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centerSlides: true,

    breakpoints: {
        0: {
            slidesPerView: 1,

        },
        768: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
        1020: {
            slidesPerView: 3,

        },
    },
});

function openDiv(){
    let myDiv=document.getElementById("myoverlay");
    myDiv.style.transform="scale(1)";
}

function closeDiv(){
    let myDiv=document.getElementById("myoverlay");
    myDiv.style.transform="scale(0)";
}




function closeEvent(){
    let nweDiv=document.getElementById("myevent");
    nweDiv.style.transform="scale(0)";
}