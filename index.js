// opt is a map of the game
// true = available
// false = taken
let opt = new Map();
let counter = 1;
const COUNTER_TEXT = "Potential sips: ";

// start button
function startgame() {
    for (let i = 1; i <= 10; i++) {
        opt.set(i, true);
    }
    document.getElementById("counter").innerText = COUNTER_TEXT + counter;

    const num = getValidNumber();
    document.getElementById("display").innerText = num;
}

// Func giv et random tal
function randomNumber() {
    let key = Math.random() * (opt.size - 1) + 1;
    return Math.round(key);
}

// Gets a key and checks if it is true, then sets it to false
function getValidNumber() {
    if (!tjek()) return;
    let key = randomNumber();
    while (!opt.get(key)) {
        key = randomNumber();
    }
    opt.set(key, false);
    console.log(opt)
    return key;
}

// Func knap til over
function higher() {
    const nextnumber = getValidNumber()
    if (nextnumber == null) return alert("The deck is empty!");
    const currentnumber = parseInt(document.getElementById("display").innerText);
    if (currentnumber < nextnumber) {
        counter++;
    } else {
        alert("DRINK " + counter);
        counter = 1;
    }
    document.getElementById("counter").innerText = COUNTER_TEXT + counter;
    document.getElementById("display").innerText = nextnumber;
    console.log(nextnumber);
}

// Func knap til under
function lower() {
    const nextnumber = getValidNumber()
    if (nextnumber == null) return alert("The deck is empty!");
    const currentnumber = parseInt(document.getElementById("display").innerText);
    if (currentnumber > nextnumber) {
        counter++;
    } else {
        alert("DRINK " + counter);
        counter = 1;
    }
    document.getElementById("counter").innerText = COUNTER_TEXT + counter;
    document.getElementById("display").innerText = nextnumber;
    console.log(nextnumber);
}

// Func knap restart game (tømmer listen)

// tjek om der er flere tal
function tjek() {
    for (let i = 0, len = opt.size; i < len; i++) {
        if (opt.get(i+1)) return true;
    }
    return false;
}