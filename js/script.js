//SECTION Milestone 2 //

const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];
const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
];
const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
];

const itemsContainer = document.querySelector('.slider .items');
const sideBarContainer = document.querySelector('.slider .side-bar');

for (let i = 0; i < items.length; i++) {
    let classDivImage = '';
    if (i == 0) {
        classDivImage = 'first active';
    } else if (i == items.length - 1) { 
        classDivImage = 'last';
    }
    const tagDivImage = `
        <div class="item ${classDivImage}">
            <img src="${items[i]}" alt="">
            <div class ="text">
            <h3>${title[i]}</h3>
            <p>${text[i]}</p>
        </div>
    `;
    const tagDivImageThumb = `
        <div class="thumb ${classDivImage}">
             <img src="${items[i]}" alt="">
        </div>
    `;
    itemsContainer.innerHTML += tagDivImage;
    sideBarContainer.innerHTML += tagDivImageThumb;
}

//SECTION Milestone 3 // 

const buttonUp = document.querySelector('.slider .side-bar .up');
const buttonDown = document.querySelector('.slider .side-bar .down');

buttonDown.addEventListener('click',
    function () {
        const elementActive = document.querySelector('.slider .items .item.active');
        const sideBarActive = document.querySelector('.slider .side-bar .thumb.active');
        const listClasses = elementActive.classList;
        let last = false;

        for (let i = 0; i < listClasses.length; i++) {
            if (listClasses[i] == 'last') {
                last = true;
            }
        }
        let lastThumb = sideBarActive.classList.contains('last');

        if (last == false) { 
            elementActive.classList.remove('active');
            const elementDown = elementActive.nextElementSibling;
            elementDown.classList.add('active');
        }
        if (lastThumb == false) {
            sideBarActive.classList.remove('active');
            const thumbDown = sideBarActive.nextElementSibling;
            thumbDown.classList.add('active');
        }
    }
);

buttonUp.addEventListener('click',
    function () {
        const elementActive = document.querySelector('.slider .items .item.active');
        const sideBarActive = document.querySelector('.slider .side-bar .thumb.active');
        const listClasses = elementActive.classList;
        let first = false;
        for (let i = 0; i < listClasses.length; i++) {
            if (listClasses[i] == 'first') {
                first = true;
            }
        }
        let firstThumb = sideBarActive.classList.contains('first');

        if (first == false) {
            elementActive.classList.remove('active');
            const elementUp = elementActive.previousElementSibling;
            elementUp.classList.add('active');
        }
        if (firstThumb == false) {
            sideBarActive.classList.remove('active');
            const thumbUp = sideBarActive.previousElementSibling;
            thumbUp.classList.add('active');
        }
    }
);