var mySwiper = new Swiper(".swiper-container", {
	// Optional parameters
	speed: 1000,
	loop: true,

	// If we need pagination
	pagination: {
		el: ".swiper-pagination",
	},

	// Navigation arrows
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	autoplay: {
		delay: 3000,
	},
})

setInterval(() => {
	Array.from(document.querySelectorAll(".faq-container")).forEach(e => {
		e.style.maxHeight = e.firstElementChild.offsetHeight + "px"
		// e.style.maxHeight ='100px'
	})
}, 0)

window.addEventListener("click", e => {
	if (e.target.classList.contains("layer")) {
		e.target.parentElement.nextElementSibling.classList.toggle("active-ans")
		e.target.parentElement.parentElement.classList.toggle("faq-active")
	}
})

document.getElementById("youtube-video").src = "https://www.youtube.com/embed/2KPvoRE8XZQ"
