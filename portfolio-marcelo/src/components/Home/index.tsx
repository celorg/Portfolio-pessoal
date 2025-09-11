import styles from './style.module.css'

import imageHome from '../../assets/MelRibeiro - Overview.gif';

export function Home() {
    return(
        <div className={styles.home}>
            <div className={styles.descriptionHome}>
                <h1>Conheça meu mundo da Programação</h1>
                <p>"O sucesso nasce do querer, da determinação e persistência em se chegar a um objetivo. Mesmo não atingindo o alvo, quem busca e vence obstáculos, no mínimo fará coisas admiráveis." </p>
                <div className={styles.boxButtons}>
                    <button className={styles.buttonWhite}>
                        Meus códigos
                    </button>
                    <button className={styles.buttonLine}>
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