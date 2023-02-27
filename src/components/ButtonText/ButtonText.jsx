import { useState } from 'react';
import styles from './ButtonText.module.css'
import PropTypes from 'prop-types';
import clsx from 'clsx';

export function ButtonText({text, className}) {
    const [isButton, setButton] = useState(false);
    return <button className={clsx(styles.button, className)} onClick={() => setButton(!isButton)}>{text}</button>
};

export default ButtonText;

ButtonText.propTypes = {
    text: PropTypes.string.isRequired,
    className: PropTypes.string
}