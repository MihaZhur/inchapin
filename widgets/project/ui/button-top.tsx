import { Button } from "@/shared/ui/button"
import ArrowTop from '@/shared/assets/icons/arrow-top.svg'
import styles from './project.module.scss'
export const ButtonTop = () => {
    return <Button className={styles.project__buttonTop}>
        <ArrowTop className={styles.project__icon} />
    </Button>
}