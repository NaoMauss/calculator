
class Calculator {
    constructor(previousTextElement, currentTextElement){
        this.previousTextElement = previousTextElement
        this.currentTextElement = currentTextElement
        this.clear()
    }

    clear(){
        this.current = ''
        this.previous = ''
        this.operation = undefined
    }

    delete(){

    }

    appendNumber(number){
        if (number === '.' && this.current.includes('.'))
        return //check if the user already used a . if so return so that the user can't add another one
        this.current = this.current.toString() + number.toString()
    }

    chooseOperation(operation){
        this.operation = operation
        this.previous = this.current
        this.current = ''
    }

    compute(){

    }

    updateDisplay(){
        if (this.current === '') return
        this.currentTextElement.innerText = this.current
        this.previousTextElement.innerText = this.previous
    }
}




const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const deleteButton = document.querySelector('[data-delete]')
const equalsButton = document.querySelector('[data-equals]')
const acButton = document.querySelector('[data-all-clear]')
const previousTextElement = document.querySelector('[data-previous]')
const currentTextElement = document.querySelector('[data-current]')


const calculator = new Calculator(previousTextElement, currentTextElement)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})