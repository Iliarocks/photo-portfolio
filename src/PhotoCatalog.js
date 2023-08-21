import React from 'react';
import { albums } from './PhotoData';

export default function PhotoCatalog({ goToPage }) {

    function loadPhotoAlbums() {
        let photoAlbums = [];

        function importAll(r) {
            let images = {};
            r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
            return images;
          }
          
        const thumbnails = importAll(require.context('./resources/photo_thumbnails', false, /\.(png|jpe?g|svg)$/));

        for (let i = 0; i < albums.length; i++) {
            photoAlbums.push(
                <article onClick={ () => goToPage("photo/" + i)}>
                    <h2>{ albums[i].title }</h2>
                    <img src={ thumbnails[albums[i].thumbnail] }/>
                </article>
            )
        }

        return photoAlbums;
    }

    return (
        <main id="photo-albums">
            <div id="grid">
                { loadPhotoAlbums() }
            </div>
        </main>
    );
}