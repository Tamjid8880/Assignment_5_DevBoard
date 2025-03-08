document.querySelectorAll("#complete_btn").forEach(button => {
    button.addEventListener("click", function() {

        alert("Board updated successfully!");
        const task_count = document.getElementById("task_assigned");
        const task_completed = document.getElementById("completed_task");
        const taskTitle = this.closest(".bg-white").querySelector("h2").innerText;


        const activity_log = document.getElementById("activity_log");


        const p = document.createElement("p");
        p.innerHTML = ` Task "${taskTitle}" has been completed at ${new Date().toLocaleString()}`;
        p.classList.add("text-black-200", "mt-2");


        activity_log.appendChild(p);

        const clear_history = document.getElementById("clear-history");
        clear_history.addEventListener("click", function() {

            p.innerHTML = "";
        });

    });
});

document.getElementById("date").innerHTML = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
});

const color_change = document.getElementById("color-change").addEventListener("click", function(event) {

    const bg_color = document.getElementById("bg-color");


    if (bg_color.style.backgroundColor === "lightblue") {
        bg_color.style.backgroundColor = "lightyellow";
    } else if (bg_color.style.backgroundColor === "lightyellow") {
        bg_color.style.backgroundColor = "lightsalmon";
    } else if (bg_color.style.backgroundColor === "lightgreen") {
        bg_color.style.backgroundColor = "lightcoral";
    } else if (bg_color.style.backgroundColor === "lightcoral") {
        bg_color.style.backgroundColor = "lightpink";
    } else {
        bg_color.style.backgroundColor = "lightblue";
    }
});