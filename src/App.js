// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MagangForm from './components/MagangForm';
import MagangList from './components/MagangList';
import './App.css';

const App = () => {
    const [magang, setMagang] = useState([]);
    const [selectedMagang, setSelectedMagang] = useState(null);

    const fetchMagang = async () => {
        const response = await axios.get('http://localhost:3000/api/magang');
        setMagang(response.data);
    };

    useEffect(() => {
        fetchMagang();
    }, []);

    return (
        <div className="App">
            <h1>Data Anak Magang</h1>
            <MagangForm fetchMagang={fetchMagang} selectedMagang={selectedMagang} setSelectedMagang={setSelectedMagang} />
            <MagangList magang={magang} fetchMagang={fetchMagang} setSelectedMagang={setSelectedMagang} />
        </div>
    );
};

export default App;