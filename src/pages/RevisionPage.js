import React, { useState, useEffect } from 'react';

function RevisionPage() {
    const [words, setWords] = useState([]);
    const [currentWord, setCurrentWord] = useState({});
    const [answer, setAnswer] = useState('');

    useEffect(() => {
        // Fetch words from the backend
        setWords([
            { id: 1, czech: 'jablko', german: 'der Apfel' },
            { id: 2, czech: 'stůl', german: 'der Tisch' },
            // More words...
        ]);
        setCurrentWord({ id: 1, czech: 'jablko', german: 'der Apfel' });
    }, []);

    const handleNextWord = () => {
        // Handle logic to show the next word
    };

    return (
        <div>
            <h2>Revision</h2>
            <p>Czech: {currentWord.czech}</p>
            <input
                type="text"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                placeholder="German translation"
            />
            <button onClick={handleNextWord}>Next</button>
        </div>
    );
}

export default RevisionPage;
