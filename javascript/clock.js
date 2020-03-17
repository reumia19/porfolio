const clockContainer = document.querySelector(".js-clock")
clockTime = document.querySelector("h3");

function getTime(){
	const date = new Date();
	const minutes = date.getMinutes();
	const hours = date.getHours();
	const seconds = date.getSeconds();

	clockTime.innerText = `${
		hours < 10 ? `0${hours}` : hours
	}:${
		minutes < 10 ? `0${minutes}` : minutes
	}:${
		seconds < 10 ? `0${seconds}` : seconds
	}`;
	
	// console.dir(date);
}

function initClock(){
	getTime();	
	setInterval(getTime,1000);
}

initClock();
