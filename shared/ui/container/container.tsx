import { PropsWithChildren } from "react"
import styles from './container.module.scss'
interface Props {
    className?: string;
}
export const Container: React.FC<PropsWithChildren<Props>> = ({ children, className }) => {
    return <div className={`${styles.container} ${className ?? ''}`}>{children}</div>
} 