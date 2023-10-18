import styles from './page.module.css';
import borsch from './images/dishes/borsch.jpg'
import { Link } from 'react-router-dom';
import basket from './images/delete.svg'

export function ListRecipes() {
    return (
    <div className={styles.wrapper}>
        <ul className={styles.listRecipes}>
            <Link to={'/'} className={styles.itemRecipe}>
                <div className={styles.itemRecipeBlock}>
                    <img src={borsch} alt="Photo dishes" className={styles.itemRecipePhoto}/>
                    <div className={styles.itemRecipeInfo}>
                        <h2 className={styles.itemRecipeTitle}>
                            Borsch
                        </h2>
                        <p className={styles.itemRecipeDescription}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis explicabo, eligendi dolorem sint commodi nesciunt ducimus harum deserunt maiores perferendis aliquid saepe consectetur exercitationem.
                        </p>
                        <div className={styles.itemRecipeActions}>
                            <button className={styles.itemRecipeBtnBasket}><img src={basket} alt="basket" className={styles.basketItem}/></button>   
                        </div>
                    </div>
                </div>                           
            </Link>
            <Link to={'/'} className={styles.itemRecipe}>
                <div className={styles.itemRecipeBlock}>
                    <img src={borsch} alt="Photo dishes" className={styles.itemRecipePhoto}/>
                    <div className={styles.itemRecipeInfo}>
                        <h2 className={styles.itemRecipeTitle}>
                            Borsch
                        </h2>
                        <p className={styles.itemRecipeDescription}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis explicabo, eligendi dolorem sint commodi nesciunt ducimus harum deserunt maiores perferendis aliquid saepe consectetur exercitationem.
                        </p>
                        <div className={styles.itemRecipeActions}>
                            <button className={styles.itemRecipeBtnBasket}><img src={basket} alt="basket" className={styles.basketItem}/></button>   
                        </div>
                    </div>
                </div>                           
            </Link>
            <Link to={'/'} className={styles.itemRecipe}>
                <div className={styles.itemRecipeBlock}>
                    <img src={borsch} alt="Photo dishes" className={styles.itemRecipePhoto}/>
                    <div className={styles.itemRecipeInfo}>
                        <h2 className={styles.itemRecipeTitle}>
                            Borsch
                        </h2>
                        <p className={styles.itemRecipeDescription}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis explicabo, eligendi dolorem sint commodi nesciunt ducimus harum deserunt maiores perferendis aliquid saepe consectetur exercitationem.
                        </p>
                        <div className={styles.itemRecipeActions}>
                            <button className={styles.itemRecipeBtnBasket}><img src={basket} alt="basket" className={styles.basketItem}/></button>   
                        </div>
                    </div>
                </div>                           
            </Link>
        </ul>
    </div>              
    );
}