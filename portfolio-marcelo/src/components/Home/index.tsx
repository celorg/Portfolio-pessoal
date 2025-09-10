import styles from './style.module.css'

import imageHome from '../../assets/image2.jpg';

export function Home() {
    return(
        <div className={styles.home}>
            <div className={styles.descriptionHome}>
                <h1>Portifólio</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                <div className={styles.boxButtons}>
                    <button className={styles.buttonDark}>
                        Meus códigos
                    </button>
                    <button className={styles.buttonLight}>
                        Sobre mim
                    </button>

                </div>
            </div>
            <div className={styles.imageHome}>
                <img src={imageHome} alt="" />
            </div>
        </div>
    )
}