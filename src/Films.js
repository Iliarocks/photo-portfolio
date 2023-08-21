import React from 'react';
import data from './FilmsData';

export default function Films({ goToPage }) {

    const NUMBER_OF_FILMS = data.length;

    function importAll(r) {
        let images = {};
        r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
        return images;
      }
      
    const thumbnails = importAll(require.context('./resources/film_thumbnails', false, /\.(png|jpe?g|svg)$/));

    function loadFilms() {
        let films = [];

        for (let i = 0; i < NUMBER_OF_FILMS; i++) {
            films.push(
                <article onClick={ () => goToPage("film/" + i) }>
                    <h2>{ data[i].title }</h2>
                    <img src={ thumbnails[data[i].thumbnail] }/>
                </article>
            )
        }

        return films;
    }

    return (
        <main id="films">
            <div id="grid">
                { loadFilms() }
            </div>
        </main>
    )
}