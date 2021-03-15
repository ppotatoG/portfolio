//newnbest tebmenu
$(function(){
    $(".newnbest ul li").click(function(){ 
         
        $(".newnbest ul li").removeClass('on');
        $(".newnbest .tab_content").removeClass('on');

        $(this).addClass('on');

        $("#"+$(this).data('id')).addClass('on');
    });
});

//quick_menu nav fixed
$( document ).ready( function() {
    var navOffset = $( '.nav' ).offset();
        $( window ).scroll( function() {
        if ( $( document ).scrollTop() > navOffset.top ) {
            $( '.nav' ).addClass( 'navFixed' );
            $( '.quick_menu' ).addClass( 'quick_menu_fixed' );
        }
        else {
            $( '.nav' ).removeClass( 'navFixed' );
            $( '.quick_menu' ).removeClass( 'quick_menu_fixed' );
        }
    });
} );

//counseling slide

var slide=document.querySelector(".slides"),
    slideWidth=1170, 
    slides=document.querySelectorAll(".slides li"),
    slidesLength=slides.length,

    current=0,

    prev=document.querySelector(".prev"),
    next=document.querySelector(".next");
    
slide.style.width=(slideWidth*slidesLength)+'px';

prev.addEventListener('click',function(){
    if(current=slidesLength-1){
    current--;

    next.classList.remove('btn_opacity');
    prev.classList.add('btn_opacity');
    slide.style.left=0+'px';
    
    }else{
        false;
    }
})

next.addEventListener('click',function(){
    if(current<slidesLength-1){
    current++;

    prev.classList.remove('btn_opacity');
    next.classList.add('btn_opacity');
    slide.style.left=-(slideWidth)+'px';
    
    }else{
        false;
    }
})

var sectionimgArray= new Array();
    sectionimgArray[0]="images/section_ad/리모델링맛집.jpg";
    sectionimgArray[1]="images/section_ad/우리집사용법.jpg";
    sectionimgArray[2]="images/section_ad/리모델링맛집.jpg";
    sectionimgArray[3]="images/section_ad/우리집사용법.jpg";

window.addEventListener('DOMContentLoaded', function(){
    var imgNum=Math.round(Math.random()*3);

    var objImg=document.getElementById("randomImg-section_ad");
    objImg.src=sectionimgArray[imgNum];
})

var mainimgArray= new Array();
    mainimgArray[0]="images/main_ad.jpg";
    mainimgArray[1]="images/main_ad-1.jpg";
    mainimgArray[2]="images/main_ad.jpg";
    mainimgArray[3]="images/main_ad-1.jpg";

window.addEventListener('DOMContentLoaded', function(){
    var imgNum=Math.round(Math.random()*3);

    var objImg=document.getElementById("randomImg-main_ad");
    objImg.src=mainimgArray[imgNum];
})

var footerI=document.querySelectorAll(".footer .community >div h3 i");

for(i=0; i<3; i++){
    footerI[i].addEventListener('click', function(){
        location.href="#";
    })
}