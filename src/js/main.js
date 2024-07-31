const footerYear = document.querySelector('.footer__year')
const email = document.querySelector('#email')
const username = document.querySelector('#username')
const textarea = document.querySelector('#msg')
const burgerBtn = document.querySelector('.burger-btn')
const nav = document.querySelector('.nav-mobile')
const allNavItems = nav.querySelectorAll('.nav__item')
const sendBtn = document.querySelector('.send-btn')
const error = document.querySelector('.error')
const popup = document.querySelector('.popup')
let section = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('.nav-desktop__item')

window.onscroll = () => {
	section.forEach(sec => {
		let top = window.scrollY
		let offset = sec.offsetTop - 300
		let height = sec.offsetHeight
		let id = sec.getAttribute('id')

		if (top >= offset && top < offset + height) {
			navLinks.forEach(links => {
				links.classList.remove('active')
				document.querySelector('.nav-desktop__item[href*=' + id + ']').classList.add('active')
			})
		}
	})
}

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

const showError = (input, msg) => {
	const formBox = input.parentElement
	const errorMsg = formBox.querySelector('.error')

	formBox.classList.add('error-text')
	errorMsg.textContent = msg
}

const clearError = input => {
	const formBox = input.parentElement
	formBox.classList.remove('error-text')
}

const checkForm = input => {
	input.forEach(el => {
		if (el.value === '') {
			showError(el, 'Wszystkie pola muszą być wypełnione')
		} else {
			clearError(el)
		}
	})
}

const checkMail = email => {
	const re =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

	if (re.test(email.value)) {
		clearError(email)
	} else {
		showError(email, 'E-mail jest niepoprawny')
	}
}

const checkErrors = () => {
	const allInputs = document.querySelectorAll('.contact__form-box')
	let errorCount = 0

	allInputs.forEach(el => {
		if (el.classList.contains('error-text')) {
			errorCount++
		}
	})
	if (errorCount === 0) {
		popup.style.display = 'flex'
	}
}

sendBtn.addEventListener('click', e => {
	e.preventDefault()

	checkForm([username, email, textarea])
	checkMail(email)
	checkErrors()
})

burgerBtn.addEventListener('click', showNav)
// window.addEventListener('scroll', handleObserver)
