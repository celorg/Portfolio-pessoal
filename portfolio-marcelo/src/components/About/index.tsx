import { Download } from 'lucide-react';
import styles from './style.module.css';

export function About() {
    return (
        <div className={styles.about}>
            <div className={styles.boxAbout}>
                <h1>Sobre Mim</h1>
                <p>Seja bem-vindo ao meu portfólio, meu nome é Marcelo Ribeiro, tenho 22 anos de idade, atualmente eu moro no estado de São Paulo. Sou um cara apaixonado por resolver problemas, vejo isso como um novo desafio todos os dias a ser superado. Sou um programador Web no início da carreira, meu primeiro contato com a área da programação foi na faculdade de Análise e Desenvolvimento de Sistemas, desde então criei uma das minhas maiores paixões: Programar.
                    Tenho conhecimento em HTML, CSS, JavaScript, PHP, MySQL, Material UI e WordPress. Tambem programamo com Laravel que utiliza o padrão MVC (Model, View, Controller). Desejo aprender cada vez mais sobre essa área, e ter experiencia o bastante para me tornar um Desenvolvedor Full-Stack. Já alcancei bastante coisas que estavam em meus planos e pretendo cada vez mais alcançar meus objetivos, atualmente sou apenas um estudante autodidata na criação de sites mas minha meta é se tornar um profissional dessa área.

                </p>
                <button>Download CV<Download /></button>
            </div>
        </div>
    )
}