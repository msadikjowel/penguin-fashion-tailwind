
var a = document.getElementsByClassName('beta');

for (var i = 0; i < a.length; i++) {
    (function (index) {
        a[index].addEventListener("click", function () {
            alert('This function still on beta testing.')
        })
    })(i);
}