history.scrollRestoration = "manual";

window.onload = () => {
	let line = qs('.roadmap__line'),
		lineActive = qs('.roadmap__line span'),
		lastListItem = qs('.roadmap__cont li:last-child'),
		titles = qsa('.roadmap__cont h3'),
		scale = 0;

	line.style.height = (line.clientHeight - lastListItem.clientHeight) + 'px';
	let lineHeight = line.clientHeight;

	const raf = window.requestAnimationFrame ||
	    window.webkitRequestAnimationFrame ||
	    window.mozRequestAnimationFrame ||
	    window.oRequestAnimationFrame ||
	    window.msRequestAnimationFrame;

    (function step() {
    	scale = (rectBottom(line) - lineHeight - window.innerHeight/2) / -lineHeight;

    	if(inViewport(line)) {
    		lineActive.style.transform = `scale3d(1, ${scale}, 1)`;
    	}

    	titles.forEach((num)=>{
    		if(rectTop(num) <= 0) {
    			num.classList.add('active');
    		} else {
    			num.classList.remove('active');
    		}
    	})
    	
   		window.requestAnimationFrame(step);
    })();

	function rectBottom (el) {
		var rect = el.getBoundingClientRect();
		return rect.bottom;
	}
	function rectTop (el) {
		var rect = el.getBoundingClientRect();
		return rect.top - window.innerHeight/2 + rect.height/2;
	}
	function inViewport (el) {
		var rect = el.getBoundingClientRect();
		return rect.bottom >= 0 && rect.top - window.innerHeight <= 0;
	}
}


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

});

function qs (selector, searchIn) {
	return searchIn ? searchIn.querySelector(selector) : document.querySelector(selector)
}
function qsa (selector, searchIn) {
	return searchIn ? searchIn.querySelectorAll(selector) : document.querySelectorAll(selector)
}