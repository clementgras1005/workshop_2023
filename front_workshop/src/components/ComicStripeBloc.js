import React, { useState, useEffect } from 'react';
import '../styles/css/ComicStripBloc.css';
import cadenas from '../asset/quizz/img/cadenas.png';
import Popup from './Popup';

function ComicStripBloc(props) {
  const [backgroundColor, setBackgroundColor] = useState("#737373");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [result, setResult] = useState(null);

  useEffect(() => {
    if (props.isLocked) {
      setBackgroundColor("#737373");
    } else {
      setBackgroundColor("#C0C0C0");
    }
  }, [props.isLocked]);

  const handleClick = () => {
    if (!props.isLocked) {
      setIsPopupOpen(true);
    }
  };

  const handleClosePopup = (data) => {
    console.log(data); // Utilisez directement "data" ici
    if (data === "nice") {
      setBackgroundColor("green");
      props.onUnlockNext();
    } else {
      setBackgroundColor("red");
    }
    setResult(data);
    setIsPopupOpen(false);
  };

  return (
    <div
      onClick={handleClick}
      className="img"
      style={{
        backgroundColor: backgroundColor,
        cursor: props.isLocked ? "default" : "pointer",
      }}
    >
      <h1 className="title-box">{props.title}</h1>
      {props.isLocked && <img src={cadenas} className="icon" />}
      {isPopupOpen && <Popup index={props.current} onClose={handleClosePopup} />}
    </div>
  );
}

export default ComicStripBloc;
