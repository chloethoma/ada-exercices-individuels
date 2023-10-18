function askname () {
    const nomUtilisateur = prompt("Quel est votre nom ?")
    document.body.innerHTML += `<h2>Bonjour ${nomUtilisateur}</h2>`
}

function askBirthYear () {
    const anneeNaissance = prompt("Quel est votre annee de naissance ?")
    const moisNaissance = prompt("Quel est votre mois de naissance (de 1 a 12)?")
    const d = new Date()
    let year = d.getFullYear()
    let month = d.getMonth()
    let ageUtilisateur

    if (month+1 < moisNaissance) {
    ageUtilisateur = year - anneeNaissance - 1
} else {
    ageUtilisateur = year - anneeNaissance
}
document.body.innerHTML += `<h3>Vous avez ${ageUtilisateur} ans</h3>`
}
askname()
askBirthYear()


