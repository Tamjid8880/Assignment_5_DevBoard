document.querySelectorAll("#complete_btn").forEach(button => {
    button.addEventListener("click", function() {
        this.disabled = true;
        this.style.backgroundColor = "gray";
        this.style.cursor = "not-allowed";

        const task_count = document.getElementById("task_assigned");
        const task_completed = document.getElementById("completed_task");


        if (task_count && task_completed) {

            let assignedCount = parseInt(task_count.innerHTML) || 0;
            let completedCount = parseInt(task_completed.innerHTML) || 0;

            if (assignedCount > 0) {
                task_count.innerHTML = assignedCount - 1;
                task_completed.innerHTML = completedCount + 1;
            }

            if (assignedCount === 1) {
                alert("All tasks have been completed!");
            }
        }
    });
});