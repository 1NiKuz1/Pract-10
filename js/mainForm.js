import {
	getCookie
} from './coockie.js'
import {
	data
} from './data.js'

document.addEventListener('DOMContentLoaded', function () {
	//Метод загрузки данных для элементов интерфейса
	function loadData() {
		let group = document.querySelector('input[name="group"]:checked').value

		document.getElementById('ButtonAddSubject').innerHTML = `Добавить предмет для группы ${data[group].name}`
		document.getElementById('ButtonAddStudent').innerHTML = `Добавить студента в группу ${data[group].name}`

		let ListSubjects = document.forms.SecondForm.ListSubjects
		ListSubjects.options.length = 0
		data[group].subjects.forEach(elem => ListSubjects.append(new Option(elem)))

		let ListStudents = document.forms.SecondForm.ListStudents
		ListStudents.options.length = 0
		data[group].students.forEach(elem => ListStudents.append(new Option(elem)))

		let user = getCookie("Name")
		if (user != null) {
			document.getElementById('User').innerHTML = `Вы вошли как: ${user}`
		} else {
			document.getElementById('User').innerHTML = `Вы вошли как: Гость`
		}
	}

	//Метод добавление предмета или группы
	function addEntryForGroup(type, entry) {
		let group = document.querySelector('input[name="group"]:checked').value
		switch (type) {
			case 0:
				data[group].subjects.push(entry)
				break;
			case 1:
				data[group].students.push(entry)
				break;
		}
		loadData()
	}

	//Метод блокировки кнопки для выставления оценок
	function disabledButton() {
		if (document.forms.SecondForm.ListSubjects.selectedIndex != -1 &&
			document.forms.SecondForm.ListStudents.selectedIndex != -1 &&
			document.forms.SecondForm.ListMarks.selectedIndex != -1) {
			document.getElementById('SetMark').disabled = false;
		} else {
			document.getElementById('SetMark').disabled = true;
		}
	}

	document.getElementById('SetMark').onclick = function (e) {
		e.preventDefault()
		let group = document.querySelector('input[name="group"]:checked').value
		alert(`Группа: ${data[group].name}\nПредмет: ${document.forms.SecondForm.ListSubjects.value}\nСтудент: ${document.forms.SecondForm.ListStudents.value}\nОценка: ${document.forms.SecondForm.ListMarks.value}`)
		document.getElementById('SetMark').disabled = true;
	}

	document.getElementById('ButtonAddSubject').onclick = function (event) {
		event.preventDefault()
		let entry = document.getElementById('AddSubject').value
		if (entry != '')
			addEntryForGroup(0, entry)
	}

	document.getElementById('ButtonAddStudent').onclick = function (event) {
		event.preventDefault()
		let entry = document.getElementById('AddStudent').value
		if (entry != '')
			addEntryForGroup(1, entry)
	}

	document.querySelector('.form-mark .container .row').onclick = function (e) {
		let target = e.target
		if (target.tagName == "INPUT") {
			loadData()
			disabledButton()
		}
		if (target.tagName == "OPTION") {
			disabledButton()
		}
	}

	let OpenClouseAddFielDset = document.getElementById('OpenClouseAddFielDset')
	OpenClouseAddFielDset.onchange = function () {
		if (OpenClouseAddFielDset.checked) {
			document.forms.SecondForm.children.FormAdd.style.display = "none"
		} else {
			document.forms.SecondForm.elements.FormAdd.style.display = "block"
		}
	}

	loadData()
})