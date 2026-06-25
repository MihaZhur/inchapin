import { ButtonHTMLAttributes } from 'react'
import styles from './button.module.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost'
}

export const Button = ({ variant = 'primary', className, children, ...props }: ButtonProps) => {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${className ?? ''}`}
      {...props}
    >
      {children}
    </button>
  )
}
