// ETAPE 4 :
const isPalindrome = (text) => {
    array = text.split("")
    const palindrome = []
    
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
console.log("Est-ce un palindrome ? --> ", isPalindrome("ressasser"))