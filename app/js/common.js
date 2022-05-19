history.scrollRestoration = "manual";
document.addEventListener("DOMContentLoaded", function() {


	let scrollHeight = document.scrollingElement.scrollHeight - window.innerHeight,
	    currentScroll;
	window.onscroll = () => {
	    currentScroll = document.scrollingElement.scrollTop;
	    // console.log(Math.round(currentScroll / scrollHeight * 100))
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