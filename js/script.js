let pageContainer = document.getElementById('page-container');
let page2Container = document.getElementById('page2-container');
let button = document.getElementById('search-button');
let enfant = document.getElementById('input-enfant');
let enfantParticipant = document.getElementById('participantEnfant');
let enfantValue;

button.addEventListener('click', ()=>{
    pageContainer.classList.add('hidden');
    page2Container.classList.remove('hidden');
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

