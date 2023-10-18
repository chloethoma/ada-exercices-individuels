// ## Étape 3

// - Désormais la fonction `didIWin()` devra retourner `true` si l’utilisateur·rice a trouvé le chiffre, sinon `false`.
// - Dans la fonction `gamePlay()`, si `didIWin()` a retourné `true`, on arrête le jeu. En revanche, si elle a retourné `false`, on redemande un chiffre à l’utilisateur·rice.

// const WinNumber = 22

// const askNumber = () => {
//     const give = prompt ("Donne moi un nombre !");
//     givenNumber = parseInt(give)
// }

// let didIWin = () => {
//         if (givenNumber < WinNumber) {
//             alert ("Plus grand");
//             return false
//         } 
//         else if (givenNumber > WinNumber) {
//             alert ("Plus petit");
//             return false
//         } else {
//             alert ("Bravo, vous avez deviné le nombre !");
//             return true
//         }
// }

// let gamePlay = () => {
//     askNumber ()
//     while (didIWin(givenNumber) === false) {
//         askNumber()
//     }
//     alert ("Le jeu est terminé, salut !")
//     }

// gamePlay ()

// ## Étape 4 : À deux c'est mieux !

// Maintenant, imaginons qu'il y ait deux joueurs 🧑‍🤝‍🧑.

// - Crée une fonction qui demande au joueur 1 de fournir un nombre à deviner compris entre 0 et 50.
// - Le joueur 2 va essayer de le deviner.
// - La fonction `didIWin()` doit prendre désormais un second paramètre : le nombre à deviner.
// - Reprend la logique des étapes 1, 2 et 3 pour gérer la partie et indiquer au joueur 2 s’il doit continuer à jouer ou s’il a gagné.

// const defineNumber = () => {
//     const enterWinNumber = prompt ("Joueur 1, donne moi un nombre à faire deviner entre 0 et 50");
//     winNumber = parseInt(enterWinNumber)
// }

// const askNumber = () => {
//     const giveAnswer = prompt ("Joueur 2, donne moi un nombre entre 0 et 50 !");
//     givenNumber = parseInt(giveAnswer)
// }

// let didIWin = () => {
//         if (givenNumber < winNumber) {
//             alert ("Plus grand");
//             return false
//         } 
//         else if (givenNumber > winNumber) {
//             alert ("Plus petit");
//             return false
//         } else {
//             alert ("Bravo, vous avez deviné le nombre !");
//             return true
//         }
// }

// let gamePlay = () => {
//     defineNumber ()
//     askNumber ()
//     while (didIWin(givenNumber, winNumber) === false) {
//         askNumber()
//     }
//     alert ("Le jeu est terminé, salut !")
//     }

// gamePlay ()

// ## Étape 5 : Donnons des indices

// - Afficher l'intervalle (0-50) auquelle notre utilisateur·rice à le droit autour du champ. Quelque chose comme 0 < ? < 50.
// - Si l’utilisateur·rice a gagné nous effacerons tout pour afficher notre message de Bravo !
// - En revanche, tant que l’utilisateur·rice n’a pas trouvé la bonne réponse, on affichera le nombre de tentatives en cours sur la partie.
// - (Avec du HTML) Ajoute un champ `<input>` qui permet à l’utilisateur·rice de rentrer sa proposition de nombre directement dans un champ sur la page et un bouton pour valider.

const defineNumber = () => {
    let enterWinNumber = prompt ("Joueur 1, donne moi un nombre à faire deviner entre 0 et 50");
    winNumber = parseInt(enterWinNumber)

    while (winNumber < 0 || winNumber > 50) {
        enterWinNumber = prompt ("Vous devez choisir un nombre entre 0 et 50")
        winNumber = parseInt(enterWinNumber)
    }
}

const askNumber = () => {
    const giveAnswer = prompt ("Joueur 2, donne moi un nombre entre 0 et 50 !");
    givenNumber = parseInt(giveAnswer)
}

let didIWin = () => {
        if (givenNumber < winNumber) {
            alert ("Plus grand");
            return false
        } 
        else if (givenNumber > winNumber) {
            alert ("Plus petit");
            return false
        } else {
            alert ("Bravo, vous avez deviné le nombre !");
            return true
        }
}

let gamePlay = () => {
    defineNumber ()
    askNumber ()
    while (didIWin() === false) {
        askNumber()
    }
    alert ("Le jeu est terminé, salut !")
    }

gamePlay ()


