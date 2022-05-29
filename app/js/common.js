history.scrollRestoration = "manual";
document.addEventListener("DOMContentLoaded", function() {


	let scrollHeight = document.scrollingElement.scrollHeight - window.innerHeight,
	    currentScroll;
	let showScroll = qs('.js-scroll');
	window.onscroll = () => {
	    currentScroll = document.scrollingElement.scrollTop;
		currentScroll = Math.round(currentScroll / scrollHeight * 100);
	    showScroll.innerHTML = (currentScroll < 10 ? '0' : '') + currentScroll + '%';
	}

	
	let questions = qsa('.faq__question');

	questions.forEach(el => {
		el.onclick = (e) => {
			let answer = el.nextElementSibling;
			if(el.classList.contains('active')) {
				el.classList.remove('active');
				answer.style.height = '0px';
			} else {
				el.classList.add('active');
				answer.style.height = answer.scrollHeight + 'px';
			}
		};
	})


	function qs (selector, searchIn) {
		return searchIn ? searchIn.querySelector(selector) : document.querySelector(selector)
	}
	function qsa (selector, searchIn) {
		return searchIn ? searchIn.querySelectorAll(selector) : document.querySelectorAll(selector)
	}
});