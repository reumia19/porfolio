const clockContainer = document.querySelector(".js-clock")
	clockTime = document.querySelector("h3");

function getTime(){
	const date = new Date();
	const minutes = date.getMinutes();
	const hours = date.getHours();
	const seconds = date.getSeconds();
	clockTime.innerText = `${hours}:${minutes}:${seconds}`;
	console.dir(date);
}

getTime();


