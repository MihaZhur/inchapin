import { Button } from "@/shared/ui/button"
import styles from './menu.module.scss'
export const Menu = () => {
    return <div className={styles.menu}>
        <Button className={styles.menu__burger} variant="ghost">
            <span className={styles.menu__line} />
        </Button>
        <span className={styles.menu__label}>МЕНЮ</span>
    </div>
}