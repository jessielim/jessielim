const list = document.getElementById('checkList');
var form = document.getElementById('formList');
var user_Input = document.getElementById('userInput');
var addButton = document.getElementById('addInputToList');
var checkedList = document.getElementById('checked');
var completedList = document.getElementById('completed');

addButton.onclick = function(event){
	event.preventDefault();
		if(user_Input.value == ""){
			alert('If you got nothing to enter then you got nothing to do.')
		}
		else{
			
			//create LI
			var bulletPoint = document.createElement('li');
			bulletPoint.innerHTML = user_Input.value;
			list.appendChild(bulletPoint);
			user_Input.value= "";


			//create checkbox
			const spanChecked = document.createElement('div');
			spanChecked.innerHTML = '&#10063;' //square
			spanChecked.className = "checked";
			bulletPoint.insertBefore(spanChecked, bulletPoint.childNodes[0]);
			
			spanChecked.onclick = function(){
				if (spanChecked.innerHTML == "Completed!"){
					spanChecked.innerHTML = '&#10063;';
					spanChecked.parentElement.style.textDecoration = 'none';
					spanChecked.parentElement.style.color = '#000000';
				}else {
					spanChecked.innerHTML = "Completed!"; //checked
					spanChecked.parentElement.style.textDecoration = 'line-through';
					spanChecked.parentElement.style.color = '#b2afaf';
				}
			}

			//create edit button
			var editList = document.createElement('span')
			editList.innerHTML += "+"
			editList.className = "edit"
			bulletPoint.appendChild(editList);

			editList.onclick = function(){
				//temp cont to store
				var input = prompt("Please enter the changes you want to make.","");
				var temp = document.createElement('span');
				temp = input;
				bulletPoint = this.parentElement
				bulletPoint.innerHTML = temp;

				const spanChecked = document.createElement('div');
				spanChecked.innerHTML = '&#10063;' //square
				spanChecked.className = "checked";
				bulletPoint.insertBefore(spanChecked, bulletPoint.childNodes[0]);

				spanChecked.onclick = function(){
					if (spanChecked.innerHTML == "Completed!"){
						spanChecked.innerHTML = '&#10063;';
						spanChecked.parentElement.style.textDecoration = 'none';
						spanChecked.parentElement.style.color = '#000000';
					}else {
						spanChecked.innerHTML = "Completed!"; //checked
						spanChecked.parentElement.style.textDecoration = 'line-through';
						spanChecked.parentElement.style.color = '#b2afaf';
					}
				}
				var editList = document.createElement('span')
				editList.innerHTML += "+"
				editList.className = "edit"
				bulletPoint.appendChild(editList);

				const spanClose = document.createElement('span');
				spanClose.innerHTML += "&times;"
				spanClose.className = "close";
				bulletPoint.appendChild(spanClose);

				spanClose.onclick = function(){
				spanClose.parentElement.style.display = 'none';
				}
			}
			
			//create delete button
			const spanClose = document.createElement('span');
			spanClose.innerHTML += "&times;"
			spanClose.className = "close";
			bulletPoint.appendChild(spanClose);
			

			spanClose.onclick = function(){
			spanClose.parentElement.style.display = 'none';
			}
		}
}