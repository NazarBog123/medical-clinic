// Covid
const covid = document.querySelector('.covid');
const covidClose = document.querySelector('.covid__close');

covidClose.addEventListener('click', () => {
	covid.style.marginTop = `-${covid.clientHeight}px`;
})
// Covid //

// Home
if (document.querySelector('.home')) {
	const home = document.querySelector('.home');
	const homeImg = document.querySelector('.home__img');

	if (home.clientWidth > 840) {
		homeImg.style.width = `${home.clientWidth / 2}px`;
	}

	window.addEventListener('resize', () => {
		if (home.clientWidth > 840) {
			homeImg.style.width = `${home.clientWidth / 2}px`;
		}
	});
}
// Home //


// Que
if (document.querySelector('.que-acc__btn')) {
	const accBtn = document.querySelectorAll('.que-acc__btn');
	const accItem = document.querySelectorAll('.que-acc__item');

	for (const item of accItem) {
		const btn = item.querySelector('button');
		item.setAttribute('data-height', item.clientHeight)
		item.style.height = `${btn.clientHeight + 1}px`;
	}

	for (const btn of accBtn) {
		btn.addEventListener('click', () => {
			if (btn.classList.contains('active')) {
				const item = btn.parentNode;
				item.style.height = `${btn.clientHeight + 1}px`;
				btn.classList.remove('active');
			} else {
				for (const item2 of accItem) {
					const btn2 = item2.querySelector('button');
					btn2.classList.remove('active');
					item2.style.height = `${btn2.clientHeight + 1}px`;
				}
				const item = btn.parentNode;
				item.style.height = `${item.getAttribute('data-height')}px`;
				btn.classList.add('active');
			}
		});
	}
}
// Que //

// Say
if (document.querySelector('.saySlider')) {
	const saySlider = new Swiper('.saySlider', {
		direction: 'horizontal',
		loop: true,
		autoHeight: true,

		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});
}

if (document.querySelector('.serviceSlider')) {
	const serviceSlider = new Swiper('.serviceSlider', {
		direction: 'horizontal',
		loop: false,
		autoHeight: true,

		scrollbar: {
			el: '.serviceSlider__scroll',
		},
	});
}
// Say //

// Burger
const burger = document.querySelector('.burger');
const burgerOpen = document.querySelector('.header__burger');
const burgerBg = document.querySelector('.burger__bg');
const header = document.querySelector('.header');

burger.style.top = `-${burger.clientHeight + 10}px`;

burgerOpen.addEventListener('click', () => {
	if (header.classList.contains('active')) {
		header.classList.remove('active');
		burger.classList.remove('active');
		document.body.style.overflow = 'visible';
		burger.style.top = `-${burger.clientHeight + 10}px`;
	} else {
		header.classList.add('active');
		burger.classList.add('active');
		covid.style.marginTop = `-${covid.clientHeight}px`;
		// burger.style.top = `${header.clientHeight + covid.clientHeight}px`;
		burger.style.top = `${header.clientHeight}px`;
		document.body.style.overflow = 'hidden';
	}
});

burgerBg.addEventListener('click', () => {
	header.classList.remove('active');
	burger.classList.remove('active');
	document.body.style.overflow = 'visible';
	burger.style.top = `-${burger.clientHeight + 10}px`;
});
// Burger //

// Choose
const chooseTab = document.querySelectorAll('.choose-tab_service');
const chooseGrid = document.querySelectorAll('.choose__grid_service');

if (chooseTab && chooseGrid) {
	for (const tab of chooseTab) {
		tab.addEventListener('click', () => {
			for (const tab2 of chooseTab) {
				tab2.classList.remove('active');
			}
			tab.classList.add('active');

			for (const grid of chooseGrid) {
				if (+tab.getAttribute('data-tab') == +grid.getAttribute('data-grid')) {
					grid.classList.add('active');
				} else {
					grid.classList.remove('active');
				}
			}
		});
	}
}

// Choose

// Location
if (document.querySelector('.location-acc__btn')) {
	const accBtn = document.querySelectorAll('.location-acc__btn');
	const accItem = document.querySelectorAll('.location-acc__item');

	for (const item of accItem) {
		const btn = item.querySelector('button');
		item.setAttribute('data-height', item.clientHeight)
		item.style.height = `${btn.clientHeight + 1}px`;
	}

	for (const btn of accBtn) {
		btn.addEventListener('click', () => {
			if (btn.classList.contains('active')) {
				const item = btn.parentNode;
				item.style.height = `${btn.clientHeight}px`;
				btn.classList.remove('active');
				item.classList.remove('active');
			} else {
				for (const item2 of accItem) {
					const btn2 = item2.querySelector('button');
					btn2.classList.remove('active');
					item2.style.height = `${btn2.clientHeight + 1}px`;
				}
				const item = btn.parentNode;
				item.style.height = `${item.getAttribute('data-height')}px`;
				btn.classList.add('active');
				item.classList.add('active');
			}
		});
	}
}
// Location //

// Contact
const contactDropBtn = document.querySelector('.contact-drop__btn');
const contactDrop = document.querySelector('.contact-drop');

contactDropBtn.addEventListener('click', () => {
	if (contactDrop.classList.contains('active')) {
		contactDrop.classList.remove('active');
	} else {
		contactDrop.classList.add('active');
	}
});
// Contact //
