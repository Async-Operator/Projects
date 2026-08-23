const input = document.querySelector("input");
	const addbtn = document.querySelector(".add-btn");
	const todolist = document.querySelector(".todo-list");

	input.addEventListener('keydown', function (event) {
		if (event.key === 'Enter') {
			addbtn.click();
		}
	});

	addbtn.addEventListener("click" , function(dets){

		if (input.value.trim() === '') return;

		const todoItem = document.createElement('li');
		todoItem.classList.add('todo-item');

		const checkbox = document.createElement('input');
		checkbox.type = 'checkbox';

		const todoText = document.createElement('span');
		todoText.classList.add('todo-text');
		todoText.textContent = input.value;

		const deleteBtn = document.createElement('button');
		deleteBtn.classList.add('delete-btn');
		deleteBtn.textContent = 'Delete';

		todoItem.append(
			checkbox,
			todoText,
			deleteBtn
		);

		
		todolist.appendChild(todoItem);

		checkbox.addEventListener('change', function () {
			todoItem.classList.toggle('completed', checkbox.checked);
		});

		deleteBtn.addEventListener('click', function () {
			todoItem.remove();
		});
		
		// Clear input
		input.value = '';

		// Put cursor back in input
		input.focus();

	});