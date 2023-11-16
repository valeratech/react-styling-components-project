import { useState } from 'react';
import styles from './AuthInputs.module.css';

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === 'email') {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes('@');
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div className={styles['auth-inputs']}>
      <div className={styles.controls}>
        <p>
          <label className={`${emailNotValid ? styles.invalid : undefined}`}>Email</label>
          <input
            type="email"
            className={`${emailNotValid ? styles.invalid : undefined}`}
            onChange={(event) => handleInputChange('email', event.target.value)}
          />
        </p>
        <p>
          <label className={`${passwordNotValid ? styles.invalid : undefined}`}>Password</label>
          <input
            type="password"
            className={`${passwordNotValid ? styles.invalid : undefined}`}
            onChange={(event) =>
              handleInputChange('password', event.target.value)
            }
          />
        </p>
      </div>
      <div className={styles.actions}>
        <button type="button" className="text-button">
          Create a new account
        </button>
        <button className={styles.button} onClick={handleLogin}>Sign In</button>
      </div>
    </div>
  );
}
