import styles from './style.module.css';

export function Skills() {
    return (

        <div className={styles.skill}>
            <div className={styles.skills}>
                <div className={styles.cardSkill}>
                    <h3>Front-End</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias excepturi dolore dicta. Sint mollitia repellat sequi cum impedit nobis nulla, quas quidem eveniet ad illum, minus autem excepturi laborum molestias? </p>
                </div>
                <div className={styles.cardSkill}>
                    <h3>Back-End</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias excepturi dolore dicta. Sint mollitia repellat sequi cum impedit nobis nulla, quas quidem eveniet ad illum, minus autem excepturi laborum molestias? </p>
                </div>
                <div className={styles.cardSkill}>
                    <h3>Design UX/UI</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias excepturi dolore dicta. Sint mollitia repellat sequi cum impedit nobis nulla, quas quidem eveniet ad illum, minus autem excepturi laborum molestias? </p>
                </div>
                
            </div>
            <div className={styles.titleSkin}>
                <h1>Habilidades</h1>
                <p>Desenvolvedor Front-End</p>
            </div>
        </div>

    )
}