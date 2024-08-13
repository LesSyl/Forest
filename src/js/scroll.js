// const allNavItems = nav.querySelectorAll('.nav__item')
let section = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('.nav-desktop__item')

window.onscroll = () => {
	section.forEach(sec => {
		let top = window.scrollY
		let offset = sec.offsetTop - 300
		let height = sec.offsetHeight
		let id = sec.getAttribute('id')

		if (top >= offset && top < offset + height) {
			navLinks.forEach(link => {
				link.classList.remove('active')
				document.querySelector('.nav-desktop__item[href*=' + id + ']').classList.add('active')
			})
		}
	})
}


