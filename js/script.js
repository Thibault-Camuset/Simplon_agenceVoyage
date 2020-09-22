let pageContainer = document.getElementById('page-container');
let page2Container = document.getElementById('page2-container');
let button = document.getElementById('search-button');
<<<<<<< HEAD
let adult= document.getElementById('input-adulte')
let divAdult = document.getElementById('adult')

let adultValue;
=======
let enfant = document.getElementById('input-enfant');
let enfantParticipant = document.getElementById('participantEnfant');
let enfantValue;
>>>>>>> e9ef0c2f010c4e31906060ef8e58454fe907f66a

button.addEventListener('click', ()=>{
    pageContainer.classList.add('hidden');
    page2Container.classList.remove('hidden');
<<<<<<< HEAD
    adultValue = adult.value;
    createAdultElement();
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
        newAdult.appendChild(AdultName);
        newAdult.appendChild(AdultFirstName);
        newAdult.appendChild(AdultButton);
        divAdult.appendChild(newAdult);
        
    }
}
=======
    enfantValue = enfant.value;
    createEnfantElement();
});

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

>>>>>>> e9ef0c2f010c4e31906060ef8e58454fe907f66a
