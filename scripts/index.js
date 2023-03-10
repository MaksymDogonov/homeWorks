'use strict'

//Task #1
const user = {
    name: 'John',
    surname: 'Smith',
};
user.name = 'Pete';
delete user.name;

// //Task #2
// const user = {
//     name: '«John»'
// };
// //Так можливо, томущо const захищая саме перемену а не тещо в середені обєкта
// user.name = '«Pete»';
// //так це буду працювати

//Task #3
const salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
const array = Object.values(salaries);

function arraySum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    console.log(sum);
}

arraySum(array);