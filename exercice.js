/**********exercice 1******** */

let x = 9;
let y = 18;

if (x > y) {
    console.log("x=" + x + " est plus grand que y=" + y)
} else {
    console.log("y=" + y + " est plus grand que x=" + x)
}

/**********exercice 2******** */

let newDog = "Chihuahua"
console.log("La variable newDog est composé de " + newDog.length + " caractère")
console.log("La variable newDog en majuscule est : " + newDog.toUpperCase())
console.log("La variable newDog en minuscule est : " + newDog.toLowerCase())

if (newDog == "Chihuahua") {
    console.log("J'\adore les chihuahuas, c'est ma race de chien préférée")
} else {
    console.log("Je m'en fous, je préfère les chats")
}

/**********exercice 3******** */

let nbre = prompt("Entrez le nomre");
let verif = nbre % 2
if (verif == 0) {
    console.log("Le nombre saisi est pair");
} else {
    console.log("Le nombre saisi est impair");
}


/**********exercice 4******** */
/**
  Correcteur: Yannick GOUGUIA 
  Merci de revoir ce code. 
  les conditions ne sont les bien faites,
  les accolades ne sont pas fermés 
  j'ai des erreurs a l'execution
    
*/
const users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];
//const users = ["Lea123", "Princess45"];
if (users.length == 0) {
    console.log("personne n'est en ligne")
} else
    if (users.length == 1) {
        console.log(users[0] + " are online")
    } else
        if (users.length == 2) {
            console.log(users[0] + " and " + users[1] + " are online")
        } else
            if (users.length > 2) {
                let UserLess = users;
                let UsersMore = users.slice(2);
                console.log(UserLess[0] + "," + UserLess[1] + " and  " + UsersMore.length + " are online")
            }



