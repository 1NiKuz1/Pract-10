export function validate(form) {
	let errors = document.querySelectorAll('.error')
	if (errors != null) {
		errors.forEach(el => el.remove())
	}

	let flag = true;

	if (!form.Name.validity.valid) {
		showError(form.Name, 'Какое необычное имя')
		flag = false
	}

	if (!form.Surname.validity.valid) {
		showError(form.Surname, 'Какая необычная фамилия')
		flag = false
	}

	if (!form.Age.validity.valid) {
		showError(form.Age, 'Мы с таким возрастом не принимаяем')
		flag = false
	}

	if (!form.Email.validity.valid) {
		showError(form.Email, 'Не думаю что такой email существует')
		flag = false
	}

	if (!form.Password.validity.valid) {
		showError(form.Password, 'Придумайте что-нибудь получше')
		flag = false
	}

	if (form.Password.value != form.RepeatPassword.value) {
		showError(form.RepeatPassword, "Пароль не совпадает, напиши еще раз")
		flag = false
	}
	return flag
}

function showError(elem, text) {
	let span = document.createElement('span')
	span.textContent = text
	span.className = "error"
	elem.before(span)
}