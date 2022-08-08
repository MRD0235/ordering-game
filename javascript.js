// TO DO LIST
//      Add way to track how many of each number are in the answer
//      so that it displays the correct amount of yellows for how
//      many of each number there are

//      Change formatting so when it says if you're right or wrong
//      with the guess it doesn't mess with the height of the
//      div that has the results listed. Maybe just remove it and
//      somehow include a better way to alert the results of each
//      guess. Maybe just alert if it is completely correct


let ans1 = Math.floor(Math.random() * 10) 
let ans2 = Math.floor(Math.random() * 10)
let ans3 = Math.floor(Math.random() * 10)
let correctOrder = [`${ans1}`, `${ans2}`, `${ans3}`]
console.log(correctOrder)

const clearBtn = document.getElementById("clear")
const display = document.querySelectorAll(".selection")
clearBtn.addEventListener("click", () => {
    display.forEach(box =>
        box.textContent = ""    
    )
    resultsText.textContent = ""
})

const resetBtn = document.getElementById("reset")
resetBtn.addEventListener("click", () => {
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
    })    
)

const testBtn = document.getElementById("test")
const resultsText = document.getElementById("results")
const previousInputs = document.getElementById("previousInputs")
testBtn.addEventListener("click", () => {
    let userInput = [selectionOne.textContent, selectionTwo.textContent, selectionThree.textContent]
    for (let i = 0; i < correctOrder.length; i++) {
        if (correctOrder[i] !== userInput[i]) {
            for (let j = 0; j < correctOrder.length; j++) {
                if (correctOrder[j] === userInput[i]) {
                    display[i].classList.add("partiallyCorrect")
                }
            }
        } else if (correctOrder[i] === userInput[i]) {
            display[i].classList.add("fullyCorrect")
        }
    }
    let guessBoxes = document.getElementById("selections")   
    let guessBoxesClone = guessBoxes.cloneNode(true)
    previousInputs.appendChild(guessBoxesClone)
    optionBtns.forEach(button => button.disabled = false)
    display.forEach(box => {
        box.textContent = ""
        box.classList.remove("fullyCorrect")
        box.classList.remove("partiallyCorrect")
    })
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

document.addEventListener("keydown", function(event) {
    if (Math.floor(event.key) >= 0) {
        nextOpenBox = findOpenBox()
        nextOpenBox.textContent = event.key
    } else if (event.key === "Backspace") {
        if (selectionTwo.textContent === "") {beforeOpenBox = selectionOne}
        else if (selectionThree.textContent === "") {beforeOpenBox = selectionTwo}
        else {beforeOpenBox = selectionThree}
        beforeOpenBox.textContent = ""
    } else if (event.key === "Enter") {
        let userInput = [selectionOne.textContent, selectionTwo.textContent, selectionThree.textContent]
        for (let i = 0; i < correctOrder.length; i++) {
            if (correctOrder[i] !== userInput[i]) {
                for (let j = 0; j < correctOrder.length; j++) {
                    if (correctOrder[j] === userInput[i]) {
                        display[i].classList.add("partiallyCorrect")
                    }
                }
            } else if (correctOrder[i] === userInput[i]) {
                display[i].classList.add("fullyCorrect")
            }
        }
        let guessBoxes = document.getElementById("selections")   
        let guessBoxesClone = guessBoxes.cloneNode(true)
        previousInputs.appendChild(guessBoxesClone)
        optionBtns.forEach(button => button.disabled = false)
        display.forEach(box => {
            box.textContent = ""
            box.classList.remove("fullyCorrect")
            box.classList.remove("partiallyCorrect")
        })
    } else if (event.key === "Escape") {
            display.forEach(box =>
                box.textContent = ""    
            )
            resultsText.textContent = ""
            const history = document.getElementById("previousInputs")
            removeAllChildNodes(history)
            history.innerHTML = "<h3>Guesses:</h3>"
            display.forEach(box => box.classList.remove("fullyCorrect"))
    }
})