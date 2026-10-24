"use client"

import { useEffect, useRef, useState, type KeyboardEvent } from "react"
import useEmblaCarousel from "embla-carousel-react"
import AutoScroll from "embla-carousel-auto-scroll"
import { Pause, Play } from "lucide-react"
import { photos } from "../lib/photos"
import styles from "./photo-carousel.module.css"

export function PhotoCarousel() {
  const [autoScroll] = useState(() => AutoScroll({
    speed: 0.8,
    startDelay: 1000,
    playOnInit: false,
    stopOnInteraction: true,
    stopOnFocusIn: false,
  }))
  const [viewportRef, carousel] = useEmblaCarousel({ align: "start", loop: true, dragFree: true }, [autoScroll])
  const [isPlaying, setIsPlaying] = useState(false)
  const wantsToPlay = useRef(true)

  useEffect(() => {
    if (!carousel) return
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)")
    if (motion.matches) wantsToPlay.current = false
    const onPlay = () => setIsPlaying(true)
    const onStop = () => setIsPlaying(false)
    const onInteraction = () => {
      wantsToPlay.current = false
      autoScroll.stop()
    }
    const syncPlayback = () => {
      if (document.hidden || !wantsToPlay.current) autoScroll.stop()
      else autoScroll.play()
    }
    const onMotionChange = () => {
      if (motion.matches) onInteraction()
    }
    carousel.on("autoScroll:play", onPlay).on("autoScroll:stop", onStop)
    carousel.on("pointerDown", onInteraction).on("reInit", syncPlayback)
    document.addEventListener("visibilitychange", syncPlayback)
    motion.addEventListener("change", onMotionChange)
    syncPlayback()
    return () => {
      carousel.off("autoScroll:play", onPlay).off("autoScroll:stop", onStop)
      carousel.off("pointerDown", onInteraction).off("reInit", syncPlayback)
      document.removeEventListener("visibilitychange", syncPlayback)
      motion.removeEventListener("change", onMotionChange)
      autoScroll.stop()
    }
  }, [carousel, autoScroll])

  function pause() {
    wantsToPlay.current = false
    autoScroll.stop()
  }

  function togglePlayback() {
    if (autoScroll.isPlaying()) pause()
    else {
      wantsToPlay.current = true
      autoScroll.play(0)
    }
  }

  function prefersReducedMotion() {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (!carousel || event.target !== event.currentTarget) return
    const jump = prefersReducedMotion()
    switch (event.key) {
      case "ArrowLeft": carousel.scrollPrev(jump); break
      case "ArrowRight": carousel.scrollNext(jump); break
      case "Home": carousel.scrollTo(0, jump); break
      case "End": carousel.scrollTo(photos.length - 1, jump); break
      default: return
    }
    event.preventDefault()
  }

  return (
    <div className={styles.carousel} role="region" aria-roledescription="carousel" aria-label="Professional photos">
      <div id="professional-photos" className={styles.viewport} ref={viewportRef} tabIndex={0} onFocus={pause} onKeyDown={handleKeyDown} aria-label="Photo gallery. Automatic scrolling pauses when you focus or drag the gallery. Use the left and right arrow keys to browse.">
        <div className={styles.track}>
          {photos.map((photo, index) => (
            <div className={styles.slide} key={photo.src} role="group" aria-roledescription="slide" aria-label={`${index + 1} of ${photos.length}`}>
              <img
                className={styles.photo}
                src={photo.src}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                loading={index < 3 ? "eager" : "lazy"}
                fetchPriority={index === 0 ? "high" : "auto"}
                decoding="async"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
      <button className={styles.playback} type="button" aria-label={isPlaying ? "Pause photo scrolling" : "Play photo scrolling"} aria-controls="professional-photos" disabled={!carousel} onClick={togglePlayback}>
        {isPlaying ? <Pause size={14} aria-hidden="true" /> : <Play size={14} aria-hidden="true" />}
        {isPlaying ? "Pause" : "Play"}
      </button>
    </div>
  )
}
