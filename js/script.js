let pageContainer = document.getElementById('page-container');
let page2Container = document.getElementById('page2-container');
let button = document.getElementById('search-button');
let adult= document.getElementById('input-adulte')
let divAdult = document.getElementById('adult')

let adultValue;
let enfant = document.getElementById('input-enfant');
let enfantParticipant = document.getElementById('participantEnfant');
let enfantValue;

let json=[];
let airportsEurope=[];
let arrayAirportsList;



button.addEventListener('click', ()=>{
    pageContainer.classList.add('hidden');
    page2Container.classList.remove('hidden');
    adultValue = adult.value;
    createAdultElement();
    enfantValue = enfant.value;
    createEnfantElement();
});



function createAdultElement(){

    for(x=0;x<adultValue;x++){

        let newAdult = document.createElement('div');
        newAdult.classList.add('adultElement')

        let AdultName= document.createElement('input');
        let AdultFirstName= document.createElement('input');
        let AdultButton= document.createElement('input')
        AdultName.type='text';
        AdultName.placeholder='Nom'
        AdultFirstName.type='text';
        AdultFirstName.placeholder='Prénom'
        AdultButton.type='radio';
        

        AdultName.classList.add('input','inputNameAdult');
        AdultFirstName.classList.add('input','inputFirstNameAdult');
        AdultButton.name='dirigeant';
        AdultButton.classList.add('radio-button');
        newAdult.appendChild(AdultName);
        newAdult.appendChild(AdultFirstName);
        newAdult.appendChild(AdultButton);
        divAdult.appendChild(newAdult);
        
    }
}


    




function createEnfantElement (){

    for(x=0; x<enfantValue; x++ ) {

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

function loadAirportsList() {

    let request = new XMLHttpRequest();

    request.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            showAirportsList(JSON.parse(this.responseText));
            arrayAirportsList.push(JSON.parse(this.responseText));
        }
    }
    request.open("GET", "https://api.duffel.com/air/airports", true);
    request.send();
}

function showAirportsList(airports) {
    console.log('full airports array');
    console.log(airports);
    airports.data.forEach(airport => {
        console.log('airport element');
        console.log(airport);
        if(airport.time_zone.toLowerCase().includes('europe')) {
            airportsEurope.push(airport);
        }
    })
}
console.log('europe airports array');
console.log(airportsEurope);








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