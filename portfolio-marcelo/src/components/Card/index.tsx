import { ArrowRight } from 'lucide-react';
import styles from './style.module.css';

type CardProps = {
    image?: React.ReactNode;
    titulo: string;
    descricao: string;
}

export function Card({image, titulo, descricao}: CardProps) {



    return(
        <div className={styles.card}>
            <div className={styles.cardImage}>

            </div>
            <div className={styles.descriptionCard}>
                <h3>{titulo && titulo}</h3>
                <p>{descricao && descricao}</p>
                <a href="#">Vejo o Projeto <ArrowRight /></a>
            </div>
        </div>
    )
}