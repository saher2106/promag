// import './Signup.css';

// export default function Signup(){
//     return(
//         <div>
//             Signup
//         </div>
//     )
// }

import React, { useState } from 'react';
import './Signup.css';

export default function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [displayName, setDisplayName] = useState('');

return (
        <form className='auth-form'>
            <h2 className="form-head">Signup</h2>
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
                <span>Display Name</span>
                <input
                    required
                    type='text'
                    onChange={(e) => setDisplayName(e.target.value)}
                    value={displayName}
                />
            </label>
            <label>
                <span>Profile Photo</span>
                <input
                required type='file'
                />
            </label>
            <button className='btn'>Signup</button>
        </form>
    );
}
