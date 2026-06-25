import { Container } from "@/shared/ui/container"
import styles from './header.module.scss'

import { Menu } from "@/widgets/menu"
import { ChooseAnApartment } from "@/features/choose-an-apartment"
import { Logo } from "./logo"
import { ButtonOrderCall } from "@/features/button-order-call"

export const Header = () => {
    return <header className={styles.header}>
        <Container>
            <div className={styles.header__inner}>
                <div className={styles.header_menu}>
                    <Menu />
                    <ChooseAnApartment />
                </div>
                <Logo />
                <div className={styles.header_call}>
                    <div><a className={styles.header__phone} href="tel:+74955272121">+7 495 527 21 21</a></div>
                    <ButtonOrderCall />
                </div>
            </div>
        </Container>
    </header>
}