function displayTime() {
    var timeTop = $("#current-moment")
    timeTop.text(moment().format("MMM DD, YYYY [at] hh:mm:ss"))
}

$(function () {
    var skillNames = [
        'Bootstrap',
        'C',
        'C++',
        'CSS',
        'Express.js',
        'Git',
        'HTML',
        'Java',
        'JavaScript',
        'jQuery',
        'JSON',
        'MySQL',
        'Node.js',
        'NoSQL',
        'PHP',
        'Python',
        'React',
        'Ruby',
    ];




    $(document).on("click", ".custom-btn", function (event) {
        event.preventDefault()
        var projName = $("#project-name-input").val()
        var projType = $("#project-type-input").val()
        var hourlyWage = $("#hourly-wage").val()
        var dueDate = $("#due-date").val()
        $("#project-name-input").val("")
        $("#project-type-input").val("")
        $("#hourly-wage").val("")
        $("#due-date").val("")
        printProject(projName, projType, hourlyWage, dueDate)
    })
    function daysTill(projDue) {
        console.log(moment(projDue))
        console.log(moment(projDue).dayOfYear())
        console.log(moment(projDue).dayOfYear() - moment().dayOfYear())
        return (moment(projDue).dayOfYear() - moment().dayOfYear())
    }
    function projRev(projDue, wage) {
        return (daysTill(projDue) * 8 * wage)
    }
    function printProject(pname, ptype, hwage, date) {
        var tableRow = $("<tr>")
        var nameTd = $("<td>").text(pname)
        var typeTd = $("<td>").text(ptype)
        var wageTd = $("<td>").text(hwage)
        var dateTd = $("<td>").text(date)
        var daysTillTd = $("<td>").text(daysTill(date))
        var revTd = $("<td>").text(projRev(date, hwage))
        var removeBtn = $("<td>").text("X")
        removeBtn.attr("id", "delete-project")
        tableRow.append(nameTd, typeTd, wageTd, dateTd, daysTillTd, revTd, removeBtn)
        $("#project-table").append(tableRow)
    }
    $(document).on("click", "#delete-project", function (event) {
        var btnClicked = $(event.target)
        btnClicked.parent("tr").remove()
    })
    $('#project-type-input').autocomplete({
        source: skillNames,
    });
})

setInterval(displayTime, 1000);