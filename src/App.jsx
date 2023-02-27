import { Input } from "./components/Input";
import { Checkbox } from "./components/Checkbox";
import { Button } from "./components/Button";
import styles from "./App.module.css"
import ButtonText from "./components/ButtonText/ButtonText";
import { ButtonMore } from "./components/ButtonMore";
import ButtonAdd from "./components/ButtonAdd/ButtonAdd";
import ButtonClose from "./components/ButtonClose/ButtonClose";

export function App() {
    return (
        <form className={styles.form}>
            <Input />
            <Button 
            text={"Button"}/>
            <ButtonText 
            text={"Add New Task"}/>
            <ButtonMore />
            <ButtonAdd />
            <ButtonClose />
            <Checkbox /> 
        </form>
    );
};

export default App