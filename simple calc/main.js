var btn = document.querySelectorAll(".btn");
var inp = document.querySelector(".calc_inp");
function btnFunc(value) {
    inp.value += value;
}
function addFunc() {
    inp.value = eval(inp.value);
}
function delFunc() {
    inp.value = inp.value.toString().slice(0, -1);
}
for (var i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function (e) {
        var text = e.target.textContent || '';
        try {
            switch (text) {
                case "=":
                    return addFunc();
                case "C":
                    return inp.value = '';
                case "del":
                    return delFunc();
                default:
                    return btnFunc(text);
            }
        }
        catch (error) {
            return inp.value = "Nan";
        }
    });
}
