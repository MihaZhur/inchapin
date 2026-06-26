'use client'
import { InputHTMLAttributes } from 'react'
import { useMask, type Replacement } from '@react-input/mask'
import { Input } from '@/shared/ui/input'

interface MaskInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  mask: string
  replacement: string | Replacement
  showMask?: boolean
  separate?: boolean
}

export const MaskInput = ({
  mask,
  replacement,
  showMask,
  separate,
  ...rest
}: MaskInputProps) => {
  const inputRef = useMask({
    mask,
    replacement,
    showMask,
    separate,
  })

  return <Input ref={inputRef} {...rest} />
}