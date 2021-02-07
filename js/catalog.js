const years = document.querySelectorAll('.year-list__years');
const painterLists = document.querySelectorAll('.year-list__painters');
const painterButtons = document.querySelectorAll('.year-list__link');
const painterName = document.querySelector('.painter__name');
const painterYears = document.querySelector('.painter__years');
const painterDescription = document.querySelector('.painter__description');
const painterImg = document.querySelector('.painter__img');
const countryButtons = document.querySelectorAll('.country__item');
const countryLists = document.querySelectorAll('.year-list');

let toggleList = function(year, painterList) {
    year.addEventListener('click', function() {
        for(let i = 0; i < years.length; i++) {
            if(years[i] !== year) {
                years[i].classList.remove('year-list__years_active');
                painterLists[i].classList.add('hidden');
            }
        }
        year.classList.toggle('year-list__years_active');
        painterList.classList.toggle('hidden');
    })
}

for(let i = 0; i < years.length; i++) {
    toggleList(years[i], painterLists[i]);           
}

let clickPainter = function(painter, painters) {
    painter.addEventListener('click', function(evt) {
        evt.preventDefault();
        painterButtons.forEach(function(elem) {
            elem.classList.remove('year-list__link_active');
        });
        painter.classList.add('year-list__link_active');
        painterName.textContent = painter.dataset.name;
        painterYears.textContent = painter.dataset.years;
        painterDescription.textContent = painter.dataset.description;
        painterImg.src = painter.dataset.img;
    })
}

for (let i = 0; i < painterButtons.length; i++) {
    clickPainter(painterButtons[i]);            
}

let clickCountry = function(country, list) {
    country.addEventListener('click', function() {
        painterLists.forEach(function(elem) {
            elem.classList.add('hidden');
        });
        years.forEach(function(elem) {
            elem.classList.remove('year-list__years_active');
        });
        countryButtons.forEach(function(elem) {
            elem.classList.remove('country__item_active');
        });
        countryLists.forEach(function(elem) {
            elem.classList.add('hidden');
        });
        country.classList.add('country__item_active');
        list.classList.remove('hidden');
        let firstPainterList = list.querySelector('.year-list__painters');
        let firstPainterYears = list.querySelector('.year-list__years');
        firstPainterList.classList.remove('hidden');
        firstPainterYears.classList.add('year-list__years_active');       
    })
}

for(let i = 0; i < countryButtons.length; i++) {
    clickCountry(countryButtons[i], countryLists[i]);           
}