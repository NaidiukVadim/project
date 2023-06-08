let page = document.querySelector('body');
let themeButton = document.querySelector('.theme-button');
let fontButton = document.querySelector('.font-button');
let chooseFont = document.querySelector('.choose-f');
let chooseSize = document.querySelector('.choose-s');
let sizeButton = document.querySelector('.size'); 
let color = document.querySelector('.chosen-color');
let bgTxt = document.querySelector('.ext')
const section = document.querySelector('.news-list');
const buttonCardViewTile = document.querySelector('.tile-view');
const buttonCardViewStandard = document.querySelector('.row-view');
let articles = document.querySelectorAll('.card');
let filter = document.querySelector('.catalog-filter');


themeButton.addEventListener('click', function() {
    page.classList.toggle('dark-theme');
});

fontButton.addEventListener('click', function() {
    page.classList.toggle('fonts');
    if (page.classList.contains('fonts')) {
        chooseFont.textContent = 'Вибрано: з засічками';
    } else {
        chooseFont.textContent = 'Вибрано: без засічок';
    }
});

sizeButton.addEventListener('click', function() {
    page.classList.toggle('medium');
    if (page.classList.contains('medium')) {
        chooseSize.textContent = 'Вибрано: більший';
    } else {
        chooseSize.textContent = 'Вибрано: менший';
    }
});

color.addEventListener('click', function() {
    page.style.backgroundColor = color.value;
});

bgTxt.addEventListener('click', function() {
    bgTxt.classList.toggle('size-bg');
    bgTxt.textContent = 'Виберіть нижче бажаний колір'
    if (bgTxt.classList.contains('size-bg')) {
        bgTxt.textContent = 'Виберіть нижче бажаний колір'
    } else {
        bgTxt.textContent = 'Змінити колір фону'
    }
})

const buttonCardViewTileHandler = () => {
    section.classList.remove('catalog-cards');
    section.classList.add('list-tiles-view');
    buttonCardViewTile.classList.add('view-checked');
    buttonCardViewStandard.classList.remove('view-checked');
};

const buttonCardViewStandartHandler = () => {
    section.classList.remove('list-tiles-view');
    section.classList.add('catalog-cards');
    buttonCardViewTile.classList.remove('view-checked');
    buttonCardViewStandard.classList.add('view-checked');
};

const init = () =>{
    buttonCardViewTile.addEventListener('click', buttonCardViewTileHandler);
    buttonCardViewStandard.addEventListener('click', buttonCardViewStandartHandler);
};
init();

filter.onchange = function(){
    for(let article of articles){
        if(article.dataset.category!==filter.value&&filter.value!=='all'){
            article.classList.add('hidden');
        }else{
            article.classList.remove('hidden');
        } 
    }
}