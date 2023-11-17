const latinToMorse = {
	'A': '.-',
	'B': '-...',
	'C': '-.-.',
	'D': '-..',
	'E': '.',
	'F': '..-.',
	'G': '--.',
	'H': '....',
	'I': '..',
	'J': '.---',
	'K': '-.-',
	'L': '.-..',
	'M': '--',
	'N': '-.',
	'O': '---',
	'P': '.--.',
	'Q': '--.-',
	'R': '.-.',
	'S': '...',
	'T': '-',
	'U': '..-',
	'V': '...-',
	'W': '.--',
	'X': '-..-',
	'Y': '-.--',
	'Z': '--..'
}

const morseToLatin = {
	'-': "T",
	'--': "M",
	'---': "O",
	'--.': "G",
	'--.-': "Q",
	'--..': "Z",
	'-.': "N",
	'-.-': "K",
	'-.--': "Y",
	'-.-.': "C",
	'-..': "D",
	'-..-': "X",
	'-...': "B",
	'.': "E",
	'.-': "A",
	'.--': "W",
	'.---': "J",
	'.--.': "P",
	'.-.': "R",
	'.-..': "L",
	'..': "I",
	'..-': "U",
	'..-.': "F",
	'...': "S",
	'...-': "V",
	'....': "H"
}


const getLatinCharacterList = (text) => {
	let newObject = text.toUpperCase()
	newObject = newObject.split("")
	return newObject
}
// console.log("Je crée un objet : " + getLatinCharacterList("Coucou comment ça va"))

const translateLatinCharacter = (char) => {
	const morseChar = latinToMorse[char]
	return morseChar
}
// console.log("Je translate une lettre A : " + translateLatinCharacter("A"))

const encode = (text) => {
	text = document.getElementById("frenchTextInput").value
	const latinCharArray = getLatinCharacterList(text)
	const morseCharArray = []

	for (let i = 0; i < latinCharArray.length; i++) {
		if (latinCharArray[i] === " ") {
			morseCharArray.push(" ")
		} else {
			morseCharArray.push(translateLatinCharacter(latinCharArray[i]))
		}
	}
	return morseCharArray
}

const getMorseCharacterList = (text) => {
	let morseCharacterList = text.split(" ")
	return morseCharacterList
}

const translateMorseCharacter = (char) => {
	const latinChar = morseToLatin[char]
	return latinChar
}

const decode = (text) => {
	text = document.getElementById("moreTextInput").value
	const morseCharArray = getMorseCharacterList(text)
	const latinCharArray = []

	for (let i = 0; i < morseCharArray.length; i++) {
		if (morseCharArray[i] === "/") {
			latinCharArray.push(" ")
		} else {
			latinCharArray.push(translateMorseCharacter(morseCharArray[i]))
		}
	}
	return latinCharArray
}
// console.log(decode("-.-. --- ..- -.-. --- ..- / -.-. --- -- -- . -. - / -.-. .- / ...- .-"))

//Insertion encode et decode dans ma page HTML

const MorseTraductionInHTML = () => {
	let section = document.getElementById("morseTraduction")
	let htmlEncode = `<p>${encode()}</p>`
	section.innerHTML = htmlEncode
}

const FrenchTraductionInHTML = () => {
	let section = document.getElementById("frenchTraduction")
	let htmlEncode = `<p>${decode()}</p>`
	section.innerHTML = htmlEncode
}











