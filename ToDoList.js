let tasks = [];

function addTask(task) {
    tasks.push(task);
    console.log(`Task added: "${task}"`);
}

function showTasks() {
    console.log("\nYour To-Do List:");

    if (tasks.length === 0) {
        console.log("No tasks available.");
        return;
    }

    tasks.forEach((task, index) => {
        console.log(`${index + 1}. ${task}`);
    });
}

function removeTask(taskNumber) {
    if (taskNumber > 0 && taskNumber <= tasks.length) {
        let removedTask = tasks.splice(taskNumber - 1, 1);
        console.log(`Task removed: "${removedTask[0]}"`);
    } else {
        console.log("Invalid task number.");
    }
}

// Adding tasks
addTask("Learn JavaScript");
addTask("Practice Git");
addTask("Build a project");

// Display tasks
showTasks();

// Remove a task
removeTask(2);

// Display updated list
showTasks();