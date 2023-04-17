import styles from './Account.module.css'
import { useEffect, useState } from 'react';
import { useEditUser } from '../hooks/useEditUser';
import { useAuthContext } from '../hooks/useAuthContext';

const Account = () => {

    const { user } = useAuthContext();

    const { editUser, isLoading, error, setError, emptyFields, setEmptyFields } = useEditUser();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');

    const editUserHandler = async (e) => {
        e.preventDefault();

        await editUser(user.email, firstName, lastName, phone);
        setFirstName('');
        setLastName('');
        setPhone('');
    }

    return (
        <div className={styles['acc']}>
            <div className={styles['acc-details']}>
                <div className={styles['acc__name']}>
                    <div className={styles['acc__name-icon']}><i className="fa-regular fa-user"></i></div>
                    <div className={styles['acc__name-label']}>Name:</div>
                    <div className={styles['acc__name-name']}>{user.firstName} {user.lastName}</div>
                </div>

                <div className={styles['acc__phone']}>
                    <div className={styles['acc__name-icon']}><i className="fa-solid fa-mobile-retro"></i></div>
                    <div className={styles['acc__name-label']}>Phone:</div>
                    <div className={styles['acc__name-name']}>{user.phone}</div>
                </div>
            </div>

            <div className={styles['acc-form']}>
                <form className={styles['msform']} onSubmit={editUserHandler}>
                    <fieldset>
                        <h2 className={styles['fs-title']}>Add / Edit your details</h2>
                        <input className={emptyFields.includes('firstName') ? styles['input-error'] : ''}
                            type="text" name="firstName" placeholder="First Name"
                            onChange={(e) => {
                                setFirstName(e.target.value)
                                setEmptyFields(old => old.filter(f => f !== 'firstName'));
                            }}
                            value={firstName}
                        />
                        <input className={emptyFields.includes('lastName') ? styles['input-error'] : ''}
                            type="text" name="lastName" placeholder="Last Name"
                            onChange={(e) => {
                                setLastName(e.target.value)
                                setEmptyFields(old => old.filter(f => f !== 'lastName'));
                            }}
                            value={lastName}
                        />
                        <input className={emptyFields.includes('phone') ? styles['input-error'] : ''}
                            type="text" name="phone" placeholder="Phone number"
                            onChange={(e) => {
                                setPhone(e.target.value)
                                setEmptyFields(old => old.filter(f => f !== 'phone'));
                            }}
                            value={phone}
                        />
                        <input
                            type="submit"
                            className={styles['action-button']}
                            value='Edit'
                        />
                    </fieldset>
                </form>
                {error && <div className={styles['error']}>{error}</div>}

            </div>

        </div>
    )
}

export default Account;