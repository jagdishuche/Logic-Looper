import React, { useState } from 'react';

import style from './Puzzle.module.css'

export const Puzzle = () => {
    const [message, setMessage] = useState("");
    const [isCorrect, setIsCorrect] = useState(null);

    const checkAnswer = (value) => {
        if (value === 100) {
            setMessage("Correct");
            setIsCorrect(true);
        } else {
            setMessage("Wrong");
            setIsCorrect(false);
        }
    };

    return (
        <>
        <div className={style.container}>
            <div className={style.div}>
                <div className={style.main1}>
                    <div className={style.numbers}>
                        49
                    </div>
                    <div className={style.numbers}>
                        64
                    </div>
                    <div className={style.numbers}>
                        81
                    </div>
                    <div className={style.numbers}>
                        ?
                    </div>
                </div>
                <div className={style.answer}>
                    <p className={style.nonoption}>Select one option :</p>
                </div>
                <div className={style.optionA}>
                    <button className={style.options1}
                        onClick={() => checkAnswer(90)}>
                        90
                    </button>
                    <button className={style.options2}
                        onClick={() => checkAnswer(100)}>
                        100
                    </button>
                </div>
                <div className={style.optionB}>
                    
                    <button className={style.options3}
                        onClick={() => checkAnswer(101)}>
                        101
                    </button>
                    <button className={style.options4}
                        onClick={() => checkAnswer(110)}>
                        110
                    </button>
                </div>
                
            </div>
        </div>
        { message && ( <div className={style.msg} style={{ color: isCorrect ? "green" : "red" }}> {message}</div> )}

        </>
    )
}