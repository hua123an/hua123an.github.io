/*获取class属性为nav的元素，让其加载header.html*/
$(function () {
    $(".topNav").load("/components/header.html");
})
//set can't open console
// Disable browser default right-click menu
document.oncontextmenu = function (event) {
    event.preventDefault()
}
// Forbid pressing F12
document.onkeydown = document.onkeyup = document.onkeypress = function (event) {
    const e = event || window.event || arguments.callee.caller.arguments[0]

    if (e && e.keyCode == 123) {
        e.returnValue = false
        return false
    }
}


