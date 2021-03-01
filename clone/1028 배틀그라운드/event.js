//patch href
let patchWrap=document.querySelectorAll(".patchWrap");

patchWrap[0].addEventListener('click', function(){
    location.href="#";
})
patchWrap[1].addEventListener('click', function(){
    location.href="#";
})

//nav box

let menuBtn=document.querySelector(".menu"),
    navBox=document.querySelector(".nav_box");

menuBtn.addEventListener('click', function(){
    navBox.classList.toggle("on")
})

//media img.src

let issueImg=document.querySelectorAll(".issue.tablet img"),
    media=window.matchMedia("screen and (min-width: 768px)");


media.addListener(function(a) {
    if(a.matches) {
        issueImg[0].src="images/17_Survivor-Pass.png";
        issueImg[1].src="images/2-1.png";
        issueImg[2].src="images/banner-1.png";
        
    } else {
        issueImg[0].src="images/17_Survivor-Pass-1365x768.png";
        issueImg[1].src="images/2-1-1365x768.png";
        issueImg[2].src="images/banner-1-1365x768.png";
    }
});


