import React, { useState } from 'react';

function AdminPage() {
    const [czech, setCzech] = useState('');
    const [german, setGerman] = useState('');

    const handleAddWord = () => {
        // Handle logic to add a new word
    };

    return (
        <div>
            <h2>Admin</h2>
            <input
                type="text"
                value={czech}
                onChange={(e) => setCzech(e.target.value)}
                placeholder="Czech word"
            />
            <input
                type="text"
                value={german}
                onChange={(e) => setGerman(e.target.value)}
                placeholder="German translation"
            />
            <button onClick={handleAddWord}>Add Word</button>
        </div>
    );
}

export default AdminPage;
