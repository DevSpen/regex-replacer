function replaceThis() {
	let reg = document.getElementById("regex").value

	if (String(reg).startsWith("/") == true && String(reg).endsWith("/") == true) {
		reg = reg.slice(1).slice(0, -1)
	}

	const replacer = document.getElementById("replace").value
	const text = document.getElementById("text").value
	const flags = document.getElementById("flags").value
	const regex = new RegExp(reg, flags)
	const output = text.replace(regex, replacer)

	if (reg == "" || text == "") {
		alert("Properties 'regex' and 'text' are required.")
	} else {
		const resultDiv = document.getElementById("new")
		const result = document.createElement("p")
		resultDiv.appendChild(result)
		result.innerHTML = "<strong>Result</strong> <br/>" + "<code>" + output + "</code>"
	}
}