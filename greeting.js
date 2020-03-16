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
	saveName(currentValue);
}

function painting


function loadName(){
	const currentUser = localStorage.getItem();
}

function init() {
	loadName();
}
init();