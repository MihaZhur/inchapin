'use client'
import { InputHTMLAttributes, forwardRef, useState } from 'react'
import styles from './input.module.scss'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, id, value, onChange, error, ...rest }, ref) => {
    const [focused, setFocused] = useState(false)
    const [hasValue, setHasValue] = useState(Boolean(value))

    const lifted = focused || hasValue || Boolean(value)

    return (
      <div className={styles.field}>
        <label
          className={`${styles.field__label} ${lifted ? styles.field__label_lifted : ''}`}
          htmlFor={id}
        >
          {label}
        </label>
        <input
          {...rest}
          ref={ref}
          id={id}
          value={value}
          onChange={(e) => {
            setHasValue(e.target.value.length > 0)
            onChange?.(e)
          }}
          className={styles.field__input}
          onFocus={() => setFocused(true)}
          onBlur={(e) => {
            setFocused(false)
            setHasValue(e.target.value.length > 0)
          }}
        />
        {error && <span className={styles.field__error}>{error}</span>}
      </div>
    )
  },
)

Input.displayName = 'Input'