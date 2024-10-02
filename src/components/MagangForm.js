import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MagangForm = ({ fetchMagang, selectedMagang, setSelectedMagang }) => {
    const [formData, setFormData] = useState({
        nama: '',
        nim: '',
        fakultas: '',
        program_studi: '',
        asal_universitas: '',
        periode_mulai: '',
        periode_selesai: '',
        hasil: ''
    });

    useEffect(() => {
        if (selectedMagang) {
            setFormData(selectedMagang);
        }
    }, [selectedMagang]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (selectedMagang) {
                await axios.put(`http://localhost:3000/api/magang/${formData.id}`, formData);
            } else {
                await axios.post('http://localhost:3000/api/magang', formData);
            }
            setFormData({
                nama: '',
                nim: '',
                fakultas: '',
                program_studi: '',
                asal_universitas: '',
                periode_mulai: '',
                periode_selesai: '',
                hasil: ''
            });
            setSelectedMagang(null);
            fetchMagang();
        } catch (error) {
            console.error('Error submitting form', error);
        }
    };

    return (
        <form 
            onSubmit={handleSubmit} 
            style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                gap: '15px', 
                maxWidth: '600px', 
                margin: '0 auto', // Center the form
                padding: '20px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Add a subtle shadow
                borderRadius: '10px', 
                backgroundColor: '#fff' 
            }}
        >
            <h2 style={{ textAlign: 'center' }}>Data Anak Magang</h2>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <label htmlFor="nama">Nama:</label>
                <input
                    type="text"
                    name="nama"
                    value={formData.nama}
                    onChange={handleChange}
                    placeholder="Nama"
                    required
                    style={{ width: '100%', padding: '10px', borderRadius: '5px' }}
                />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <label htmlFor="nim">NIM:</label>
                <input
                    type="text"
                    name="nim"
                    value={formData.nim}
                    onChange={handleChange}
                    placeholder="NIM"
                    required
                    style={{ width: '100%', padding: '10px', borderRadius: '5px' }}
                />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <label htmlFor="fakultas">Fakultas:</label>
                <input
                    type="text"
                    name="fakultas"
                    value={formData.fakultas}
                    onChange={handleChange}
                    placeholder="Fakultas"
                    required
                    style={{ width: '100%', padding: '10px', borderRadius: '5px' }}
                />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <label htmlFor="program_studi">Program Studi:</label>
                <input
                    type="text"
                    name="program_studi"
                    value={formData.program_studi}
                    onChange={handleChange}
                    placeholder="Program Studi"
                    required
                    style={{ width: '100%', padding: '10px', borderRadius: '5px' }}
                />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <label htmlFor="asal_universitas">Asal Universitas:</label>
                <input
                    type="text"
                    name="asal_universitas"
                    value={formData.asal_universitas}
                    onChange={handleChange}
                    placeholder="Asal Universitas"
                    required
                    style={{ width: '100%', padding: '10px', borderRadius: '5px' }}
                />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <label htmlFor="periode_mulai">Periode Mulai:</label>
                <input
                    type="date"
                    name="periode_mulai"
                    value={formData.periode_mulai}
                    onChange={handleChange}
                    required
                    style={{ width: '100%', padding: '10px', borderRadius: '5px' }}
                />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <label htmlFor="periode_selesai">Periode Selesai:</label>
                <input
                    type="date"
                    name="periode_selesai"
                    value={formData.periode_selesai}
                    onChange={handleChange}
                    required
                    style={{ width: '100%', padding: '10px', borderRadius: '5px' }}
                />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <label htmlFor="hasil">Hasil:</label>
                <textarea
                    name="hasil"
                    value={formData.hasil}
                    onChange={handleChange}
                    placeholder="Hasil"
                    required
                    style={{ width: '100%', padding: '10px', borderRadius: '5px', height: '100px' }}
                />
            </div>
            <button 
                type="submit" 
                style={{ 
                    width: '100%', 
                    padding: '15px', 
                    backgroundColor: '#4CAF50', 
                    color: 'white', 
                    border: 'none', 
                    borderRadius: '5px', 
                    cursor: 'pointer',
                    fontSize: '16px'
                }}
            >
                {selectedMagang ? 'Update' : 'Simpan'}
            </button>
        </form>
    );
};

export default MagangForm;
