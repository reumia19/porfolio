const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");

const TODOS_LS ="toDos";

function init(){
	loadToDoList();
	toDoForm.addEventListener("submit",handleSubmit);
}

init();

function loadToDoList(){
	const toDos = localStorage.getItem(TODOS_LS);


}

function handleSubmit(event){
	event.preventDefault();
	const currentValue = toDoInput.value;
	paintToDoList(currentValue);
	toDoInput.value = "";
}

function paintToDoList(text){
	const li = document.createElement("li");
	const delBtn = document.createElement("button");
	delBtn.value ="X";
	const span = document.createElement("span");

	span.innerText = text;
	li.appendChild(span);
	li.appendChild(delBtn);
	toDoList.appendChild(li);

}