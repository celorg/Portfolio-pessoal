import styles from './style.module.css';

export function Menu() {
    return(
        <nav className={styles.menu}>
            <h1 className={styles.logo}>
                CELORG_
            </h1>
            <div className={styles.listLinks}>
                <a href="#" className={styles.link}>
                    PROJETOS
                </a>
                <a href="#" className={styles.link}>
                    HABILIDADES
                </a>
                <a href="#" className={styles.link}>
                    CONTATO
                </a>
            </div>
        </nav>
    )
}