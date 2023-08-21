import React, {useState} from 'react';
import NavBar from './NavBar';
import Films from './Films';
import Film from './Film';
import PhotoCatalog from './PhotoCatalog';
import PhotoAlbum from './PhotoAlbum';
import Gear from './Gear';
import Home from './Home';
import './App.css';
import './Films.css';
import './Film.css';
import './PhotoCatalog.css';
import './PhotoAlbum.css';
import './Gear.css';
import './Home.css';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDWXRc9Ep-AwY4A15ti1cnwSXCwKsyJKtc",
  authDomain: "photography-portfolio-ilia.firebaseapp.com",
  projectId: "photography-portfolio-ilia",
  storageBucket: "photography-portfolio-ilia.appspot.com",
  messagingSenderId: "172782139073",
  appId: "1:172782139073:web:3d61fa4cc267a7e5e70640",
  measurementId: "G-47BCQL5V0M"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  const [page, setPage] = useState(window.location.pathname);

  function showPage() {
    const primaryPath = page.split('/')[1];

    switch (primaryPath) {
      case "films":
        return <Films goToPage={ goToPage }/>
      case "film":
        return <Film />
      case "photos":
        return <PhotoCatalog goToPage={ goToPage }/>
      case "photo":
        return <PhotoAlbum />
      case "gear":
        return <Gear />
      default:
        return <Home />
    }
  }

  function goToPage(newPathName) {
    window.location.pathname = newPathName;
    setPage(newPathName);
  }

  return (
    <React.Fragment>
      <NavBar goToPage={goToPage}/>
      { showPage() }
      <footer>
        <hr />
        <p>thanks for visiting!</p>
      </footer>
    </React.Fragment>
  );
}

export default App;
