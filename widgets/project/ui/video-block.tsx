'use client'
import { useState } from "react"
import { Button } from "@/shared/ui/button"
import { Typography } from "@/shared/ui/typography"
import Image from "next/image"
import PlayIcon from '@/shared/assets/icons/play.svg'
import videoPreview from '@/shared/assets/images/project/video-preview.jpg'
import styles from './project.module.scss'
import { VideoPlayer } from "@/features/video-player"

export const VideoBlock = () => {
    const [isOpen, setIsOpen] = useState(false)

    return <div>
        <div className={styles.project__videoBlock}>
            <div className={styles.project__videoBlockInfo}>
                <Typography className={styles.project__videoBlockLabel} variant='body' uppercase>
                    ВИДЕО о ПРОЕКТЕ
                </Typography>
                <Typography className={styles.project__videoBlockTime} variant='body'>
                   <time>1:25</time> минут
                </Typography>
            </div>
            <div className={styles.project__videoBlockLine} />
            <div>
                <Button className={styles.project__videoBlockButton} variant='ghost' onClick={() => setIsOpen(true)}>
                    <Image width={186} height={186} alt="ВИДЕО о ПРОЕКТЕ" src={videoPreview} />
                    <span className={styles.project__videoBlockPlay}>
                        <PlayIcon /> PLAY
                    </span>
                </Button>
            </div>
        </div>
        <VideoPlayer
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            src="/videos/Mantera_promo_768.mp4"
            srcWebm="/videos/Mantera_promo_768.webm"
        />
    </div>
}