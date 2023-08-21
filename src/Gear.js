import React from 'react';
import gearData from './GearData';

export default function Gear() {
    function importAll(r) {
        let images = {};
        r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
        return images;
    }
      
    const photos = importAll(require.context('./resources/gear_photos', false, /\.(png|jpe?g|svg)$/));

    // console.log(photos[Object.keys(photos)[0]])

    function loadGear() {
        let gear = [];

        for (let i = 0; i < gearData.length; i++) {
            gear.push(
                <article>
                    <a target="_blank" href={ gearData[i].product_link }>
                        <img src={ photos[gearData[i].image] } />
                        <p>{ gearData[i].description }</p>
                    </a>
                </article>
            )
        }

        return gear;
    }

    return (
        <main id='gear'>
            <p>Here's everything I use for my photo and video workflow—if you're interested in picking anything up for yourself, click on the image and it'll take you to a B&H link if available!</p>
            <div id='grid'>
                { loadGear() };
            </div>
        </main>
    );
}