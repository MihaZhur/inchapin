import { Container } from "@/shared/ui/container"
import styles from './header.module.scss'

import { Menu } from "@/features/menu"
import { ChooseAnApartment } from "@/features/choose-an-apartment"
import { Logo } from "./logo"

export const Header = () => {
    return <header className={styles.header}>
        <Container>
            <div className={styles.header__inner}>
                <div>
                    <Menu />
                    <ChooseAnApartment />
                </div>
                <Logo />
                <div>
                    <div><a href="tel:+74955272121">+7 495 527 21 21</a></div>
                    <div><button>Button</button></div>
                </div>
            </div>
        </Container>
    </header>
}