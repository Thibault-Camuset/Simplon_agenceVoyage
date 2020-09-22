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



function loadJSON() {

    var xobj = new XMLHttpRequest();
    // xobj.overrideMimeType("application/json");
    xobj.open('GET', 'js/european_iatas_df1.json', true);
    xobj.onreadystatechange = function() {
        if (xobj.readyState == 4 && xobj.status == "200") {

            // .open will NOT return a value but simply returns undefined in async mode so use a callback
            //callback(xobj.responseText);
            
            json = JSON.parse(xobj.responseText);
            
        }
        }
        
       
    //airportsList();
    // xobj.send(null);

}
    
    loadJSON();
    console.log(json); 
    /*function airportsList(){
       
    
      for (x=0; x<json.length;x++){
          if(json[x].continent=='EU'){
              airportsEurope.push(json[x]);
          }
      }
      console.log(airportsEurope);
    }
      */
