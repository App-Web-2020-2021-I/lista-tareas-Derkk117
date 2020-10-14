function addTask(data) {
    let html = `
    <li class="list-group-item" id="${data.id}">
        <div class="row">
            <div class="col-1 d-flex">
                <input type="checkbox" class="form-control align-self-center" onchange="changeStatus(${data.id})">
            </div>
            <div class="col-10 row">
                <div class="col-9 h5">
                    ${data.title}
                </div>
                <div class="col-3">
                    <i class="text-right">${data.date}</i>
                </div>
                <div class="col-12 text-justify">
                    ${data.description}    
                </div>
            </div>
            <div class="col-1 d-flex">
                <button class="btn btn-danger align-self-center" onclick="deleteTask(${data.id})">&times;</button>
            </div>
        </div>
    </li>`;

    $("#list-tasks").prepend(html);
}

function showAlert(message) {
    $("#alert-form").text(message);
    $("#alert-form").show(500);
}

function deleteTask(id) {
    $("#" + id).hide(
        800
    );
}

function changeStatus(id) {
    $("#" + id).toggleClass("bg-success");
}

$(document).ready(function() {
    $("#alert-form").hide(0);
    $("#form-task").submit(function(e) {
        e.preventDefault();

        let title = $("#title").val();
        if (title.trim() === "") {
            showAlert("The title cannot be empty");
            return;
        }

        let date = $("#date").val();
        if (date === "") {
            showAlert("The date cannot be empty");
            return;
        }

        $("#alert-form").hide(500);
        let description = $("#description").val();

        let data = {
            title,
            date,
            description,
            id: Date.now(),
        };

        addTask(data);
        $("#title").val("");
        $("#date").val("");
        $("#description").val("");
    });
});