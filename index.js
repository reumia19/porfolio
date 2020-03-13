// alert('아니 아직 아무것도 안 만들었는데... 벌써 올 줄은 몰랐지.. 나중에 오세요');
const title =document.querySelector("#title");
const CLICKED_CLASS = "clicked";

function handleClick(){
	const currentClass=title.className;
	if (currentClass!==CLICKED_CLASS) {
		title.className=CLICKED_CLASS;
	}else{
		title.className="";
	}
}

function init(){
	title.addEventListener("click",handleClick);
}
init();
