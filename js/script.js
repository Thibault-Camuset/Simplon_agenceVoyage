let pageContainer = document.getElementById('page-container');
let page2Container = document.getElementById('page2-container');
let button = document.getElementById('search-button');
let adult= document.getElementById('input-adulte')
let divAdult = document.getElementById('adult')

let adultValue;

button.addEventListener('click', ()=>{
    pageContainer.classList.add('hidden');
    page2Container.classList.remove('hidden');
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
