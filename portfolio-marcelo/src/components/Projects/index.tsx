import styles from './style.module.css';

import { Card } from "../Card";

export function Projects() {

    return(
        <div className={styles.projects}>
            <h1>Projetos</h1>
            <div className={styles.cards}>
                <Card titulo="Teste" descricao="djafd fdk afkfjdlf afjkdjflkjdsaçsldfj klçfdjsçjfafjdf a dfj dsçafkjda~fdjfçdsaljafdçfdj açfsdfuçifeçuj erçifeuç" />
                <Card titulo="Teste" descricao="djafd fdk afkfjdlf afjkdjflkjdsaçsldfj klçfdjsçjfafjdf a dfj dsçafkjda~fdjfçdsaljafdçfdj açfsdfuçifeçuj erçifeuç" />
                <Card titulo="Teste" descricao="djafd fdk afkfjdlf afjkdjflkjdsaçsldfj klçfdjsçjfafjdf a dfj dsçafkjda~fdjfçdsaljafdçfdj açfsdfuçifeçuj erçifeuç" />
            </div>
        </div>
    )

}