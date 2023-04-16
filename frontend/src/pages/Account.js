import styles from './Account.module.css'
import { useState } from 'react';

const Account = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [emptyFields, setEmptyFields] = useState([]);
    const [error, setError] = useState(null);

    return (
        <div className={styles['acc']}>

            <div className={styles['acc-details']}>
                <div className={styles['acc__name']}>
                    <div className={styles['acc__name-icon']}><i className="fa-regular fa-user"></i></div>
                    <div className={styles['acc__name-label']}>Name:</div>
                    <div className={styles['acc__name-name']}>Curtis Nathan</div>
                </div>

                <div className={styles['acc__phone']}>
                    <div className={styles['acc__name-icon']}><i className="fa-solid fa-mobile-retro"></i></div>
                    <div className={styles['acc__name-label']}>Phone:</div>
                    <div className={styles['acc__name-name']}>+359 88 1234567</div>
                </div>
            </div>

            <div className={styles['acc-form']}>

                <form className={styles['msform']}>
                    <fieldset>
                        <h2 className={styles['fs-title']}>Edit your details</h2>
                        {/* <h3 className="fs-subtitle">We will never sell it</h3> */}
                        <input className={emptyFields.includes('firstName') ? styles['input-error'] : ''}
                            type="text" name="firstName" placeholder="First Name"
                            onChange={(e) => setFirstName(e.target.value)}
                            value={firstName}
                        />
                        <input className={emptyFields.includes('lastName') ? styles['input-error'] : ''}
                            type="text" name="lastName" placeholder="Last Name"
                            onChange={(e) => setLastName(e.target.value)}
                            value={lastName}
                        />
                        <input className={emptyFields.includes('phone') ? styles['input-error'] : ''}
                            type="text" name="phone" placeholder="Phone number"
                            onChange={(e) => setPhone(e.target.value)}
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