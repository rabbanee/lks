function category() {
	const products = document.querySelector('.products');
	const titleCate = document.querySelector('.title-category');

	const listCategory = document.querySelector('.list-category');
	const listProducts = document.querySelector('.list-products');
	const listBrands = document.querySelector('.list-brands')

	// when enter
	// titleCate.addEventListener('mouseenter', function() {
	// 	listCategory.style.display = 'block';
	// 	console.log('title terhover');

	titleCate.addEventListener('mouseenter', function() {
		listCategory.style.display = 'block';
	});

		listProducts.addEventListener('mouseenter', function() {
			products.style.display = 'block';
			console.log('listProducts terhover');
			products.addEventListener('mouseenter', function () {
				products.style.display = 'block';
				listCategory.style.display = 'block';
				console.log('products terhover');

			});
		});


	// });


}

function slider() {
	const rowSlider = document.querySelector('.slider');
	const sliders   = document.querySelectorAll('.row-slider .slider img');

	const prev = document.querySelector('#prev');
	const next = document.querySelector('#next');

	let counter = 0;
	const size = sliders[counter].clientWidth;
	counter++;
	rowSlider.style.transform = `translateX(${-size * counter}px)`;

		// console.log(slider.length);
	next.addEventListener('click', function() {
		if (counter > sliders.length - 2) return;
		rowSlider.style.transition = '.3s ease-out';
		counter++;
		rowSlider.style.transform = `translateX(${-size * counter}px)`;
	});

	prev.addEventListener('click', function() {
		if (counter <= 0) return;
		rowSlider.style.transition = '.3s ease-out';
		counter--;
		rowSlider.style.transform = `translateX(${-size * counter}px)`;
	});

	rowSlider.addEventListener('transitionend', function() {
		if (sliders[counter].id == 'lastClone') {
			rowSlider.style.transition = 'none';
			counter = sliders.length - 2;
			rowSlider.style.transform = `translateX(${-size * counter}px)`;
		}
		if (sliders[counter].id == 'firstClone') {
			rowSlider.style.transition = 'none';
			counter = sliders.length - 6;
			rowSlider.style.transform = `translateX(${-size * counter}px)`;
		}
	});

}

slider();
// category();

const listBrands = document.querySelector('.list-brands');

listBrands.addEventListener('mouseenter', function function_name() {
	var x = document.getElementsByClassName('brands');
	x.style.display = 'block';
})