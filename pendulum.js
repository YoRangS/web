var colorList = ["#ff0000", "#ff8c00", "#ffff00", "#008000", "#0000ff", "#4b0082", "#800080"]

function createDIV() {
    

    var num = document.getElementById("num").value;
    obj = document.getElementById("wrap");
    for(var i=0; i<num; i++) {
        newDiv = document.createElement("div");
        newDiv.setAttribute("id", "box");
        newDiv.style.backgroundColor = colorList[i];
    }
}

function removeDiv() {
    
}