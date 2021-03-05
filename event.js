let Wrap=document.querySelector('#wrap');

window.onscroll = function() {headerFunction()};

let header = document.querySelector("header"),
    sticky = header.offsetTop;


function headerFunction() {
    if (window.pageYOffset > sticky) {
    header.classList.add("fix");
    } else {
    header.classList.remove("fix");
    }
}

Wrap.addEventListener('click', function(e){
    const Target=e.target
    if(Target.dataset.hoverviewer=='true') Target.classList.add('on')
})
let HideBtn=document.querySelectorAll('.box .hide-btn');
for(let i=0; i<HideBtn.length; i++){
    HideBtn[i].addEventListener('click', function(){
        this.parentNode.parentNode.classList.remove('on')
    })
}

//git error