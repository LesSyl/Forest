const email = document.querySelector('#email')
const username = document.querySelector('#username')
const textarea = document.querySelector('#msg')
const sendBtn = document.querySelector('.send-btn')
const error = document.querySelector('.error')
const popup = document.querySelector('.popup')


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
	e.preventDefault();

	checkForm([username, email, textarea]);
	checkMail(email)
	checkErrors()
})
