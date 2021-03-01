$( document ).ready( function(){
  var navOffset= $( '.header' ).offset();
    $( window ).scroll( function() {
      if ( $( document ).scrollTop() > navOffset.top ) {
          $( '.header' ).addClass( 'header_fixed' );
          $( '#btn_fixed >a' ).addClass( 'on' );
      }
      else {
          $( '.header' ).removeClass( 'header_fixed' );
          $( '#btn_fixed >a' ).removeClass( 'on' );

      }
    })
});

$(".gnb").click(function(){
  if($(this).hasClass("hidden")){
    $(this).removeClass("hidden")
  }else{
    $(this).addClass("hidden")
  }
})

/*
var hiddenBtn=document.querySelector(".gnb");
var gnb_box=document.querySelector(".gnb_box");
var hidden=document.querySelector(".hidden");

hiddenBtn.addEventListener('click',function(){

  if(this.classList.contains.querySelector(".hidden")){
    console.log(hiddenBtn)
  }else{
    console.log(hiddenBtn)
  }

  if(this.hasClass)
  this.classList.remove("hidden");

  if(this.classList.contains(hidden)){
    console.log(true)
  }else{
    console.log(false)
  }
})
*/
