import {
	recordCookies,
	getCookie
} from './coockie.js'
import {
	validate
} from './validateForm.js'

document.addEventListener('DOMContentLoaded', function () {

	const form = document.forms.PersForm;

	for (let elem of form.elements) {
		if (elem.tagName == 'INPUT' && elem.type != 'reset' && elem.type != 'submit')
			elem.value = getCookie(elem.name);
	}

	form.onsubmit = function (event) {
		event.preventDefault();

		if (!validate(form))
			return;

		recordCookies(form)
		console.log(document.cookie)
		window.location.href = './form.html'
	}


})