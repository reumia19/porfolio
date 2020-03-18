const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");

const TODOS_LS ="toDos";
const toDos =[];

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
	delBtn.innerText ="delete";
	const span = document.createElement("span");
	const newId = toDos.length+1;

	span.innerText = text;
	li.id =newId;
	li.appendChild(span);
	li.appendChild(delBtn);
	toDoList.appendChild(li);

	const toDoObj{
		text : text,
		id : newId
	}
	todos.push(toDoObj);
}

function saveToDos(){
	localStorage.setItem(TODOS_LS,toDos);
}
