import React, { useState, useEffect } from 'react';
import '../styles/css/ComicStrip.css'
import ComicStripBloc from '../components/ComicStripeBloc';
import logo from '../asset/quizz/img/logo.png'

function ComicStrip() {

    const tabImg = [
        ["Question 1",],
        ["Question 2",],
        ["Question 3",],
        ["Question 4",],
        ["Question 5",],
        ["Question 6",],
    ]

    const [lockStates, setLockStates] = useState([false, true, true, true, true, true]);
    const [answeredQuestions, setAnsweredQuestions] = useState([]); // Suivi des questions déjà répondues
    const [currentQuestion, setCurrentQuestion] = useState(0);

    const handleUnlockNext = () => {
        const updatedLockStates = [...lockStates];
        updatedLockStates[currentQuestion] = true;
        if (currentQuestion + 1 < lockStates.length) {
            updatedLockStates[currentQuestion + 1] = false;
        }
        setLockStates(updatedLockStates);
        setAnsweredQuestions([...answeredQuestions, currentQuestion]); // Ajoutez la question à la liste des questions déjà répondues
        setCurrentQuestion(currentQuestion + 1);

    };

    const handleTerminate = () =>{
        localStorage.setItem("isFinishedBD", true)
    }

    return (
        <div>
            <div>
                <img src={logo} className='logo' />
            </div>
            <div className='container-gameComic'>
                <div className='container-comicStrip'>
                    <h1 className='title'>La bande dessiné</h1>
                    <div className='container-global'>
                        {lockStates.map((isLocked, index) => (
                            <ComicStripBloc
                                key={index}
                                current={index}
                                isLocked={isLocked && !answeredQuestions.includes(index)} // Vérifiez si la question est verrouillée et non encore répondue
                                onUnlockNext={handleUnlockNext}
                                title={`Question ${index+1}`}
                            />
                        ))}
                    </div>
                    <button className="btn-quizz" onClick={handleTerminate}>Terminé !</button>
                </div>
            </div>
        </div>
    )
}

export default ComicStrip;
