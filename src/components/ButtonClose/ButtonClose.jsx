import clsx from "clsx"
import { IconClose } from "../icon/icon"
import styles from "./ButtonClose.module.css"
import PropTypes from 'prop-types';

export function ButtonClose({className}) {
    return <button className={clsx(styles.button, className)}><IconClose className={styles.icon} /></button>
};

ButtonClose.propTypes = {
    className: PropTypes.string,
}

export default ButtonClose