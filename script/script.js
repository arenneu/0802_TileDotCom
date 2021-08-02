setInterval (fnShow,1000);
function fnShow(){
$(function(){
    $("#mainMenu li:last-child span").show(function(){
        $(this).css({"visibility":"hidden"});
    });
    $("#mainMenu li:last-child span").hide(function(){
        $(this).css({"visibility":"visible"});
    });
});
}