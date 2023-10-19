document.addEventListener('DOMContentLoaded', function() {
    const tasksForm = document.getElementById('tasks__form');
    const tasksList = document.getElementById('tasks__list');
    const taskInput = document.getElementById('task__input');

    tasksForm.addEventListener('submit', function(event) {
        event.preventDefault();

        if (!taskInput.value.trim()) {
            return;
        }

        const newTask = document.createElement('div');
        newTask.classList.add('task');

        const taskTitle = document.createElement('div');
        taskTitle.classList.add('task__title');
        taskTitle.textContent = taskInput.value;

        const taskRemove = document.createElement('a');
        taskRemove.classList.add('task__remove');
        taskRemove.innerHTML = '&times;';
        taskRemove.href = '#';

        newTask.append(taskTitle);
        newTask.append(taskRemove);
        tasksList.append(newTask);
        taskInput.value = '';

        taskRemove.addEventListener('click', function(event) {
            event.preventDefault();
            newTask.remove();
        });
    });
});