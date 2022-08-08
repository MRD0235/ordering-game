const clearBtn = document.getElementById("clear")
const display = document.querySelectorAll(".selection")
clearBtn.addEventListener("click", () => {
    optionBtns.forEach(button =>
        button.disabled = false
    )
    display.forEach(box =>
        box.textContent = ""    
    )
    resultsText.textContent = ""
})

const resetBtn = document.getElementById("reset")
resetBtn.addEventListener("click", () => {
    optionBtns.forEach(button =>
        button.disabled = false
    )
    display.forEach(box =>
        box.textContent = ""    
    )
    resultsText.textContent = ""
    const history = document.getElementById("previousInputs")
    removeAllChildNodes(history)
    history.textContent = "Guesses:"
    display.forEach(box => box.classList.remove("fullyCorrect"))
})

const optionBtns = document.querySelectorAll(".option")
const selectionOne = document.getElementById("choiceOne")
const selectionTwo = document.getElementById("choiceTwo")
const selectionThree = document.getElementById("choiceThree")
optionBtns.forEach(button => 
    button.addEventListener("click", () => {
        if (selectionOne.textContent === "") {
            nextOpenBox = selectionOne
        } else if (selectionTwo.textContent === "") {
            nextOpenBox = selectionTwo
        } else {
            nextOpenBox = selectionThree
        }
        button.disabled = true
        nextOpenBox.textContent = button.id
    })    
)

const correctOrder = ["1", "3", "2"]
const testBtn = document.getElementById("test")
const resultsText = document.getElementById("results")
const previousInputs = document.getElementById("previousInputs")
testBtn.addEventListener("click", () => {
    let userInput = [selectionOne.textContent, selectionTwo.textContent, selectionThree.textContent]
    for (let i = 0; i < correctOrder.length; i++) {
        // display a color while the    
        
        
        
        
        
        if (correctOrder[i] !== userInput[i]) {
            results = "Wrong!"
            addDiv(userInput)
            display.forEach(box => box.textContent = "")
            break
        } else {
            results = `Correct! The code was ${correctOrder}.`
            display[i].classList.add("fullyCorrect")
        }
    }
    resultsText.textContent = results   
    optionBtns.forEach(button => button.disabled = false)
})

function addDiv(input) {
    const newDiv = document.createElement("div")
    const previousInputDisplay = document.getElementById("previousInputs")
    for (let i = 0; i < input.length; i++) {
        newDiv.textContent += input[i]
        if (i < 2) {newDiv.textContent += " - "}
    }
    previousInputDisplay.appendChild(newDiv)
}
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild)
    }
}