const addTaskButton = document.getElementById("addTask");
const addTaskDisplay = document.getElementById("animatedWannaBe");
const nameInput = document.getElementById("name");
const descriptionInput = document.getElementById("description");
const dateInput = document.getElementById("date");

addTaskButton.onclick = function () {
    if (nameInput.value.trim() !== ''
        && descriptionInput.value.trim() !== ''
        && dateInput.value !== '') {
        addTaskDisplay.style.display = "block";
        addTaskDisplay.textContent = "Task added";
    } else
        addTaskDisplay.style.display = "none";
}

addTaskDisplay.onclick = function () {
    addTaskDisplay.style.display = "none";
}