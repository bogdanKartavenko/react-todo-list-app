import { IconPlus } from "../icon/icon"
import styles from "./ButtonAdd.module.css"

export function ButtonAdd() {
    return <button className={styles.button}><IconPlus size={16}/></button>
};

export default ButtonAdd