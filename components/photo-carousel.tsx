"use client"

import { useEffect, useState, type KeyboardEvent } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { photos } from "../lib/photos"
import styles from "./photo-carousel.module.css"

export function PhotoCarousel() {
  const [viewportRef, carousel] = useEmblaCarousel({ align: "start", loop: true })
  const [selected, setSelected] = useState(0)

  useEffect(() => {
    if (!carousel) return
    const onSelect = () => setSelected(carousel.selectedScrollSnap())
    onSelect()
    carousel.on("select", onSelect).on("reInit", onSelect)
    return () => {
      carousel.off("select", onSelect).off("reInit", onSelect)
    }
  }, [carousel])

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
      <div id="professional-photos" className={styles.viewport} ref={viewportRef} tabIndex={0} onKeyDown={handleKeyDown} aria-label="Photo gallery. Use the left and right arrow keys to browse.">
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
      <div className={styles.controls}>
        <button type="button" aria-label="Previous photo" aria-controls="professional-photos" disabled={!carousel} onClick={() => carousel?.scrollPrev(prefersReducedMotion())}>
          <ArrowLeft size={17} aria-hidden="true" />
        </button>
        <p className={styles.counter} aria-live="polite" aria-atomic="true"><span className={styles.srOnly}>Photo </span>{selected + 1}<span className={styles.divider} aria-hidden="true">/</span><span className={styles.srOnly}> of </span>{photos.length}</p>
        <button type="button" aria-label="Next photo" aria-controls="professional-photos" disabled={!carousel} onClick={() => carousel?.scrollNext(prefersReducedMotion())}>
          <ArrowRight size={17} aria-hidden="true" />
        </button>
      </div>
    </div>
  )
}
