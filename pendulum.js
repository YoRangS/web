let colorList = ["#ff0000", "#ff8c00", "#ffff00", "#008000", "#0000ff", "#4b0082", "#800080", "black"];
let animationDuration = [
    "5.7445626465380286598506114682189s",
    "5.5317266743757323860013645690577s",
    "5.3385391260156556054057619827979s",
    "5.1575187832910507006596867191327s",
    "4.9799598391954929499343882667129s",
    "4.8166378315169181920512964121514s",
    "4.6690470119715008069830062139453s",
    "4.527692569068708313286904083492s"];
let idArray = ["red", "orange", "yellow", "green", "blue", "indigo", "puple", "black"];

function createDIV() {
    removeDiv();

    let num = document.getElementById("num").value;
    let obj = document.getElementById("wrap");
    for(let i=0; i<num; i++) {
        newDiv = document.createElement("div");
        //newDiv.innerHTML = "a";
        newDiv.setAttribute("class", "block");
        newDiv.setAttribute("id", idArray[i]);
        newDiv.style.backgroundColor = colorList[i];
        newDiv.style.animationDuration = animationDuration[i];
        obj.appendChild(newDiv);
    }
}

function removeDiv() {
    let block = document.getElementById("wrap");
    let cnt = block.childElementCount;
    //window.alert(cnt);
    for(let i=0;i<cnt;i++) {
        block.removeChild(block.lastChild);
    }
}