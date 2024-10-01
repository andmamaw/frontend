// src/Login.js
import React, { useState } from 'react';

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        
        // Contoh validasi sederhana
        if (username === 'admin' && password === 'password') {
            onLogin();  // Panggil fungsi login
        } else {
            setErrorMessage('Username atau password salah.');
        }
    };

    return (
        <div style={styles.container}>
            <h2>Login Page</h2>
            <form onSubmit={handleSubmit} style={styles.form}>
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        style={styles.input}
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        style={styles.input}
                    />
                </div>
                {errorMessage && <p style={styles.error}>{errorMessage}</p>}
                <button type="submit" style={styles.button}>Login</button>
            </form>
        </div>
    );
};

const styles = {
  container: {
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    textAlign: 'center',
    backgroundColor: '#f4f4f4',
    borderRadius: '8px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    width: '100%',
  },
  button: {
    padding: '10px',
    backgroundColor: '#007BFF',
    color: 'white',
    fontSize: '16px',
    border: 'none',
    cursor: 'pointer',
  },
  error: {
    color: 'red',
  },
};

export default Login;
