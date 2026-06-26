import Link from 'next/link'
import LogoIcon from '@/shared/assets/logo.svg'
import styles from './header.module.scss'
export const Logo = () => {
    // Лого добавил как svg чтобы качество не терялось
    return <div className={styles.header__logo}>
        <Link href="/"><LogoIcon /></Link>
    </div>
}