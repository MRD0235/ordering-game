let ans1 = Math.floor(Math.random() * 10) 
let ans2 = Math.floor(Math.random() * 10)
let ans3 = Math.floor(Math.random() * 10)
let correctOrder = [`${ans1}`, `${ans2}`, `${ans3}`]
console.log(correctOrder)

const clearBtn = document.getElementById("clear")
const display = document.querySelectorAll(".selection")
clearBtn.addEventListener("click", () => {
    // optionBtns.forEach(button =>
    //     button.disabled = false
    // )
    display.forEach(box =>
        box.textContent = ""    
    )
    resultsText.textContent = ""
})

const resetBtn = document.getElementById("reset")
resetBtn.addEventListener("click", () => {
    // optionBtns.forEach(button =>
        // button.disabled = false
    // )
    display.forEach(box =>
        box.textContent = ""    
    )
    resultsText.textContent = ""
    const history = document.getElementById("previousInputs")
    removeAllChildNodes(history)
    history.innerHTML = "<h3>Guesses:</h3>"
    display.forEach(box => box.classList.remove("fullyCorrect"))
})

const optionBtns = document.querySelectorAll(".option")
const selectionOne = document.getElementById("choiceOne")
const selectionTwo = document.getElementById("choiceTwo")
const selectionThree = document.getElementById("choiceThree")
optionBtns.forEach(button => 
    button.addEventListener("click", () => {
        nextOpenBox = findOpenBox()
        nextOpenBox.textContent = button.id
        // button.disabled = true
    })    
)

const testBtn = document.getElementById("test")
const resultsText = document.getElementById("results")
const previousInputs = document.getElementById("previousInputs")
testBtn.addEventListener("click", () => {
    let userInput = [selectionOne.textContent, selectionTwo.textContent, selectionThree.textContent]
    for (let i = 0; i < correctOrder.length; i++) {     
        if (correctOrder[i] !== userInput[i]) {
            results = "Wrong!"
            for (let j = 0; j < correctOrder.length; j++) {if (correctOrder[j] === userInput[i]) {display[i].classList.add("partiallyCorrect")}}
        } else {
            results = `Correct! The code was ${correctOrder}.`
            display[i].classList.add("fullyCorrect")
        }
    }
    resultsText.textContent = results   
    let guessBoxes = document.getElementById("selections")   
    let guessBoxesClone = guessBoxes.cloneNode(true)
    previousInputs.appendChild(guessBoxesClone)
    optionBtns.forEach(button => button.disabled = false)
    display.forEach(box => box.textContent = "")
    for (let i = 0; i < correctOrder.length; i++) {
        display[i].classList.remove("fullyCorrect")
        display[i].classList.remove("partiallyCorrect")
    }
})

function findOpenBox() {
    if (selectionOne.textContent === "") {nextOpenBox = selectionOne}
    else if (selectionTwo.textContent === "") {nextOpenBox = selectionTwo}
    else {nextOpenBox = selectionThree}
    return nextOpenBox
}
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild)
    }
}
// function addDiv(input) {
//     const newDiv = document.createElement("div")
//     const previousInputDisplay = document.getElementById("previousInputs")
//     for (let i = 0; i < input.length; i++) {
//         newDiv.textContent += input[i]
//         if (i < 2) {newDiv.textContent += " - "}
//     }
//     previousInputDisplay.appendChild(newDiv)
// }

document.addEventListener("keydown", function(event) {
    // console.log(event.key)
    // console.log(Math.floor(event.key))
    if (Math.floor(event.key) >= 0) {
        nextOpenBox = findOpenBox()
        nextOpenBox.textContent = event.key
    } else if (event.key === "Backspace") {
        if (selectionTwo.textContent === "") {beforeOpenBox = selectionOne}
        else if (selectionThree.textContent === "") {beforeOpenBox = selectionTwo}
        else {beforeOpenBox = selectionThree}
        beforeOpenBox.textContent = ""
    } else if (event.key === "Enter") {
        {
            let userInput = [selectionOne.textContent, selectionTwo.textContent, selectionThree.textContent]
            for (let i = 0; i < correctOrder.length; i++) {     
                if (correctOrder[i] !== userInput[i]) {
                    results = "Wrong!"
                    for (let j = 0; j < correctOrder.length; j++) {if (correctOrder[j] === userInput[i]) {display[i].classList.add("partiallyCorrect")}}
                } else {
                    results = `Correct! The code was ${correctOrder}.`
                    display[i].classList.add("fullyCorrect")
                }
            }
            resultsText.textContent = results   
            let guessBoxes = document.getElementById("selections")   
            let guessBoxesClone = guessBoxes.cloneNode(true)
            previousInputs.appendChild(guessBoxesClone)
            optionBtns.forEach(button => button.disabled = false)
            display.forEach(box => box.textContent = "")
            for (let i = 0; i < correctOrder.length; i++) {
                display[i].classList.remove("fullyCorrect")
                display[i].classList.remove("partiallyCorrect")
            }
        }
    } else if (event.key === "Escape") {
        {
            // optionBtns.forEach(button =>
            //     button.disabled = false
            // )
            display.forEach(box =>
                box.textContent = ""    
            )
            resultsText.textContent = ""
            const history = document.getElementById("previousInputs")
            removeAllChildNodes(history)
            history.innerHTML = "<h3>Guesses:</h3>"
            display.forEach(box => box.classList.remove("fullyCorrect"))
        }
    }
})