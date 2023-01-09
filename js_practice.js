function getA() {
    var numberA = document.getElementsByName("numberA");
    var numberA_checked;

    for (var i=0; i<numberA.length; i++) {
        if(numberA[i].checked) {
            numberA_checked = numberA[i].value;
        }
    }

    return numberA_checked;
}

function getB() {
    var numberB = document.getElementsByName("numberB");
    var numberB_checked;

    for (var i=0; i<numberB.length; i++) {
        if(numberB[i].checked) {
            numberB_checked = numberB[i].value;
        }
    }

    return numberB_checked;
}

function add() {
    var a = getA();
    var b = getB();
    var A = Number(a);
    var B = Number(b);
    window.alert(A+B)
}
function multiple() {
    var a = getA();
    var b = getB();
    window.alert(a*b)
}