function onEntry(animatedList) {
	animatedList.forEach(item => {
		if (item.isIntersecting) {
		 	item.target.classList.add('show');
	  	}
	});
}

let ioServer = new IntersectionObserver(onEntry, { threshold: [0.7] });
let animated = document.querySelectorAll('.animated');

export const animateOnScroll = () => {
	for (let item of animated) {
		ioServer.observe(item);
	}
}


