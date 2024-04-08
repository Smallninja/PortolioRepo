let arr = [];

function update() {
    document.getElementById("output").innerHTML = "";
    const output = arr.reduce((acc, item, index) => {
        return acc + (index + 1) + ". " + item + "<br>";
    }, "");
    document.getElementById("output").innerHTML = output;
}

function pushItem() {
    const input = document.getElementById("input").value;
    arr.push(input);
    update();
}

function popItem() {
    arr.pop();
    update();
}

function shiftItem() {
    arr.shift();
    update();
}

function unshiftItem() {
    const input = document.getElementById("input").value;
    arr.unshift(input);
    update();
}

function arrMap() {
    const input = document.getElementById("input").value;
    arr = arr.map(item => input + item);
    update();
}