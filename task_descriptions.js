document.getElementById("task-2").style.display = "none";
document.getElementById("task-3").style.display = "none";

function task1() {
    document.getElementById("task-1").style.display = "block";
    document.getElementById("task-2").style.display = "none";
    document.getElementById("task-3").style.display = "none";
};

function task2() {
    document.getElementById("task-1").style.display = "none";
    document.getElementById("task-2").style.display = "block";
    document.getElementById("task-3").style.display = "none";
};

function task3() {
    document.getElementById("task-1").style.display = "none";
    document.getElementById("task-2").style.display = "none";
    document.getElementById("task-3").style.display = "block";
};