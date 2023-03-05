import clsx from "clsx"
import { IconMore } from "../icon/icon"
import styles from "./ButtonMore.module.css"
import PropTypes from 'prop-types';

export function ButtonMore({className}) {
    return <button className={clsx(styles.button, className)}><IconMore className={styles.icon}/></button>
};

ButtonMore.propTypes = {
    className: PropTypes.string,
}

export default ButtonMore