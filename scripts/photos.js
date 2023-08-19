"use strict";
(function () {
    const PHOTOS = 'https://jsonplaceholder.typicode.com/photos/?albumId=';

    const params = (new URL(document.location)).searchParams;
    const albumId = params.get("albumId");

    const photoContainer = document.querySelector('.photo_container');

    const getPhotos = async () => {
        const response = await fetch(PHOTOS + albumId);
        return response.json();
    }

    const renderPhotos = (data) => {
        const photoWindow = document.createElement('div');
        photoContainer.appendChild(photoWindow);

        data.forEach(item => {
            photoWindow.innerHTML += `
                <div>
                    <img src="${item.thumbnailUrl}" alt="image">
                </div>
            `;
        })
    }

    getPhotos().then(renderPhotos).catch((e) => {
        console.log(e);
    });
})()
