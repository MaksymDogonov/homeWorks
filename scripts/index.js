'use strict';
const openSidebarMenu = () => {
    const buttonMenu = document.querySelector('.header__sidebar-btn');
    const leftMenu = document.querySelector('.sidebar');

    buttonMenu.addEventListener('click', (e) => {
        if (leftMenu.classList.contains('active')) {
            leftMenu.classList.remove('active');
            buttonMenu.classList.remove('active');
            leftMenu.style.display = 'none';
        } else {
            leftMenu.style.display = 'flex';
            leftMenu.classList.add('active');
            buttonMenu.classList.add('active');
        }
    })
}
openSidebarMenu();
