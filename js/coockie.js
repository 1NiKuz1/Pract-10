export function recordCookies(form) {
	for (let elem of form.elements) {
		if (elem.tagName == 'INPUT' && elem.type != 'reset' && elem.type != 'submit')
			document.cookie = encodeURIComponent(elem.name) + '=' + encodeURIComponent(elem.value);
	}
	console.log(document.cookie)
}

export function getCookie(name) {
	let matches = document.cookie.match(new RegExp(
		"(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
	));
	return matches ? decodeURIComponent(matches[1]) : undefined;
}