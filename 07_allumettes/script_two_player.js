let numberMatch = 50
let player = 1
let gameTurn = 1

let matchRest = document.getElementById("matchRest")
matchRest.innerHTML = numberMatch

alert("Joueur 1 c'est à toi !")


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

                if(gameTurn < 2) {
                    gameTurn ++
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


