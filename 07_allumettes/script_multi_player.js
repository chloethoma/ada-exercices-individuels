let numberMatch = 50
let player = 1
let gameTurn = 1

let matchRest = document.getElementById("matchRest")
matchRest.innerHTML = numberMatch

const totalPlayer = prompt("Entrez le nombre de joueurs")

// Création gameBoard dans le DOM
const createGameBoard = (player) => {
    const gameBoard = document.getElementById("gameBoard")
    
    for (let i = 1; i <= player; i++) {
        const playerDiv = document.createElement("div")
        playerDiv.id = `player${i}`
        playerDiv.innerHTML = `
        <label>Joueur ${i} :</label>
        <input type="number" id="numberMatch${i}" placeholder="Enlevez 1 à 6 allumettes"/>
        <button type="button" onclick="removeMatch(${i})">OK !</button>`
        gameBoard.appendChild(playerDiv)
    }
}
createGameBoard(totalPlayer)


// GamePlay
const removeMatch = (player) => {
    if (player !== gameTurn) {
        alert(`Ce n'est pas ton tour, c'est au joueur ${gameTurn} de jouer.`)
    } else {
        let x = document.getElementById(`numberMatch${player}`).value

        // Pas plus de 6 allumettes à la fois !
        if (x > 6) {
            alert("Vous ne pouvez pas retirer plus de 6 allumettes d'un coup !")
        } else if (numberMatch - x >= 0) {
            numberMatch -= x
            matchRest.innerHTML = numberMatch

            if (gameTurn < totalPlayer) {
                gameTurn++
            } else {
                gameTurn = 1
            }

        } else {
            alert(`Vous ne pouvez pas enlever autant d'allumettes, il n'en reste plus que ${numberMatch}`)
        }

        // Fin de jeu
        if (numberMatch <= 0) {
            matchRest.innerHTML = `Bravo joueur ${player}, tu as gagné !`
        }
    }
}

