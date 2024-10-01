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
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
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
    };

    return (
        <form onSubmit={handleSubmit} className="magang-form">
            <div>
                <input type="text" name="nama" value={formData.nama} onChange={handleChange} placeholder="Nama" required />
            </div>
            <div>
                <input type="text" name="nim" value={formData.nim} onChange={handleChange} placeholder="NIM" required />
            </div>
            <div>
                <input type="text" name="fakultas" value={formData.fakultas} onChange={handleChange} placeholder="Fakultas" required />
            </div>
            <div>
                <input type="text" name="program_studi" value={formData.program_studi} onChange={handleChange} placeholder="Program Studi" required />
            </div>
            <div>
                <input type="text" name="asal_universitas" value={formData.asal_universitas} onChange={handleChange} placeholder="Asal Universitas" required />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <label htmlFor="periode_mulai" style={{ marginRight: '10px' }}>Periode Mulai:</label>
                <input type="date" name="periode_mulai" value={formData.periode_mulai} onChange={handleChange} required />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <label htmlFor="periode_selesai" style={{ marginRight: '10px' }}>Periode Selesai:</label>
                <input type="date" name="periode_selesai" value={formData.periode_selesai} onChange={handleChange} required />
            </div>
            <div>
                <textarea name="hasil" value={formData.hasil} onChange={handleChange} placeholder="Hasil" required />
            </div>
            <button type="submit">{selectedMagang ? 'Update' : 'Simpan'}</button>
        </form>
    );  
};

export default MagangForm;
