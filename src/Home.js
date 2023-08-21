import React from 'react';
import portrait from './resources/DSCF1489.jpg';

export default function Home() {
    return (
        <main id='home'>
            <div id='about'>
                <div id='image'>
                    <img src={ portrait } />
                </div>
                <div id='text'>
                    <h1>Hello and welcome! <br/>My name's Ilia,</h1>
                    <p>I'm a Georgian-Canadian photographer and filmmaker based in Toronto, Canada. As of now, my work mainly centers on documenting life wherever I find myself—that usually includes pictures of landscapes, loved ones, and really anything else interesting happening!</p>
                </div>
            </div>
        </main>
    )
}