'use client'
import { sleep } from '@/shared/utils/sleep'
import { ChangeEvent, FocusEvent, FormEvent, useState } from 'react'

export interface FormValues {
    name: string
    phone: string
    email: string
}

type FormErrors = Partial<Record<keyof FormValues, string>>
type TouchedFields = Partial<Record<keyof FormValues, boolean>>

const initialValues: FormValues = {
    name: '',
    phone: '',
    email: '',
}

//  мок-валидаторы
const validators: Record<keyof FormValues, (value: string) => string> = {
    name: (value) => {
        const trimmed = value.trim()
        if (!trimmed) return 'Введите имя'
        if (trimmed.length < 2) return 'Имя слишком короткое'
        if (!/^[a-zA-Zа-яА-ЯёЁ\s-]+$/.test(trimmed)) return 'Имя содержит недопустимые символы'
        return ''
    },
    phone: (value) => {
        // оставляем только цифры из маски +7 (___) ___-__-__
        const digits = value.replace(/\D/g, '')
        if (!digits) return 'Введите телефон'
        if (digits.length !== 11) return 'Введите телефон полностью'
        return ''
    },
    email: (value) => {
        const trimmed = value.trim()
        if (!trimmed) return 'Введите email'
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) return 'Некорректный email'
        return ''
    },
}

const validateAll = (values: FormValues): FormErrors => {
    const errors: FormErrors = {}
    const keys = Object.keys(values) as (keyof FormValues)[]

    for (const key of keys) {
        const message = validators[key](values[key])
        if (message) errors[key] = message
    }

    return errors
}

export const useFormOrder = (
    onSuccess?: (values: FormValues) => void,
) => {
    const [values, setValues] = useState<FormValues>(initialValues)
    const [errors, setErrors] = useState<FormErrors>({})
    const [touched, setTouched] = useState<TouchedFields>({})
    const [submitting, setSubmitting] = useState(false)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        const key = name as keyof FormValues

        setValues((prev) => ({ ...prev, [key]: value }))

        // если поле уже трогали пересчитываем ошибку на лету
        if (touched[key]) {
            setErrors((prev) => ({ ...prev, [key]: validators[key](value) || undefined }))
        }
    }

    const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        const key = name as keyof FormValues

        setTouched((prev) => ({ ...prev, [key]: true }))
        setErrors((prev) => ({ ...prev, [key]: validators[key](value) || undefined }))
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const nextErrors = validateAll(values)
        setErrors(nextErrors)
        setTouched({ name: true, phone: true, email: true })

        if (Object.keys(nextErrors).length > 0) return

        // Мок отправка с задержкой
        setSubmitting(true)
        try {
            await sleep(800)
            onSuccess?.(values)
            reset()
        } finally {
            setSubmitting(false)
        }
    }

    const reset = () => {
        setValues(initialValues)
        setErrors({})
        setTouched({})
    }

    // удобный спред для каждого поля
    const getFieldProps = (name: keyof FormValues) => ({
        name,
        value: values[name],
        onChange: handleChange,
        onBlur: handleBlur,
        error: touched[name] ? errors[name] : undefined,
    })

    return {
        values,
        errors,
        touched,
        submitting,
        handleChange,
        handleBlur,
        handleSubmit,
        getFieldProps,
        reset,
    }
}