$(document).ready(function () {});

window.onload = function () {
  // top ad banner
  var ad_close = $('.ad-close');
  var top_ad = $('.top-ad');
  ad_close.click(function (event) {
    event.preventDefault();
    top_ad.hide();
  });
  // notice banner slide
  new Swiper('.sw-notice', {
    autoplay: {
      delay: 10000,
      disableOnInteraction: false,
    },
    speed: 1000,
    navigation: {
      prevEl: '.sw-prev',
      nextEl: '.sw-next'
    },
    pagination: {
      el: '.notice-pagination',
      type: "fraction",
    }
  });

  var notice_btn = $('.notice-control > button');
  notice_btn.click(function () {
    notice_btn.removeClass('btn-active');
    $(this).addClass('btn-active');
  });


  // best product list
  // product data
  /*
    [
      {
        link(상품링크):'링크주소',
        pic(상품이미지):'상품이미지 명',
        title(상품이름):'상품 명',
        price(상품가격):'상품가격'
        option(상품무게 /갯수 등):'상품옵션'
        anti(상품 항생제 여부):''/ 'non-anti' 구분
      }
    ]
  */ 
  let bestItems = [
    {
      link: '#',
      pic: 'product_list_01.png',
      title: '돼지 삼겹살 구이용',
      price: '23,400',
      option: '600g',
      anti: ''
    },
    {
      link: '#',
      pic: 'product_list_02.png',
      title: '닭볶음탕',
      price: '6,700',
      option: '950g',
      anti: ''
    },
    {
      link: '#',
      pic: 'product_list_03.png',
      title: '등심 돈까스',
      price: '11,800',
      option: '770g',
      anti: ''
    },
    {
      link: '#',
      pic: 'product_list_04.png',
      title: '동물복지 무항생제 유정란',
      price: '6,900',
      option: '12구',
      anti: 'non-anti'
    },
    {
      link: '#',
      pic: 'product_list_05.png',
      title: '무항생제 우유',
      price: '3,600',
      option: '900ml',
      anti: 'non-anti'
    },
    {
      link: '#',
      pic: 'product_list_06.png',
      title: '무항생제 이유식용 한우 우둔 다짐육',
      price: '16,500',
      option: '180g',
      anti: 'non-anti'
    }
  ]
  
  let itemDataList = $('.product-con');
  let itemDataPost = '';

  // list 구현
  for (let i = 0; i < 6; i++) {  // i< 6 상품 갯수 6개 제한
    let itemList = bestItems[i];
    let itemTemp = `<li>
    <div class="product-list ${itemList.anti}">
      <a href="${itemList.link}"><img src="images/${itemList.pic}" alt="" class="item-img"></a>
      <button class="go-cart" type="submit" value="${itemList.title}" value1="${itemList.pic}" value2="${itemList.price}">장바구니 담기</button>
    </div>
    <h4 class="product-title">초신선 ${itemList.title}</h4>
    <p class="product-value">기준가 ${itemList.price}원/${itemList.option}</p>
  </li>
  `;
    itemDataPost += itemTemp;
  };
  itemDataList.html(itemDataPost);

};