/*

    Slick sliders 

*/
$(document).ready(function(){

    $('.slider__main').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        centerMode: true,
        dotsClass: "slider__dots",
        speed: 500,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        responsive: [
            {
              breakpoint: 480,
              settings: {
                centerMode: true,
                slidesToShow: 1,
                centerMode: true,
                centerPadding: '10px',
              }
            }
          ]
    });

    $('.slider__category').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        speed: 500,
        arrows: true,
        prevArrow: ' <button type="button" class="slider__button slider__button--prev"><img src="./assets/img/slider/prev.svg" alt="prev" class="img--fluid img--nav"></button>',
        nextArrow: '<button type="button" class="slider__button slider__button--next"><img src="./assets/img/slider/next.svg" alt="next" class="img--fluid img--nav"></button>',
        responsive: [
            {
            breakpoint: 1024,
                settings: {
                    slidesToShow: 2
                }
            },
            {
            breakpoint: 770,
                settings: {
                    slidesToShow: 1
                }
            }
          ]
    });

});
/*

    Start create menu 

*/
let menuToggle = document.querySelector('.menu__toggle'),
    menu = document.querySelector('.menu'),
    menuList = document.querySelector('.menu__list'),
    menuItem = document.querySelectorAll('.menu__item');

function hamburgerMenu() {

    menuToggle.classList.toggle('menu__toggle--active');
    menu.classList.toggle('menu--active');
    menuList.classList.toggle('list--active');
    
    menuItem.forEach((item, i) => {
        menuItem[i].classList.toggle('item--active');
    });
    
};

menuToggle.addEventListener('click', function() {

    hamburgerMenu();

});
/*

    End menu 

*/

/*

    Start Create cart

*/

let modal; // create modal window
let modalHeader; // create modal-header window
let modalHeaderContent; // create modal-header-content window
let modalBody; // create modal body
let modalBodyContent; // field modal body products

let discription; // discription count/prices products
let closeBtn; // close modal window

function cartCreateElements() {

    modal = document.createElement('div');

    modalHeader = document.createElement('div');
    modalHeaderContent = document.createElement('span');

    modalBody = document.createElement('div');
    modalBodyContent = document.createElement('div');

    discription = document.createElement('div');
    closeBtn = document.createElement('button');

};

function cartStyleElements() {

    cartCreateElements();

    modal.classList.add('modal');

    modalHeader.classList.add('modal__header');
    
    modalBody.classList.add('modal__body');
    modalBodyContent.classList.add('modal__body--content');

    discription.classList.add('payment--discription');
    closeBtn.classList.add('btn', 'btn--close');

};

function cartContentElements() {

    cartStyleElements();

    modalHeaderContent.textContent = 'Корзина';
    closeBtn.textContent = 'Закрыть';

};

function cartCreate() {

    cartContentElements();

    modal.appendChild(modalHeader);
    modal.appendChild(modalBody);

    modalHeader.appendChild(modalHeaderContent);
    modalHeader.appendChild(closeBtn);

    modalBody.appendChild(discription);
    
    modalBody.appendChild(modalBodyContent);

    document.body.appendChild(modal);

}

cartCreate();

let getElementModal = document.querySelector('.modal');
    getElementModalBody = document.querySelector('.modal__body');
    getElementModalClose = document.querySelector('.btn--close');
    getElementOpenModalButton = document.querySelector('.cart');

function openCart() {

    modal.classList.add('modal--active');
    document.body.style.overflow = 'hidden';

};

function closeCart() {

    modal.classList.remove('modal--active');
    document.body.style.overflow = 'auto';

};

getElementOpenModalButton.addEventListener('click', openCart)
getElementModalClose.addEventListener('click', closeCart);

let cardPay = document.querySelectorAll('.card'); // get elementt Card (products)
let cardButtonPay = document.querySelectorAll('.payment'); // get all button payment
let priceOffer = document.querySelector('.cart__count span'); // get offer prices
let priceCount = document.querySelectorAll('.price__count'); // get all prices (products)

let ls_countPrice;
let ls_countItem;
let ls_Item;
let ls_ItemNew = {};

function getDataLocalStorage() {

    ls_countPrice = +localStorage.getItem('countPrice');
    ls_countItem = +localStorage.getItem('countItem');
    // ls_Item = +localStorage.getItem('item');

};

function setCountValueItem() {

    discription.textContent = `Итого ${ls_countItem} товара, стоимостью ${ls_countPrice} рублей.`;
    priceOffer.textContent = `${ls_countPrice} руб.`;

};

cardButtonPay.forEach( (item, i) => {

    item.addEventListener('click', function() {

        getDataLocalStorage();

        let item = cardPay[i].cloneNode(true);
            deleteButtonPay = item.querySelector('button').remove();

        localStorage.setItem(`countPrice`, (ls_countPrice) + (+priceCount[i].textContent));
        localStorage.setItem(`countItem`, (ls_countItem) + 1);

        getDataLocalStorage();

        setCountValueItem();

        modalBodyContent.appendChild(item);

        // Save in LocalStarage Product // 50/50 work

        // ls_Item = JSON.parse(localStorage.getItem('item')) || [];

        // ls_ItemNew = {
        //     name: `item${i}`
        // };

        // ls_Item.push(ls_ItemNew);

        // localStorage.setItem('item', JSON.stringify(ls_Item));

        // ladsfbbgbgcb = JSON.parse(localStorage.getItem('item'));

        // Save in LocalStarage Product // 50/50 work   

    });

});

getDataLocalStorage();

setCountValueItem();
/*

    End cart 

*/