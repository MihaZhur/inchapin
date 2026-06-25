import { Container } from "@/shared/ui/container"
import HeroBanner from "./banner"
import InchapinText from '@/shared/assets/images/intro/inchapin-text.svg'
import { Typography } from "@/shared/ui/typography"
import styles from './intro.module.scss'
export const Intro = () => {
    return <section className={styles.intro}>
        <Container>
            <HeroBanner />
        </Container>
        <Container>
            <div className={styles.intro__botom}>
                {/* Заголовок ощущуение что должен быть такой, но если орентировка на бренд, то скорее скрытый */}
                <Typography uppercase className={styles.intro__title} variant='h1'>Дом бизнес-класса <br />
                    для ценителей роскоши</Typography>
                {/* Взял svg вместо текста */}
                <InchapinText className={styles.intro__text} />
            </div>
        </Container>
    </section>
}