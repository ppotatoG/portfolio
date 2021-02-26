let once={once: true},
    Wrap=document.querySelector('#wrap');

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
    console.dir(e)
    const Target=e.target
    if(Target.dataset.hoverviewer=='true') Target.classList.add('on')
    else if(Target.classList=='hide-btn') {
        console.log(Target.classList=='hide-btn'.parentNode)
    }
})

// document.querySelector('.box .hide-btn').addEventListener('click', function(){
//     this.parentNode.parentNode.classList.remove('on')
// })