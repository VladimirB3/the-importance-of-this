$(document).ready(function() {
    $(".box").on("click", function() {
        var classNames = $(this).attr("class").split(" "); //this tells the machine to create class name combinations//
        $("." + classNames[1]).css("background-color", "red");
    });
})