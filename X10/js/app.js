/* function on open Modal */
const link = document.querySelectorAll('.gallery__item');
const modalCloseBtn = document.querySelector('.modal__header--close');
const modal = document.querySelector('.modal');

link.forEach(function(item, i) {

    link[i].addEventListener('click', openModal);

});

modalCloseBtn.addEventListener('click', function() {

	closeModal();

});

function openModal() {

    modal.classList.add('modal--active');
};

function closeModal() {

    modal.classList.remove('modal--active');

};
/* function on open Modal */

/* function on open Menu */
const menuBtn = document.querySelector('.menu--button');
const menuList = document.querySelector('.menu__list');
const menuItem = document.querySelectorAll('.menu__item');
const nav = document.querySelector('nav');

menuBtn.addEventListener('click', openMenu);

function openMenu() {

    nav.classList.toggle('nav--active');
    menuList.classList.toggle('menu--open');
    menuBtn.classList.toggle('menu--button-active');

};
/* function on open Menu */

/* function on scroll */
const toUpBtn = document.querySelector('.up');

toUpBtn.addEventListener('click', up);

function up() {

	let top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
	let time;

	if(top > 0) {

		window.scrollBy(0, -100);
		time = setTimeout(`up()`, 20);

	} else {

		clearTimeout(time);
		return false;

	}
};
/* function on scroll */