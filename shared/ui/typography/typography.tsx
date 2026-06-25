import { ElementType, HTMLAttributes } from 'react'
import styles from './typography.module.scss'

type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'body' | 'body-sm' | 'caption'

const defaultTag: Record<Variant, ElementType> = {
  'h1': 'h1',
  'h2': 'h2',
  'h3': 'h3',
  'h4': 'h4',
  'body': 'p',
  'body-sm': 'p',
  'caption': 'span',
}

interface TypographyProps extends HTMLAttributes<HTMLElement> {
  variant?: Variant
  as?: ElementType
  uppercase?: boolean
  lowercase?: boolean
}

export const Typography = ({
  variant = 'body',
  as,
  uppercase,
  lowercase,
  className,
  children,
  ...props
}: TypographyProps) => {
  const Tag = as ?? defaultTag[variant]

  const classes = [
    styles[variant.replace('-', '_')],
    uppercase && styles.uppercase,
    lowercase && styles.lowercase,
    className,
  ].filter(Boolean).join(' ')

  return (
    <Tag className={classes} {...props}>
      {children}
    </Tag>
  )
}
