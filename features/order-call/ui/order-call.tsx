'use client'
import { Button } from "@/shared/ui/button"
import styles from './order-call.module.scss'
import { Modal } from "@/shared/ui/modal"
import { useState, useRef, useEffect } from "react"
import { FormOrder } from "@/features/form-order"
import PhoneIcon from '@/shared/assets/icons/phone.svg'
export const OrderCall = () => {

    const [isOpenModal, setIsOpenModal] = useState(false)
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const dropdownRef = useRef<HTMLDivElement>(null)

    const handleCloseModal = () => setIsOpenModal(false)
    const handleOpenModal = () => {
        setIsOpenModal(true)
        setIsDropdownOpen(false)
    }

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setIsDropdownOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    return <>
        <a className={styles.phone} href="tel:+74955272121">+7 495 527 21 21</a>
        <Button variant="ghost" onClick={handleOpenModal} className={styles.button}>
            <span className={styles.button__text}>Заказать звонок</span>
        </Button>

        <div className={styles.dropdown} ref={dropdownRef}>
            <button
                className={`${styles.dropdown__trigger} ${isDropdownOpen ? styles.dropdown__trigger_active : ''}`}
                onClick={() => setIsDropdownOpen(v => !v)}
                aria-expanded={isDropdownOpen}
            >
                <PhoneIcon />
            </button>
            {isDropdownOpen && (
                <div className={styles.dropdown__menu}>
                    <a className={styles.dropdown__phone} href="tel:+74955272121">+7 495 527 21 21</a>
                    <button className={styles.dropdown__item} onClick={handleOpenModal}>Заказать звонок</button>
                </div>
            )}
        </div>

        <Modal onClose={handleCloseModal} isOpen={isOpenModal}>
            <FormOrder onSudmitSuccess={(values) => {
                console.log(values)
                handleCloseModal()
            }} />
        </Modal>
    </>
}