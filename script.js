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
		const b = document.createElement("strong");
		const br = document.createElement("br");

		b.innerText = "Result";
		result.innerText = output;

		resultDiv.appendChild(b);
		resultDiv.appendChild(br);
		resultDiv.appendChild(result);
	}
}
