import PropTypes from "prop-types";
import styles from "./ColorDot.module.css"
import clsx from "clsx";

export function ColorDot(className) {
    return (
        <div className={clsx(className, styles.colorDot)}></div>
    )
}

ColorDot.propTypes = {
    className: PropTypes.string,
};

export default ColorDot; 