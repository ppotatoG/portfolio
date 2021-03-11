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
