const maxDaysinMonth = (day, month) => {
    if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
        if (day <= 31) {
            return true
        } else {
            return false
        }
    }
    else if (month === 4 || month === 6 || month === 9 || month === 11) {
        if (day <= 30) {
            return true
        } else {
            return false
        }
    } else {
        if (day <= 28) {
            return true
        } else {
            return false
        }
    }
}

// ETAPE 1
const isValidDate = (date) => {
    const stringArray = date.split("/", 3)
    const numberArray = stringArray.map(function (str) {
        return parseInt(str)
    })

    if (numberArray[2] <= 999 || numberArray[2] > 9999) {
        return false
    } else if (numberArray[1] > 12) {
        return false
    } else if (maxDaysinMonth(numberArray[0], numberArray[1]) === false) {
        return false
    } else {
        return true
    }
}

console.log("La date est-elle valide ? --> ", isValidDate("21/12/2024"))

// ETAPE 2 :
// Format date = "dd/mm/yyyy"
const isPalindrome = (date) => {
    array = date.split("")
    const palindrome = []

    if (isValidDate(date) === false) {
        return false
    }

    for (let i = 0; i < array.length; i++) {
        if (array[i] === "/") {
            array.splice(i, 1)
        }
    }

    for (let i = 0; i < array.length; i++) {
        if (array[i] === array[array.length - (i + 1)]) {
            palindrome.push("OK")
        } else {
            palindrome.push("NOK")
        }
    }

    if (palindrome.includes("NOK") === true) {
        return false
    } else {
        return true
    }
}
console.log("Est-ce un palindrome ? --> ", isPalindrome("11/02/2011"))


//ETAPE 3

const getNextPalindromes = (x) => {
    let today = new Date();
    const array = []
    i = 0
    while (i < x) {
        const dateString = today.toLocaleDateString("fr-FR");
        if (isPalindrome(dateString)) {
            array.push(dateString)
            i++
        }
        today.setDate(today.getDate() + 1);
    }
    return array
};
console.log(getNextPalindromes(8))








