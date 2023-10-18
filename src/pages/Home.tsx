import styles from "./page.module.css";
import breakfast from "./images/meals/breakfast1.jpg"
import lunch from "./images/meals/lunch1.jpg"
import dinner from "./images/meals/dinner1.jpg"
import { NavLink } from "react-router-dom";

export function Home() {
    return (
        <div className={styles.wrapper}>
            <main className={styles.main}>
                <div className={styles.meals}>
                    <NavLink to={'/breakfast'} className={styles.mealsLinkBreakfast}>
                        <h2 className={styles.mealsTitle}>Breakfast</h2>
                    </NavLink>
                </div>
                <div className={styles.meals}>
                    <NavLink to={'/lunch'} className={styles.mealsLinkLunch}>
                        <h2 className={styles.mealsTitle}>Lunch</h2>
                    </NavLink>
                </div>
                <div className={styles.meals}>
                    <NavLink to={'/dinner'} className={styles.mealsLinkDinner}>
                        <h2 className={styles.mealsTitle}>Dinner</h2>
                    </NavLink>
                </div>
            </main>
            <footer className={styles.footer}>
                <NavLink to={"/"} className={styles.add}>
                    <div className={styles.btnAdd}>+</div>
                </NavLink>
            </footer>
        </div>
    );
}