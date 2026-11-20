console.log("script JS initializing")

let boxes = document.querySelector(".container").children/* ye boxes ko select karne ke liye hai */
let startBtn = document.getElementById("startBtn")
let stopBtn = document.getElementById("stopBtn")

let intervalId = null; // Timer ki ID store karne ke liye khali variable

function getRandomColor() {
    let val1 = Math.ceil(0 + Math.random() * 255);
    let val2 = Math.ceil(0 + Math.random() * 255);
    let val3 = Math.ceil(0 + Math.random() * 255);
    return `rgb(${val1}, ${val2}, ${val3})`
}

function changeColors() {
    Array.from(boxes).forEach(e => {
        e.style.backgroundColor = getRandomColor()
        e.style.color = getRandomColor()
    })
}

// Start button dabane par
startBtn.addEventListener("click", () => {
    // Yeh check karta hai ki timer pehle se toh nahi chal raha
    if (intervalId === null) {
        changeColors() // Click karte hi turant ek baar color badle
        intervalId = setInterval(changeColors, 500) // Har 1 second mein badle
    }
})

// Stop button dabane par
stopBtn.addEventListener("click", () => {
    clearInterval(intervalId) // Chalte hue timer ko rok dega
    intervalId = null // Variable ko wapas khali kar dega taaki dubara start ho sake
})
