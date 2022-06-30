$(function (){
    $(document).on("click", ".custom-btn", function(event){
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
    function printProject(pname, ptype, hwage, date){
        var tableRow = $("<tr>")
        var nameTd = $("<td>").text(pname)
        var typeTd = $("<td>").text(ptype)
        var wageTd = $("<td>").text(hwage)
        var dateTd = $("<td>").text(date)
        tableRow.append(nameTd, typeTd, wageTd, dateTd)
        $("thead").append(tableRow)
    }
})