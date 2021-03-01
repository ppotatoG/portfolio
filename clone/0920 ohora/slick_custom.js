$('#header .single-item').slick({  
    infinite: true ,
    slidesToShow: 1, 
    slidesToScroll: 1,
    autoplay: true, /* 자동으로 다음이미지 보여주기 */
    autoplaySpeed:1000,/* 다음이미지로 넘어갈 시간 */
    arrows: false, /* 화살표  */
    dots:false /*  아래점  */
  });
$('#main .single-item').slick({  
    infinite: true ,
    slidesToShow: 1, 
    slidesToScroll: 1,
    autoplay: true, /* 자동으로 다음이미지 보여주기 */
    autoplaySpeed:1000,/* 다음이미지로 넘어갈 시간 */
    arrows: true, /* 화살표  */
    dots:true /*  아래점  */
  });
$('#event .single-item').slick({  
    infinite: true ,
    slidesToShow: 1, 
    slidesToScroll: 1,
    arrows: true, /* 화살표  */
    dots:true /*  아래점  */
  });