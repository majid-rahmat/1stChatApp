const socket = io();
document.addEventListener("DOMContentLoaded", function(event){
	alert("hello friend");
	const form = document.getElementsByTagName("form")[0];
	const messageList = document.getElementById("message_list");
	form.addEventListener("submit", (event) => {
		event.preventDefault();
		let chatInput = document.getElementById("chat_input").value;
		let elem = document.createElement("li");
		elem.className = "message";
		let message = document.createTextNode(chatInput);
		elem.textContent = chatInput;
		messageList.prepend(elem);
	});
});
