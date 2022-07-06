/*
 작성자 : 홍길동
 작성일 : 2022-07-07
 요구기능 : 
  1. 참조사이트 : https://www.jeongyookgak.com/
  2. 베스트 상품 데이터 출력을 위한 사항을 기재하시오.
  3. 총 데이터 항목 개수는 6개
  4. 항목별 이름과 구조를 정의하시오.
*/
/* case 1
  제품의 데이터 링크 목록
  let goodLink = [];
  제품의 데이터 이미지 목록
  let goodPic = [];
*/
/* case 2
  객체를 이용한 제품 목록
  let goodList = [
    {
      link:'',
      pic:'',
      title:'',
      price:'',
      opt1:'',
      opt2:''
    },{},
  ]
*/

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
  let bestItems = [{
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

  // list 
  for (let i = 0; i < bestItems.length; i++) {
    let itemList = bestItems[i];
    let itemTemp = `<li>
    <div class="product-list ${itemList.anti}">
      <a href="${itemList.link}"><img src="images/${itemList.pic}" alt="" class="item-img"></a>
      <button class="go-cart"></button>
    </div>
    <h4 class="product-title">초신선 ${itemList.title}</h4>
    <p class="product-value">기준가 ${itemList.price}원/${itemList.option}</p>
  </li>
  `;
    itemDataPost += itemTemp;
  };
  itemDataList.html(itemDataPost);
};