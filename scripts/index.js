"use strict";
(function () {
    const ALBUMS = 'https://jsonplaceholder.typicode.com/albums/';

    const albumContainer = document.querySelector('.album_container');

    const getAlbums = async () => {
        const response = await fetch(ALBUMS);
        return response.json();
    }

    const renderAlbums = (data) => {
        const albumsWindow = document.createElement('div');
        albumContainer.appendChild(albumsWindow);

        data.forEach(item => {
            albumsWindow.innerHTML += `
                <div>
                    <a href="photos.html?albumId=${item.id}" target="_blank" class="link">${item.title}</a>
                </div>
            `;
        })
    }

    getAlbums().then(renderAlbums).catch((e) => {
        console.log(e);
    });

})();
