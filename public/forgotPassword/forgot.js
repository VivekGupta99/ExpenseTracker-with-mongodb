let forgotForm = document.querySelector("#forgotForm");

forgotForm.addEventListener("submit", forgot);

async function forgot(e) {
	e.preventDefault();
	try {
		let email = document.querySelector("#emailId").value;
		let res = await axios.post('/password/forgotpassword', { email });
		let successmessg = document.createElement("div");
		successmessg.classList = "success";
		successmessg.appendChild(document.createTextNode(res.data.message));
		setTimeout(() => successmessg.remove(), 4000);
		document.body.appendChild(successmessg);




	} catch (error) {
		console.log(error);
		let networkErr = document.createElement("div");
		networkErr.classList = "error";
		networkErr.appendChild(document.createTextNode(error.response.data.message));
		setTimeout(() => networkErr.remove(), 5000);
		document.body.appendChild(networkErr);
	}

}
