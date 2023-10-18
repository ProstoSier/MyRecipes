import { Nav, Navbar as NavbarBs } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import styles from "./page.module.css"

export function Navbar() {
    return (
    <nav className={styles.navbar}>
            <ul className={styles.navbarMenu}>
                <NavLink to={'/'} className={styles.navbarMenuItem}>
                    Home
                </NavLink>
                <NavLink to={'/breakfast'} className={styles.navbarMenuItem}>
                    Breakfast
                </NavLink>
                <NavLink to={'/lunch'} className={styles.navbarMenuItem}>
                    Lunch
                </NavLink>
                <NavLink to={'/dinner'} className={styles.navbarMenuItem}>
                    Dinner
                </NavLink>
            </ul>
    </nav>
    )
}