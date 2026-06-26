'use client'
import { useEffect, useRef } from 'react'
import { Modal } from '@/shared/ui/modal'
import styles from './video-player.module.scss'

interface VideoPlayerProps {
  isOpen: boolean
  onClose: () => void
  src: string
  srcWebm?: string
}

export const VideoPlayer = ({ isOpen, onClose, src, srcWebm }: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (isOpen && videoRef.current) {
      videoRef.current.currentTime = 0
      videoRef.current.play().catch(() => {})
    } else if (!isOpen && videoRef.current) {
      videoRef.current.pause()
    }
  }, [isOpen])

  return (
    <Modal isOpen={isOpen} onClose={onClose} variant="video">
      <video ref={videoRef} className={styles.video} controls playsInline>
        {srcWebm && <source src={srcWebm} type="video/webm" />}
        <source src={src} type="video/mp4" />
      </video>
    </Modal>
  )
}
