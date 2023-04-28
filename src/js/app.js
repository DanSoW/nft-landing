import * as flsFunctions from "./modules/functions.js";
import Swiper from 'swiper';
import {
	Navigation,
	EffectFade,
	Pagination,
	Thumbs,
	Controller,
	FreeMode,
	Scrollbar,
	A11y,
	Mousewheel
} from 'swiper';
import AOS from 'aos';

flsFunctions.isWebp();

const swiper = new Swiper('.auctions-slider', {
	navigation: { // Добавление кнопок
		nextEl: '.swiper-button-next1',
		prevEl: '.swiper-button-prev1'
	},
	modules: [Navigation, FreeMode], // Используемые модули
	autoHeight: true, // Автоматическое вычисление высоты
	speed: 500, // Скорость прокрутки
	slidesPerView: 3, // Количество слайдов, которые будут видны
	spaceBetween: 42,
	freeMode: true,
	grabCursor: true
});