let pageContainer = document.getElementById('page-container');
let page2Container = document.getElementById('page2-container');
let button = document.getElementById('search-button');
let adult = document.getElementById('input-adulte')
let divAdult = document.getElementById('adult')

let adultValue;
let enfant = document.getElementById('input-enfant');
let enfantParticipant = document.getElementById('participantEnfant');
let enfantValue;

let json = [];
let airportsEurope = [];
let arrayAirportsList;




button.addEventListener('click', () => {
    pageContainer.classList.add('hidden');
    page2Container.classList.remove('hidden');
    adultValue = adult.value;
    createAdultElement();
    enfantValue = enfant.value;
    createEnfantElement();
});



function createAdultElement() {

    for (x = 0; x < adultValue; x++) {

        let newAdult = document.createElement('div');
        newAdult.classList.add('adultElement')

        let AdultName = document.createElement('input');
        let AdultFirstName = document.createElement('input');
        let AdultButton = document.createElement('input')
        AdultName.type = 'text';
        AdultName.placeholder = 'Nom'
        AdultFirstName.type = 'text';
        AdultFirstName.placeholder = 'Prénom'
        AdultButton.type = 'radio';


        AdultName.classList.add('input', 'inputNameAdult');
        AdultFirstName.classList.add('input', 'inputFirstNameAdult');
        AdultButton.name = 'dirigeant';
        AdultButton.classList.add('radio-button');
        newAdult.appendChild(AdultName);
        newAdult.appendChild(AdultFirstName);
        newAdult.appendChild(AdultButton);
        divAdult.appendChild(newAdult);

    }
}







function createEnfantElement() {

    for (x = 0; x < enfantValue; x++) {

        let newEnfant = document.createElement('div');
        newEnfant.classList.add('enfantElement');

        let enfantName = document.createElement('input');
        enfantName.type = 'text';
        enfantName.placeholder = "Nom";
        let enfantFirstName = document.createElement('input');
        enfantFirstName.type = 'text';
        enfantFirstName.placeholder = "Prénom";
        let enfantAge = document.createElement('input');
        enfantAge.type = 'date';

        enfantName.classList.add('input', 'inputEnfantName');
        enfantFirstName.classList.add('input', 'inputFirstName');
        enfantAge.classList.add('input', 'inputEnfantAge');

        newEnfant.appendChild(enfantName);
        newEnfant.appendChild(enfantFirstName);
        newEnfant.appendChild(enfantAge);
        enfantParticipant.appendChild(newEnfant);
    }
}





// function loadJSON () {
//     let request = new XMLHttpRequest();
//     request.onreadystatechange = function() {
//         if (this.readyState == 4 && this.status == 200) {

//             json = JSON.parse(this.responseText);

//             airportsList();
//         }  
//     }
//     request.open("GET", "../js/airports.json", true);
//     request.send();
// }



loadAirportsList();

airportsList = [];

function loadAirportsList() {

    let request = new XMLHttpRequest();
    request.open("GET", "https://raw.githubusercontent.com/dace/Airports-Countries-JSON/master/airports_countries.json", true);
    request.send();

    request.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            showCountryList(JSON.parse(this.responseText));
            airportsList.push(JSON.parse(this.responseText));
        }
    }
}

let countryList = [];

function showCountryList(resultatRequete) {
    resultatRequete.forEach(object => {
        if (!countryList.includes(object.countryName)) {
            countryList.push(object.countryName);
        }
    })
    createCountrySelect(countryList);
}



// Variables pour récupérer les selects en HTML
let departList = document.getElementById('depart-list');
let arrivalList = document.getElementById('arrival-list');

// Fonction qui va afficher la liste des pays et des aéroports dans les deux select
function createCountrySelect(list) {
    // Pour CHAQUE PAYS on crée un élément "option" dans le select des pays. Et on lui ajoute un écouteur
    list.forEach(country => {
        const countryElement = document.createElement('option');
        countryElement.innerHTML = country;
        departList.appendChild(countryElement);
        // L'écouteur permettra de vérifier quel pays est cliqué, et vérifie le tableau des aéroports pour afficher CHAQUE aéroports du pays cliqué, et crée les 
        // options dans le deuxième select
        countryElement.addEventListener('click', () => {
            // On réinitialise l'affichage du second select, sinon, chaque clic sur un pays gardera la liste affichée, et on veux la changer pour chaque pays.
            arrivalList.innerHTML = "<option selected>Aéroports Disponibles</option>";
            for (i = 0; i < airportsList[0].length; i++) {
                // on vérifie pour chaque objet si le nom du pays correspond à celui qu'on a cliqué, pour ensuite crée les éléments et les afficher
                if (airportsList[0][i].countryName.includes(country)) {
                    const airportElement = document.createElement('option');
                    airportElement.innerHTML = airportsList[0][i].airportName;
                    arrivalList.appendChild(airportElement);
                }
            }
        })
    })
}






    // console.log(json);


    // function airportsList(){


    //   for (x=0; x<json.length;x++){
    //       if(json[x].continent=='EU'){
    //           airportsEurope.push(json[x]);
    //       }
    //   }
    //   console.log(airportsEurope);
    // }

    // loadJSON();
