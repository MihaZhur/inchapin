'use client'
import { useEffect, useRef, useState } from 'react'
import Select from 'react-select'
import ArrowBottom from '@/shared/assets/icons/chevron-down.svg'
import styles from './choose-an-apartment.module.scss'

const apartmentOptions = [
    { value: '1', label: '1-комнатная, 42 м²' },
    { value: '2', label: '2-комнатная, 65 м²' },
    { value: '3', label: '3-комнатная, 88 м²' },
    { value: 'studio', label: 'Студия, 28 м²' },
]

type Option = (typeof apartmentOptions)[number]

const AnimatedText = ({ text }: { text: string }) => (
    <div className={styles.animatedText}>
        <span className={styles.animatedText__main}>{text}</span>
        <span className={styles.animatedText__ghost}>{text}</span>
    </div>
)

export const ChooseAnApartment = () => {
    const [selected, setSelected] = useState<Option | null>(null)
    const [menuIsOpen, setMenuIsOpen] = useState(false)
    const selectRef = useRef<any>(null)
    const wrapperRef = useRef<HTMLDivElement>(null)

    const label = selected ? selected.label : 'Выбрать квартиру'

    useEffect(() => {
        if (!menuIsOpen) return

        const handleClickOutside = (e: MouseEvent) => {
            if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
                setMenuIsOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [menuIsOpen])

    return (
        <div className={styles.wrapper} ref={wrapperRef}>
            <button
                className={styles.trigger}
                onClick={() => {
                    if (menuIsOpen) {
                        selectRef.current?.blur()
                        setMenuIsOpen(false)
                    } else {
                        selectRef.current?.focus()
                        setMenuIsOpen(true)
                    }
                }}
            >
                <AnimatedText text={label} />
                <ArrowBottom
                    className={`${styles.arrow} ${menuIsOpen ? styles.arrow_open : ''}`}
                />
            </button>

            <Select<Option>
                ref={selectRef}
                instanceId="choose-an-apartment"
                options={apartmentOptions}
                value={selected}
                onChange={(opt) => {
                    setSelected(opt)
                    setMenuIsOpen(false)
                }}
                menuIsOpen={menuIsOpen}
                onMenuClose={() => setMenuIsOpen(false)}
                isSearchable={false}
                classNamePrefix="select"
                components={{
                    Control: () => null,
                    DropdownIndicator: null,
                    IndicatorSeparator: null,
                }}
                styles={{
                    container: (base) => ({ ...base, position: 'absolute', width: '100%' }),
                    menu: (base) => ({ ...base, minWidth: 200 }),
                }}
            />
        </div>
    )
}
