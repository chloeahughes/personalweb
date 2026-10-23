"use client"

import { useEffect, useRef } from "react"
import styles from "./plus-background.module.css"

type Plus = { x: number; y: number; size: number }

export function PlusBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas?.getContext("2d")
    if (!canvas || !context) return

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)")
    let points: Plus[] = []
    let pointer: { x: number; y: number } | null = null
    let frame = 0
    let lastTime = 0
    let width = 0
    let height = 0

    function draw(time: number) {
      frame = 0
      const elapsed = lastTime ? Math.min(time - lastTime, 50) : 16
      lastTime = time
      const ease = 1 - Math.exp(-elapsed / 70)
      let moving = false
      context!.clearRect(0, 0, width, height)
      context!.strokeStyle = "#d9b82e"
      context!.lineWidth = 1.3
      context!.lineCap = "round"

      for (const point of points) {
        const distance = pointer ? Math.hypot(pointer.x - point.x, pointer.y - point.y) : Infinity
        const proximity = reducedMotion.matches ? 0 : Math.max(0, 1 - distance / 130)
        const target = 3 + 8 * proximity * proximity
        point.size += (target - point.size) * ease
        if (Math.abs(target - point.size) > 0.02) moving = true
        else point.size = target

        context!.globalAlpha = 0.45 + (point.size - 3) / 8 * 0.35
        context!.beginPath()
        context!.moveTo(point.x - point.size, point.y)
        context!.lineTo(point.x + point.size, point.y)
        context!.moveTo(point.x, point.y - point.size)
        context!.lineTo(point.x, point.y + point.size)
        context!.stroke()
      }

      if (moving) frame = requestAnimationFrame(draw)
      else lastTime = 0
    }

    function scheduleDraw() {
      if (!frame) frame = requestAnimationFrame(draw)
    }

    function resize() {
      width = canvas!.clientWidth
      height = canvas!.clientHeight
      const ratio = Math.min(window.devicePixelRatio || 1, 2)
      canvas!.width = Math.round(width * ratio)
      canvas!.height = Math.round(height * ratio)
      context!.setTransform(ratio, 0, 0, ratio, 0, 0)
      points = []
      const spacing = width < 600 ? 72 : 84
      for (let y = 32, row = 0; y < height; y += spacing, row++) {
        for (let x = 28 + (row % 2) * spacing / 2; x < width; x += spacing) {
          points.push({ x, y, size: 3 })
        }
      }
      scheduleDraw()
    }

    function move(event: PointerEvent) {
      if (event.pointerType === "touch" || reducedMotion.matches) return
      pointer = { x: event.clientX, y: event.clientY }
      scheduleDraw()
    }

    function reset() {
      pointer = null
      scheduleDraw()
    }

    const observer = new ResizeObserver(resize)
    observer.observe(canvas)
    resize()
    window.addEventListener("pointermove", move, { passive: true })
    window.addEventListener("blur", reset)
    document.documentElement.addEventListener("pointerleave", reset)
    reducedMotion.addEventListener("change", reset)

    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
      window.removeEventListener("pointermove", move)
      window.removeEventListener("blur", reset)
      document.documentElement.removeEventListener("pointerleave", reset)
      reducedMotion.removeEventListener("change", reset)
    }
  }, [])

  return <canvas ref={canvasRef} className={styles.background} aria-hidden="true" />
}
