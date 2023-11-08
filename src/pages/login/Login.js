import React, { useState } from 'react';
import './Login.css';


export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(email.password);


    }

    return (
        <form className='auth-form' onSubmit={handleSubmit}>
            <h2 className='form-head'>Login</h2>
            <label>
                <span>Email</span>
                <input
                    required
                    type='email'
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
            </label>


            <label>
                <span>Password</span>
                <input
                    required
                    type='password'
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
            </label>


            <label>
               
               
            </label>
            <button className='btn'>Login</button>
            {/* {!isPending && <button className='btn'>Login</button>}
            {isPending && <button className='btn' disabled>Loading</button>}
            {error && <div className='error'>{error}</div>} */}
           
        </form>
    );
}


