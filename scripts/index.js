'use strict';

let years = prompt('add your age');
console.log(years);
if (years != null) {
    const city = prompt('add your city');
    if (city != null) {
        const sport = prompt('add your favorite sport ');
        if (sport != null) {
            if (sport === 'Футбол') {
                const resultMainSport = 'Cristiano Ronaldo';
            } else if (sport === 'Баскетбол') {
                const resultMainSport = 'Shaquille O Neal';
            } else if (sport === 'Волейбол') {
                const resultMainSport = 'Эрвин Нгапет';
            }

            if (city === 'Киев') {
                const resultCapital = 'Ukraine';
            } else if (city === 'Минск') {
                const resultCapital = 'belarus';
            } else if (city === 'Москва') {
                const resultCapital = 'russia';
            }
            years = 2023 - years
            const resultCity = resultCapital === city ? `Ты живешь в столице ${resultCapital}` : `ты живешь в городе ${city}`;
            const resultSport = resultMainSport === sport ? `Круто! Хочешь стать ${resultMainSport}` : `твой любимый спорт: ${sport}`;
            alert(`your age ${years} ${resultCity} ${resultSport}`)
        } else {
            alert('Жаль, что Вы не захотели ввести свой любимый спорт');
        }

    } else {
        alert('Жаль, что Вы не захотели ввести свой город');
    }

} else {
    alert('Жаль, что Вы не захотели ввести свой(ю) дату рождения');
}