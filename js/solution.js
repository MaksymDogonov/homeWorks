const findLi = () => {
    const arrLi = [];
    const arrLiText = [];
    for (const el of document.querySelectorAll('li')) {
        arrLi.push(el);
        arrLiText.push(el.innerText);
    }
    return [arrLi, arrLiText]
}
const [arrLi, arrLiText] = findLi()
for (const el of arrLi) {
    console.log(el);
}
console.log(arrLiText);
console.log(arrLi.length);
