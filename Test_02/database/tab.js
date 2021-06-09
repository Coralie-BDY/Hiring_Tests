const tab = require("./top-500-most-rented-movies.json")

//Essai de récupération des valeurs du JSON pour créer la BDD
const map = tab.map((item, index) =>{
    console.log(index, item.titre, item.annee)
})
console.log(map)
