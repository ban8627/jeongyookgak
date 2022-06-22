window.onload = function(){
  new Swiper('.sw-notice',{
    loop:true,
    autoplay:{
      delay:5000,
      disableOnInteraction: false,
    },
    speen:5000,
    navigation:{
      prevEl:'.sw-prev',
      nextEl:'.sw-next'
    },
    pagination:{
      el:'.notice-pagination',
      type: "fraction",
    }
  });
}