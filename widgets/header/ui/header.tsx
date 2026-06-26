import { Container } from "@/shared/ui/container"
import styles from './header.module.scss'

import { Menu } from "@/widgets/menu"
import { ChooseAnApartment } from "@/features/choose-an-apartment"
import { Logo } from "./logo"
import { OrderCall } from "@/features/order-call"
import PhoneIcon from '@/shared/assets/icons/phone.svg'

export const Header = () => {
    return <header className={styles.header}>
        <Container>
            <div className={styles.header__inner}>
                <div className={styles.header__menu}>
                    <Menu />
                </div>
                <div className={styles.header__wrap}>

                    <div className={styles.header__chooseDesktop}>
                        <ChooseAnApartment />
                    </div>
                    <Logo />
                    <div className={styles.header_call}>

                        <OrderCall />
            
                    </div>
                </div>

            </div>
        </Container>
    </header>
}