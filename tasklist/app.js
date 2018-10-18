window.addEventListener("load", function () {
    const taskList = document.getElementById("list");
    const taskInput = document.getElementById("task");
    const submitBtn = document.getElementById("submit");

    taskInput.addEventListener("keydown", function (event) {
        if (event.which == 13) {
            addTask();
        }
    });

    task.style.color = "red";
    // task.remove

    submitBtn.addEventListener("click", addTask);

    function addTask() {

        const text = taskInput.value;

        if (text) {
            const task = document.createElement("div");
            task.classList.add("task");
            task.textContent = "New task added";
            taskList.appendChild(task);

            const check = new Image();
            check.src = "check.jpg";
            check.width = 32;
            taskList.appendChild(check);

            // click event on the check image
            // when the user clicks
            // remove the task
            // remove button
        }
    }

    function removeTask() {

        const text = taskInput.value;

        if (text) {
            const task = document.createElement("div");
            task.classList.remove("task");
            task.textContent = "task delete";
            taskList.appendChild(task);

            const remove = new Image();
            remove.src = "delete.png";
            remove.width = 32;
            taskList.appendChild(check);

        }

    }
});
