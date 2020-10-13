function addTask(data) {
    let html = $("#list-tasks").html() + `
    <li class="list-group-item">
        <div class="row">
            <div class="col-1 d-flex">
                <input type="checkbox" class="form-control align-self-center">
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
                <button class="btn btn-danger align-self-center">&times;</button>
            </div>
        </div>
    </li>`;

    $("#list-tasks").html(html);
}

$(document).ready(function() {
    $("#form-task").submit(function(e) {
        e.preventDefault();

        let title = $("#title").val();
        let date = $("#date").val();
        let description = $("#description").val();

        let data = {
            title,
            date,
            description
        };

        addTask(data);
    });
});