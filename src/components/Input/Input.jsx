import { useState } from 'react'
import styles from './Input.module.css'

export function Input({className}) {
    const [formInput, setFormInput] = useState('');

    console.log(formInput)

    return <>
        <input 
        className={styles.form}
        type="text" 
        name='text' 
        placeholder='Placeholder'
        value={formInput.text} 
        onChange={(e) => setFormInput(e.target.value)} />
    </>
}

export default Input
