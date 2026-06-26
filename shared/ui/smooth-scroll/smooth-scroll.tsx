'use client'
import { useEffect, useRef } from 'react'
import Scrollbar from 'smooth-scrollbar'

export const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const scrollbar = Scrollbar.init(containerRef.current, {
      damping: 0.08,
      alwaysShowTracks: false,
    })

    return () => {
      scrollbar.destroy()
    }
  }, [])

  return (
    <div ref={containerRef} data-scrollbar style={{ height: '100vh' }}>
      {children}
    </div>
  )
}
