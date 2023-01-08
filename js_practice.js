function getA() {
    var numberA_length = document.getElementsByName("numberA").length;
    var numberA;

    for (var i=0; i<numberA_length; i++) {
        if(document.getElementsByName("numberA")[i].checked == true) {
            numberA = document.getElementsByName("numberA")[i].value;
        }
    }

    return numberA;
}

function getB() {
    var numberB_length = document.getElementsByName("numberB").length;
    var numberB;
    
    for (var i=0; i<numberB_length; i++) {
        if(document.getElementsByName("numberB")[i].checked == true) {
            numberB = document.getElementsByName("numberB")[i].value;
        }
    }

    return numberB;
}

var a = getA();
var b = getB();

function add(a, b) {
    var A = Number(a);
    var B = Number(b);
    window.alert(A+B)
}
function multiple(a, b) {
    window.alert(a*b)
}