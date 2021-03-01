$('#img_link .single-item').slick({  
    infinite: true ,
    slidesToShow: 7, 
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots:false
  });
$('#special .single-item').slick({  
    infinite: true ,
    slidesToShow: 1, 
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    dots:true
  });
$('#video .single-item').slick({  
    infinite: true ,
    slidesToShow: 4, 
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 4000,
    arrows: true,
    dots:false,
    vertical : true
  });