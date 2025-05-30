ScrollReveal().reveal('.anim-left', { reset: true, origin: 'left', delay: 300, distance: '500px' });
ScrollReveal().reveal('.anim-right', { reset: true, origin: 'right', delay: 300, distance: '500px' });


let preloader = document.querySelector('.preloader');

window.addEventListener('load', function () {
	setInterval(() => {
		preloader.style.display = 'none'
	}, 1000);
})

window.addEventListener('scroll', function () {
	let height = window.innerHeight;
	let btnTop = document.querySelector('.btn-Top');
	if (window.scrollY > height) {
		btnTop.style.display = 'flex'
	}
	else {
		btnTop.style.display = 'none'
	}
});

let windowJuke = document.querySelector('.window-juke');
let moreBtnJuke = document.querySelector('.more-btn-juke');

moreBtnJuke.onclick = function () {
	windowJuke.classList.add('show')
}
windowJuke.onclick = function () {
	windowJuke.classList.remove('show')

}