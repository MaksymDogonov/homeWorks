'use strict';

let years = prompt('add your year of birth');
console.log(years);
if (years != null) {
    const city = prompt('add your city');
    if (city != null) {
        const sport = prompt('add your favorite sport ');
        let resultMainSport = null;
        if (sport != null) {
            let resultMainSport = null;
            if (sport === 'Футбол') {
                resultMainSport = 'Cristiano Ronaldo';
            } else if (sport === 'Баскетбол') {
                resultMainSport = 'Shaquille O Neal';
            } else if (sport === 'Волейбол') {
                resultMainSport = 'Эрвин Нгапет';
            }

            let resultCapital = null;
            if (city === 'Киев') {
                resultCapital = 'Ukraine';
            } else if (city === 'Минск') {
                resultCapital = 'belarus';
            } else if (city === 'Москва') {
                resultCapital = 'russia';
            }

            years = 2023 - years;
            let cityMessage = '';
            if (resultCapital) {
                cityMessage = `Ты живешь в столице ${resultCapital}`;
            } else {
                cityMessage = `ты живешь в городе ${city}`;
            }

            let sportMessage = '';
            if (resultMainSport) {
                sportMessage = `Круто! Хочешь стать ${resultMainSport}`;
            } else {
                sportMessage = `твой любимый спорт: ${sport}`;
            }

            alert(`your age ${years} ${cityMessage} ${sportMessage}`)
        } else {
            alert('Жаль, что Вы не захотели ввести свой любимый спорт');
        }
    } else {
        alert('Жаль, что Вы не захотели ввести свой город');
    }
} else {
    alert('Жаль, что Вы не захотели ввести свой(ю) дату рождения');
}