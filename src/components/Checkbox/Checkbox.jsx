import { useState } from "react";
import styles from './Checkbox.module.css'

export function Checkbox() {
    const [isChecked, setIsChecked] = useState(false);
    return (
        <label className={styles.label}>
            <input className={styles.checkbox} type="checkbox" checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
            <span className={styles.border}></span>
            <span className={styles.span}></span>
            <span className={styles.text}>Done</span>
        </label>
    );
};

export default Checkbox;


