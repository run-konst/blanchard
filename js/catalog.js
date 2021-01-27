const years = document.querySelectorAll('.year-list__years');
const painterLists = document.querySelectorAll('.year-list__painters');
const painterButtons = document.querySelectorAll('.year-list__link');
const painterName = document.querySelector('.painter__name');
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

let clickPainter = function(painter) {
    painter.addEventListener('click', function(evt) {
        evt.preventDefault();
        painterButtons.forEach(function(elem) {
            elem.classList.remove('year-list__link_active');
        });
        painter.classList.add('year-list__link_active');
        painterName.textContent = painter.textContent;
    })
}

for(let i = 0; i < painterButtons.length; i++) {
    clickPainter(painterButtons[i]);           
}

let clickCountry = function(country, list) {
    country.addEventListener('click', function() {
        countryButtons.forEach(function(elem) {
            elem.classList.remove('country__item_active');
        });
        countryLists.forEach(function(elem) {
            elem.classList.add('hidden');
        });
        country.classList.add('country__item_active');
        list.classList.remove('hidden');
    })
}

for(let i = 0; i < countryButtons.length; i++) {
    clickCountry(countryButtons[i], countryLists[i]);           
}