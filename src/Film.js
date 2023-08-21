import React from 'react';
import data from './FilmsData';

export default function Film() {
    const filmIndex = window.location.pathname.split("/")[2];

    return (
        <main id="film">
            <div id="grid">
            { filmIndex < data.length ? <iframe src={data[filmIndex].url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> : "Sorry, no video"}
            </div>
        </main>
    )
}