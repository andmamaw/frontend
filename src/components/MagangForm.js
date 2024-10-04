import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MagangForm = ({ selectedMagang, fetchMagang, clearSelectedMagang }) => {
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

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if (selectedMagang) {
                // Update existing magang
                await axios.put(`http://localhost:3000/api/magang/${selectedMagang.id}`, formData);
            } else {
                // Add new magang
                await axios.post('http://localhost:3000/api/magang', formData);
            }
            fetchMagang();
            clearSelectedMagang();  // Clear the form after submitting
        } catch (error) {
            console.error('Error submitting the form', error);
        }
    };

    // Populate form with selected magang data
    useEffect(() => {
        if (selectedMagang) {
            setFormData(selectedMagang);
        } else {
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
        }
    }, [selectedMagang]);

    return (
        <div className="magang-form-container">
            <form className="magang-form" onSubmit={handleSubmit}>
                <h2>{selectedMagang ? 'Edit Data Magang' : 'Tambah Data Magang'}</h2>
                <label htmlFor="nama">Nama</label>
                <input
                    type="text"
                    id="nama"
                    name="nama"
                    value={formData.nama}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="nim">NIM</label>
                <input
                    type="text"
                    id="nim"
                    name="nim"
                    value={formData.nim}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="fakultas">Fakultas</label>
                <input
                    type="text"
                    id="fakultas"
                    name="fakultas"
                    value={formData.fakultas}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="program_studi">Program Studi</label>
                <input
                    type="text"
                    id="program_studi"
                    name="program_studi"
                    value={formData.program_studi}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="asal_universitas">Asal Universitas</label>
                <input
                    type="text"
                    id="asal_universitas"
                    name="asal_universitas"
                    value={formData.asal_universitas}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="periode_mulai">Periode Mulai</label>
                <input
                    type="date"
                    id="periode_mulai"
                    name="periode_mulai"
                    value={formData.periode_mulai}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="periode_selesai">Periode Selesai</label>
                <input
                    type="date"
                    id="periode_selesai"
                    name="periode_selesai"
                    value={formData.periode_selesai}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="hasil">Hasil</label>
                <input
                    type="text"
                    id="hasil"
                    name="hasil"
                    value={formData.hasil}
                    onChange={handleChange}
                    required
                />

                <div className="form-actions">
                    <button type="submit">
                        {selectedMagang ? 'Update' : 'Simpan'}
                    </button>
                    <button type="button" className="reset-button" onClick={clearSelectedMagang}>
                        Reset
                    </button>
                </div>
            </form>
        </div>
    );
};

export default MagangForm;
