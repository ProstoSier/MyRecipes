import styles from './page.module.css';
import profile from './images/profile.svg';
import settings from './images/settings.svg';
import copyright from './images/copyright.svg';

export function Footer() {
    return (
        <footer className={styles.footer}>
            <span className={styles.footerCopyright}><img src={copyright} alt="copyright" className={styles.copyright}/>Ilkevych S.B., 2023</span>
            <div className={styles.footerActions}>
                <button className={styles.btnProfile}><img src={profile} alt="profile" className={styles.profileIcon}/></button>
                <button className={styles.btnSettings}><img src={settings} alt="settings" className={styles.settingsIcon}/></button>
            </div>
        </footer>
    );
}