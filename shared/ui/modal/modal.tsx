'use client'
import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { Transition } from 'react-transition-group'
import styles from './modal.module.scss'
import CloseIcon from '@/shared/assets/icons/close.svg'
interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
  variant?: 'default' | 'video'
}

export const Modal = ({ isOpen, onClose, children, variant = 'default' }: ModalProps) => {
  const nodeRef = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  if (!mounted) return null

  return createPortal(
    <Transition nodeRef={nodeRef} in={isOpen} timeout={300} unmountOnExit mountOnEnter>
      {(state) => (
        <div ref={nodeRef} className={`${styles.overlay} ${styles[`overlay_${state}`]}`} onClick={onClose}>
          <div className={`${styles.modal} ${styles[`modal_${variant}`]}`} onClick={(e) => e.stopPropagation()}>
            <button className={`${styles.modal__close} ${variant === 'video' ? styles.modal__close_video : ''}`} onClick={onClose} aria-label="Закрыть">
              <CloseIcon />
            </button>
            <div className={styles.modal__content}>
              {children}
            </div>
          </div>
        </div>
      )}
    </Transition>,
    document.body
  )
}
