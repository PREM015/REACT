import React, { useState, useContext } from 'react';
import UserContext from '../context/Usercontext';

function Login() {
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    const { setUser } = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault(); console.log("Setting user:", { username, password });
        setUser({ username, password });
    };

    return (
        <div>
            <h1>Login</h1>
            <input 
                type="text" 
                placeholder="Username" 
                value={username}
                onChange={(e) => setUsername(e.target.value)} 
            />
            <input 
                type="password" // Changed for security
                placeholder="Password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)} // Fixed typo
            />
            <button type="submit" onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default Login;
