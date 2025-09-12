import styles from './style.module.css'

export function Qualificantions() {
    return (
        <section className={styles.timeline} aria-label="Linha do tempo das formações">


            <article className={styles.item} id="formacao-1">
            <div className={styles.marker} aria-hidden="true">1</div>
            <h3>Bacharelado em Ciência da Computação <span className={styles.period}>2018 — 2022</span></h3>
            <div className={styles.meta}>Universidade Estadual — São Paulo</div>
            <p>Resumo curto (opcional): disciplinas principais, projeto de conclusão ou destaque acadêmico.</p>
            </article>


            <article className={styles.item} id="formacao-2">
            <div className={styles.marker} aria-hidden="true">2</div>
            <h3>Curso de Análise de Dados (Bootcamp) <span className="period">2023</span></h3>
            <div className={styles.meta}>Plataforma/Instituição</div>
            <p>Aprendizado prático em Python, SQL e Power BI. Desenvolvimento de projetos aplicados.</p>
            </article>


            <article className={styles.item} id="formacao-3">
                <div className={styles.marker} aria-hidden="true">3</div>
                <h3>Certificação em Power BI <span className={styles.period}>2024</span></h3>
                <div className={styles.meta}>Fornecedor/Instituição</div>
                <p>Certificação voltada a criação de dashboards, modelagem e transformação de dados.</p>
            </article>


        </section>
    )
}