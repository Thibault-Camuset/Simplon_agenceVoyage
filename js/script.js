let pageContainer = document.getElementById('page-container');
let page2Container = document.getElementById('page2-container');
let button = document.getElementById('search-button');

button.addEventListener('click', ()=>{
    pageContainer.classList.add('hidden');
    page2Container.classList.remove('hidden');
});