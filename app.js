// Simple Todo app with localStorage persistence
actions.className = 'task-actions';


const del = document.createElement('button');
del.className = 'btn-icon';
del.title = 'Delete';
del.textContent = '🗑';
del.addEventListener('click', () => {
tasks.splice(idx,1);
saveTasks(tasks);
render();
});


actions.appendChild(del);


li.appendChild(checkbox);
li.appendChild(span);
li.appendChild(actions);


list.appendChild(li);
});
}


form.addEventListener('submit', (e) => {
e.preventDefault();
const text = input.value && input.value.trim();
if(!text) return;
const tasks = getTasks();
tasks.push({ text, done: false, created: Date.now() });
saveTasks(tasks);
input.value = '';
render();
});


clearDoneBtn.addEventListener('click', () => {
let tasks = getTasks();
tasks = tasks.filter(t => !t.done);
saveTasks(tasks);
render();
});


clearAllBtn.addEventListener('click', () => {
if(confirm('Clear all tasks?')){
saveTasks([]);
render();
}
});


// initial render
render();
