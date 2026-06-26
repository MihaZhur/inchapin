'use client'
import Select, { components, ControlProps, SingleValueProps } from 'react-select'
import { Button } from '@/shared/ui/button'
import ArrowBottom from '@/shared/assets/icons/chevron-down.svg'
import styles from './choose-an-apartment.module.scss'

const apartmentOptions = [
  { value: '1', label: '1-комнатная, 42 м²' },
  { value: '2', label: '2-комнатная, 65 м²' },
  { value: '3', label: '3-комнатная, 88 м²' },
  { value: 'studio', label: 'Студия, 28 м²' },
]

// Внутренний компонент для анимации букв/текста
const AnimatedText = ({ text }: { text: string }) => {
  return (
    <div className={styles.animatedText}>
      <span className={styles.animatedText__main}>{text}</span>
      {/* <span className={styles.animatedText__ghost}>{text}</span> */}
    </div>
  )
}

// Заменяем дефолтный Control на твою кнопку из UI-кита
const CustomControl = ({ children, ...props }: ControlProps<any, false>) => {
  return (
    <components.Control {...props}>
      <Button className="w-full flex items-center justify-between">
        <div>{children}</div>
      </Button>
    </components.Control>
  )
}

const CustomSingleValue = ({ children, ...props }: SingleValueProps<any, false>) => {
  return (
    <components.SingleValue {...props}>
      <AnimatedText text={typeof children === 'string' ? children : 'Выбрать квартиру'} />
    </components.SingleValue>
  )
}


const CustomPlaceholder = () => {
  return <AnimatedText text="Выбрать квартиру" />
}

export const ChooseAnApartment = () => {
  const handleChange = (selectedOption: any) => {
    console.log('Выбрано:', selectedOption)
  }

  return (
    <div className={styles.wrapper}>
      <Select
        options={apartmentOptions}
        onChange={handleChange}
        placeholder="Выбрать квартиру"
        isSearchable={false}
        classNamePrefix="select"
        className={styles.select}
        components={{
          Control: CustomControl,
          SingleValue: CustomSingleValue,
          Placeholder: CustomPlaceholder,

          DropdownIndicator: (props) => (
            <ArrowBottom 
              className={`${styles.arrow} ${props.selectProps.menuIsOpen ? styles.arrow_open : ''}`} 
            />
          ),
          IndicatorSeparator: null,
        }}
      />
    </div>
  )
}