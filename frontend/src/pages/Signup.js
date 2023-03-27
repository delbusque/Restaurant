import styles from './Signup.module.css'

import { useState } from "react";

const Signup = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');

    const signHandler = (e) => {
        e.preventDefault();

        console.log(email, password, repeatPassword);
    }

    return (
        <form className={styles['signup']} onSubmit={signHandler}>
            <h3>Sign Up</h3>

            <label>Email:</label>
            <input type='email'
                onChange={(e) => setEmail(e.target.value)}
                value={email} />

            <label>Password:</label>
            <input type='password'
                onChange={(e) => setPassword(e.target.value)}
                value={password} />

            <label>Repeat password:</label>
            <input type='password'
                onChange={(e) => setRepeatPassword(e.target.value)}
                value={repeatPassword} />

            <button>Sign Up</button>

        </form >
    )
}

export default Signup;