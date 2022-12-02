function loginAlert() {
	let mail = document.getElementById("email").value;
	let pass = document.getElementById("password").value;

	if (mail == "admin@admin.com" && pass == "123456") {
		alert("Login Successful!");
	} else {
		alert("Incorrect Email or Password!");
	}
}
