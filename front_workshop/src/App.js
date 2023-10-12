import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import Homepage from './views/HomePage';
import ComicStrip from './views/ComicStrip'

function App() {
  return (
    <Router>
      <div>
        <Routes>
          {/* <Route path="/" element={<Homepage pageName="Accueil" />} /> */}
          <Route path="/comicStrip" element={<ComicStrip pageName="ComicStrip" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;