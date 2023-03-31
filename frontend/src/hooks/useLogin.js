import { useState } from 'react';
import { useAuthContext } from './useAuthContext';

export const useLogin = () => {
    const [error, setError] = useState();
    const [isLoading, setIsLoading] = useState();
    const { dispatch } = useAuthContext();

    const login = async (email, password) => {

        setIsLoading(true);
        setError(null);

        const response = await fetch('/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        const result = await response.json();

        if (!response.ok) {
            setIsLoading(false);
            setError(result.error);
        }

        if (response.ok) {
            setIsLoading(false);
            localStorage.setItem('user', JSON.stringify(result));
            dispatch({ type: 'LOGIN', payload: result })
        }
    }

    return { login, error, isLoading };
}