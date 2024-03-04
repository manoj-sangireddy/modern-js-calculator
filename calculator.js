let keys = document.querySelectorAll("#keyboard>div");

for (let i = 0; i < keys.length; i++) {
    keys[i].addEventListener("click", calculate);
}

let accumulator = "";
function calculate() {
    let targetKey = event.target.innerText;
    if (targetKey === "C") {
        accumulator = "";
        document.querySelector("#input").innerText = "";
    } else if (targetKey === "=") {
        document.querySelector("#input").innerText = eval(accumulator);
    } else {
        accumulator = accumulator + targetKey;
        document.querySelector("#input").innerText = accumulator;
    }
}