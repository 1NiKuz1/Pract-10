import {
	recordCookies
} from './coockie.js'
import {
	validate
} from './validateForm.js'

document.addEventListener('DOMContentLoaded', function () {

	const form = document.forms.FirstForm;

	form.onsubmit = function (event) {
		event.preventDefault()

		if (!validate(form))
			return;

		recordCookies(form)
		console.log(document.cookie)
		window.location.href = './form.html'
	}

})