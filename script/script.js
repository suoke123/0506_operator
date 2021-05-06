$(function(){

    $("button#goResult").click(function(){
        var number1 = $("#number1").val();
        var number2 = $("#number2").val();

        var result = parseInt(number1) % parseInt(number2);
        $("#addRes").text("result : " + result);
    });

});
