const inputEl = document.getElementById("input-el")
const pushBtn = document.getElementById("push-btn")
const unshiftBtn = document.getElementById("unshift-btn")
const popBtn = document.getElementById("pop-btn")
const shiftBtn = document.getElementById("shift-btn")

myEmojis = []
let emojis = document.getElementById("emojis")

pushBtn.addEventListener("click", function() {
    myEmojis.push(inputEl.value)
    render()
})

unshiftBtn.addEventListener("click", function() {
    myEmojis.unshift(inputEl.value)
    render()
})

popBtn.addEventListener("click", function() {
    myEmojis.pop()
    render()
})

shiftBtn.addEventListener("click", function() {
    myEmojis.shift()
    render()
})

function render() {
    let input = ""
    for(i=0; i<myEmojis.length; i++){
        input += ` ${myEmojis[i]}`
    }
    emojis.textContent = input
    inputEl.value = ""
}

//👨‍💻⛷🍲