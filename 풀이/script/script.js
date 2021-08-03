$(function () {
    // GNB 메뉴 blink (깜박임 효과) 시작
    setInterval(fnBlink, 550);
    function fnBlink(){
    $("#blinkStr").toggle();
    // GNB 메뉴 blink (깜박임 효과) 끝
}
});