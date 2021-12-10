function start() {
    let value = document.getElementById("value");
    let inVal = parseInt(document.getElementById("inValue").value, 10);

    value.innerText = inVal.toString();

    let timer = setInterval(function () {
        inVal--;
        value.innerText = inVal.toString();
        if (inVal < 0) {
            clearInterval(timer);
            value.innerText = "Время истекло!";
        }
    }, 1000);
}