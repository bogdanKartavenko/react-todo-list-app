import clsx from "clsx"
import { IconPlus } from "../icon/icon"
import styles from "./ButtonAdd.module.css"
import PropTypes from 'prop-types';

export function ButtonAdd({className}) {
    return <button className={clsx(styles.button, className)}><IconPlus className={styles.icon} /></button>
};

ButtonAdd.propTypes = {
    className: PropTypes.string,
};

export default ButtonAdd;