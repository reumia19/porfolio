const form = document.querySelector(".js-form");
const input = document.querySelector("input");
const greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser";
const SHOWING_CH = "showing";


function saveName(text){
	localStorage.setItem(USER_LS,text);
}

function handleSubmit(event){
	const currentValue = input.value;
	paintingGreeting(currentValue);
	saveName(currentValue);
}

function askForName(){
	form.classList.add(SHOWING_CH);
	form.addEventListener("submit",handleSubmit);
}

function paintingGreeting(text){
	form.classList.remove(SHOWING_CH);
	greeting.classList.add(SHOWING_CH);
	greeting.innerText = `Hello ${text}`
}

function loadName(){
	const currentUser = localStorage.getItem(USER_LS);
	if (currentUser === null) {
		askForName();
	} else{
		paintingGreeting(currentUser);
	}
}

function init() {
	loadName();
}
init();