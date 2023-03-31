import styles from './Signup.module.css'

import { useState } from "react";
import { useSignup } from '../hooks/useSignup';

const Signup = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [checkPasswords, setCheckPasswords] = useState('');

    const { signup, error, setError, isLoading } = useSignup();

    const signupHandler = async (e) => {
        e.preventDefault();

        if (password !== repeatPassword) {
            setError('Passwords do not match !');
            return null;
        }

        await signup(email, password);
    }

    return (
        <form className={styles['signup']} onSubmit={signupHandler}>
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

            <button disabled={isLoading}>Sign Up</button>
            {error && <div className={styles['error']}>{error}</div>}
        </form >
    )
}

export default Signup;