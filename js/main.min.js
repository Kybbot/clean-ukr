let slideIndex = 1;
const slides = document.getElementsByClassName('main-gallery-item');
const prev = document.querySelector('.left-cursor');
const next = document.querySelector('.right-cursor');

showSlides(slideIndex);

function showSlides(n) {
	if (n > slides.length) {
		slideIndex = 1;
	}

	if (n < 1) {
		slideIndex = slides.length;
	}

	for (let i = 0; i < slides.length; i++) {
		slides[i].style.display = 'none';
	}

	slides[slideIndex - 1].style.display = 'block';
}

function plusSlides(n) {
	showSlides(slideIndex += n);
}

function currentSlide(n) {
	showSlides(slideIndex = n);
}

prev.addEventListener('click', function() {
	plusSlides(-1);
});

next.addEventListener('click', function() {
	plusSlides(1);
});

const imgs = [
	'img/inst/1.png',
	'img/inst/2.jpg',
	'img/inst/3.jpg',
	'img/inst/4.jpg',
	'img/inst/5.jpg'
]

const imgBg = document.querySelector('.img-bg')

function changeImage() {
	imgBg.style.backgroundImage = `url(${imgs[0]})`;
	let i = 1;
	let inter = setInterval(function(){
			if(i < imgs.length) {
				imgBg.style.backgroundImage = `url(${imgs[i]})`;
				i++;
			}
			else {
				i = 0;
				imgBg.style.backgroundImage = `url(${imgs[i]})`;
				i++;
			}
	},3000);
}

changeImage()