const footerYear = document.querySelector('.footer__year')
const burgerBtn = document.querySelector('.burger-btn')
const nav = document.querySelector('.nav-mobile')
const allNavItems = nav.querySelectorAll('.nav__item')
// let section = document.querySelectorAll('section')
// let navLinks = document.querySelectorAll('.nav-desktop__item')

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

handleCurrentYear()

const showNav = () => {
	nav.classList.toggle('nav-mobile--active')
	burgerBtn.classList.toggle('burger-btn--active-btn')

	allNavItems.forEach(item => {
		item.addEventListener('click', () => {
			nav.classList.remove('nav-mobile--active')
			burgerBtn.classList.remove('burger-btn--active-btn')
		})
	})
}

// window.onscroll = () => {
// 	section.forEach(sec => {
// 		let top = window.scrollY
// 		let offset = sec.offsetTop - 300
// 		// let height = sec.offsetHeight
// 		let id = sec.getAttribute('id')

// 		if (top >= offset) {
// 			navLinks.forEach(link => {
// 				link.classList.remove('active')
// 				document.querySelector('.nav-desktop__item[href*=' + id + ']').classList.add('active')
// 			})
// 		}
// 	})
// }

// && top < offset + height

burgerBtn.addEventListener('click', showNav)
