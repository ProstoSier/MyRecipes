import styles from "./page.module.css";
import logo from "./images/logo.png";
import { Burger } from "./Burger";

export function Header() {
    return (
        <header className={styles.header}>            
            <img src={logo} alt="logo" className={styles.logoImg}/>
            <Burger /> 
        </header>
    );
}