import React from 'react';
import axios from 'axios';

const MagangList = ({ magang, fetchMagang, setSelectedMagang }) => {
    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:3000/api/magang/${id}`);
        fetchMagang();
    };

    const handlePrint = (m) => {
        const printWindow = window.open('', '', 'width=800,height=600');
        printWindow.document.write(`
            <html>
                <head>
                    <title>Cetak Data Magang</title>
                    <style>
                        body { font-family: Arial, sans-serif; padding: 20px; }
                        table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
                        th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
                        th { background-color: #f2f2f2; }
                    </style>
                </head>
                <body>
                    <h2>Data Magang ${m.nama}</h2>
                    <table>
                        <tr><th>Nama</th><td>${m.nama}</td></tr>
                        <tr><th>NIM</th><td>${m.nim}</td></tr>
                        <tr><th>Fakultas</th><td>${m.fakultas}</td></tr>
                        <tr><th>Program Studi</th><td>${m.program_studi}</td></tr>
                        <tr><th>Asal Universitas</th><td>${m.asal_universitas}</td></tr>
                        <tr><th>Periode Mulai</th><td>${m.periode_mulai}</td></tr>
                        <tr><th>Periode Selesai</th><td>${m.periode_selesai}</td></tr>
                        <tr><th>Hasil</th><td>${m.hasil}</td></tr>
                    </table>
                    <button onClick="window.print()">Print</button>
                </body>
            </html>
        `);
        printWindow.document.close();
        printWindow.focus();
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
                            <button onClick={() => handlePrint(m)}>Print</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default MagangList;