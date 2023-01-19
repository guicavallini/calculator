const addCharacter = ( character ) => {
    const display = document.querySelector(".display").value
    document.querySelector(".display").value = display + character
}

const clearAll = () => document.querySelector(".display").value = ""

const calculate = () => {
    const display = document.querySelector(".display").value
    document.querySelector(".display").value = eval(display)
}

const invertNumber = () => {
    const display = document.querySelector(".display").value
    document.querySelector(".display").value = display * -1
}
