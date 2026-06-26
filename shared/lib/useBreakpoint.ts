'use client'
import { useEffect, useState } from 'react'
import { breakpoints } from './breakpoints'

type Breakpoint = keyof typeof breakpoints

function getBreakpoint(width: number): Breakpoint {
  for (const [name, { min, max }] of Object.entries(breakpoints) as [Breakpoint, { min: number; max: number | null }][]) {
    if (width >= min && (max === null || width <= max)) return name
  }
  return 'desktop'
}

export function useBreakpoint() {
  const [bp, setBp] = useState<Breakpoint | null>(null)

  useEffect(() => {
    const handler = () => setBp(getBreakpoint(window.innerWidth))
    handler()
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])

  return {
    bp,
    isMobile:         bp === 'mobile',
    isTablet:         bp === 'tablet',
    isNotebook:       bp === 'notebook',
    isDesktop:        bp === 'desktop',
    isWide:           bp === 'wide',
    isMobileOrTablet: bp === 'mobile' || bp === 'tablet',
  }
}
