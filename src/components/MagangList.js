// src/components/MagangList.js
import React from 'react';
import axios from 'axios';

const MagangList = ({ magang, fetchMagang, setSelectedMagang }) => {
    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:3000/api/magang/${id}`);
        fetchMagang();
    };

    return (
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nama</th>
                    <th>NIM</th>
                    <th>Fakultas</th>
                    <th>Program Studi</th>
                    <th>Asal Universitas</th>
                    <th>Periode Mulai</th>
                    <th>Periode Selesai</th>
                    <th>Hasil</th>
                    <th>Aksi</th>
                </tr>
            </thead>
            <tbody>
                {magang.map((m, index) => (
                    <tr key={m.id}>
                        <td>{index + 1}</td>
                        <td>{m.nama}</td>
                        <td>{m.nim}</td>
                        <td>{m.fakultas}</td>
                        <td>{m.program_studi}</td>
                        <td>{m.asal_universitas}</td>
                        <td>{m.periode_mulai}</td>
                        <td>{m.periode_selesai}</td>
                        <td>{m.hasil}</td>
                        <td>
                            <button onClick={() => setSelectedMagang(m)}>Edit</button>
                            <button onClick={() => handleDelete(m.id)}>Hapus</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default MagangList;