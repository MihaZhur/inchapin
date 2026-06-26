import { Container } from "@/shared/ui/container"
import { Typography } from "@/shared/ui/typography"
import styles from './project.module.scss'
import ProjectImage from "./project-image"
import { ButtonTop } from "./button-top"
import { VideoBlock } from "./video-block"

export const ProjectSection = () => {
    return <section id="project" className={styles.project}>
        <Container className={styles.project__container}>
            <div className={styles.project__blockImage}>
                <Typography className={styles.project__title} variant='h2' uppercase>
                    О проекте
                </Typography>
                <ProjectImage />
                {/* Скорее всего это просто декор лого, в начале подумал что кнопка */}
                <ButtonTop />
            </div>
            <div className={styles.project__info}>
                <Typography className={styles.project__infoTitle} variant='body' uppercase>
                    уютное и безопасное пространство для счастливой, <span className={styles.project__infoMarker}> спокойной и размеренной жизни</span>
                </Typography>
                
                <Typography className={styles.project__infoText} variant='body' uppercase>
                    <span className={styles.project__infoMarker}> Квартиры от 65 до 356 м2 с чистовой отделкой,</span> балконами, лоджиями и террасами В собственной ЗАКРЫТОЙ охраняемой территориИ.
                </Typography>
                <VideoBlock />
            </div>
        </Container>
    </section>
}