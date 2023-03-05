import clsx from 'clsx';
import { useState } from 'react';
import styles from './Button.module.css'
import PropTypes from 'prop-types';

export function Button({text, className}) {
    const [isButton, setButton] = useState(false);
    return <button className={clsx(styles.button, className)} onClick={() => setButton(!isButton)}>{text}</button>
};

Button.propTypes = {
    text: PropTypes.string.isRequired,
    className: PropTypes.string
};

export default Button;