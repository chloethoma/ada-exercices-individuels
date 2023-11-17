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


// Code Philippe
const fibo = (x) => {
    fiboArray = []
      if (x <= 0) {
        fiboArray.push(x)
        return 0;
      } else if (x === 1) {
        fiboArray.push(x)
        return 1;
      } else if(x >= 2) {
        const result = fibo(x - 1) + fibo(x - 2);
        fiboArray.push(result)
        return result
      }
    }
  let result = fibo(10)
  console.log("result:", result);
  console.log("fiboArray:", fiboArray);

  // Code ChatGPT
  function fibonacciArray(n, result = []) {
    if (n === 0) {
      result.push(0);
    } else if (n === 1) {
      result.push(0, 1);
    } else {
      result = fibonacciArray(n - 1, result);
      result.push(result[result.length - 1] + result[result.length - 2]);
    }
  
    return result;
  }
  
  // Exemple d'utilisation :
  const n = 8; // Remplacez 8 par le nombre d'éléments de la suite que vous souhaitez
  const fibArray = fibonacciArray(n);
  console.log(fibArray);
//   Cette fonction utilise un tableau result pour stocker les valeurs de la suite de Fibonacci au fur et à mesure. Elle ajoute la valeur actuelle comme la somme des deux valeurs précédentes. Vous pouvez ajuster la valeur de n pour obtenir une suite de Fibonacci de la longueur souhaitée.
  
  
  
  
  
  