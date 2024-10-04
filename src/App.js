// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import MagangForm from './components/MagangForm';
import MagangList from './components/MagangList';
import Login from './components/Login';
import './App.css';

const App = () => {
    const [magang, setMagang] = useState([]);
    const [selectedMagang, setSelectedMagang] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fungsi untuk mengambil data anak magang dari API
    const fetchMagang = async () => {
        try {
            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/magang');
            setMagang(response.data);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching data:", error);
            setError("Error fetching data. Please try again later.");
            setLoading(false);
        }
    };

    // UseEffect untuk mengambil data saat komponen pertama kali di-render
    useEffect(() => {
        fetchMagang();
    }, []);

    return (
        <Router>
            <div className="App">
                <Routes>
                    {/* Route untuk halaman login */}
                    <Route path="/login" element={<Login />} />

                    {/* Route untuk daftar magang */}
                    <Route path="/magang" element={
                        <>
                            <h1>Data Anak Magang</h1>
                            {loading ? (
                                <p>Loading data...</p>
                            ) : error ? (
                                <p>{error}</p>
                            ) : (
                                <>
                                    <MagangForm fetchMagang={fetchMagang} selectedMagang={selectedMagang} setSelectedMagang={setSelectedMagang} />
                                    <MagangList magang={magang} fetchMagang={fetchMagang} setSelectedMagang={setSelectedMagang} />
                                </>
                            )}
                        </>
                    } />

                    {/* Route untuk form magang */}
                    <Route path="/form" element={
                        <MagangForm fetchMagang={fetchMagang} selectedMagang={selectedMagang} setSelectedMagang={setSelectedMagang} />
                    } />

                    {/* Redirect ke login jika diakses "/" */}
                    <Route path="/" element={<Login />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
