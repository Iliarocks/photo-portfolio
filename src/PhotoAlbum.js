import React, {useEffect, useState} from 'react';
import { photosList } from './PhotoData.js';


export default function PhotoAlbum() {
    const photoAlbumIndex = window.location.pathname.split("/")[2];
    const photoAlbum = photosList[photoAlbumIndex];
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    function importAll(r) {
        let images = {};
        r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
        return images;
    }
      
    const photos = importAll(require.context('./resources/photos', false, /\.(png|jpe?g|svg)$/));

    useEffect(() => {
  
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        }
        
        window.addEventListener('resize', handleResize);
        
        return () => {
         window.removeEventListener('resize', handleResize);
        };
        
      }, []);

    function getNumberOfColumns() {
        if (window.innerWidth > 1000) {
            return 3;
        } else if (window.innerWidth < 600) {
            return 1;
        } else {
            return 2;
        }

    }

    function loadPhotoAlbum() {
        const numberOfColumns = getNumberOfColumns();

        let photoAlbumColumns = [];

        for (let i = 0; i < numberOfColumns; i++) {
            let column = [];
            let increment = 0;
            
            while (i + increment < photoAlbum.length) {
                column.push(
                    <img src={ photos[photoAlbum[i + increment]] }/>
                )

                increment += numberOfColumns;
            }

            photoAlbumColumns.push(
                <div id='column'>
                    { column }
                </div>
            );
        }

        return photoAlbumColumns;
    }

    return (
        <main id='photos'>
            <div id="column-container">
                { loadPhotoAlbum() }
            </div>
        </main>
    );
}