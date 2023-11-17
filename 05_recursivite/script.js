const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const sum1 = (array) => {
    let result = 0
    for (let i=0; i<array.length; i++) {
        result += array[i]
    }
    return result
}
// console.log(sum1(numberArray))

const sum2 = (Number, lastNumber) => {
    if (Number >= lastNumber) {
        return Number
    } else {
        return Number + sum2 (Number+1, lastNumber)
    }
}
console.log("sum2 1 à 10 =", sum2(numberArray[0], numberArray[numberArray.length-1]))

const factorial = (x) => {
    if (x <= 1) {
        return x
    } 
    return x * factorial(x-1)
}
console.log("factorial 4 =", factorial(4))

const fibonacci = (x) => {
    if (x <=1) {
        return x
    }
    return x = fibonacci(x-1) + fibonacci(x-2)
}
console.log("Fibonacci 10 =", fibonacci(10))  
  
  