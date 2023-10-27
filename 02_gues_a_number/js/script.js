let tentative = 1
let numberMin = 0
let numberMax = 50
let winNumber
let givenNumber

// Demande au joueur 1 le nombre à deviner
const defineNumber = () => {
    winNumber = parseInt(prompt("Joueur 1, donne moi un nombre à faire deviner entre 0 et 50."));
    
    while (winNumber < 0 || winNumber > 50) {
        winNumber = parseInt(prompt("Vous devez choisir un nombre entre 0 et 50 !"))
    }
}

// Demande au joueur 2 de retrouver le nombre
const askNumber = () => {
    givenNumber = parseInt(prompt(`Joueur 2, donne moi un nombre. \nIndice : ${numberMin} < ? < ${numberMax}. \nTentative numéro ${tentative}`))
    tentative += 1
    }

// Run le jeu en fonction du nombre proposé par le joueur 2
const didIWin = () => {
        if (givenNumber < winNumber) {
            if (givenNumber>numberMin) {
                alert ("Plus grand");
                numberMin = givenNumber
            } else {
                numberMin
                alert("Le nombre proposé n'est pas dans l'intervalle")
            }
            return false
        } 
        else if (givenNumber > winNumber) {
            if (givenNumber<numberMax) {
                alert ("Plus petit");
                numberMax = givenNumber
            } else {
                numberMax
                alert("Le nombre proposé n'est pas dans l'intervalle")
            }
            return false
        } else {
            alert ("Bravo, vous avez deviné le nombre !");
            return true
        }
}

// Game Play : demande le nombre au joueur 1, demande un nombre au joueur 2 une 1ère fois, puis boucle didIWin/askNumber tant que le nombre n'a pas été trouvé
const gamePlay = () => {
    defineNumber ()
    askNumber ()
    while (didIWin() === false) {
        askNumber()
    }
    alert ("Le jeu est terminé, salut !")
    }

// Il ne faut pas déclarer gamePlay() ici car il se déclare dans le fichier html
// gamePlay ()




