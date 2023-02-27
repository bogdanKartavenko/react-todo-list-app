import { IconClose } from "../icon/icon"
import styles from "./ButtonClose.module.css"

export function ButtonClose() {
    return <button className={styles.button}><IconClose size={14}/></button>
};

export default ButtonClose