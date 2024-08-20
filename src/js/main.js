const footerYear = document.querySelector('.footer__year')
const burgerBtn = document.querySelector('.burger-btn')
const nav = document.querySelector('.nav-mobile')
const allNavItems = nav.querySelectorAll('.nav__item')

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

burgerBtn.addEventListener('click', showNav)
