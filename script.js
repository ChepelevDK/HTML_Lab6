function start() {
    let value = document.getElementById("value");
    let inVal = parseInt(document.getElementById("inValue").value, 10);

    setInterval(function () {
        if (inVal !== -1) {
            value.innerText = inVal.toString();
            inVal--;
        }
    }, 1000);

    if (inVal === -1){
        value.innerText = "Время истекло!";
    }
}