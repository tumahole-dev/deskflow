import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function LoginPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('Employee');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // This will call the real /api/auth/login endpoint
        login({ name, email, role, token: 'placeholder-token' });
        navigate(role === 'Admin' ? '/admin' : '/employee');
    };

    return (
        <div className="login-page">
            <h1>DeskFlow Login</h1>
            <form onSubmit={handleSubmit}>
            <input type="text" 
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            />
            <input type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            />
            <div className="role-toggle">
                <label>
                    <input 
                    type="radio" 
                    value="Employee"
                    checked={role === 'Employee'}
                    onChange={(e) => setRole(e.target.value)}
                />
                Employee
                </label>
                <label>
                    <input type="radio" 
                    value="Admin"
                    checked={role === 'Admin'}
                    onChange={(e) => setRole(e.target.value)}
                    />
                  Admin
                </label>
            </div>
            <button type="submit">Log In</button>
            </form>
        </div>
    );
}

export default LoginPage