"use client"

import { useEffect, useRef } from 'react'

interface Drop {
  x: number
  y: number
  speed: number
  chars: string[]
  opacity: number
}

export function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Matrix characters - mix of code symbols, numbers, and programming characters
    const chars = '01ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()_+-=[]{}|;:,.<>?/~`!{}[]()<>+=*&^%$#@!?/\\|'
    const charArray = chars.split('')

    const fontSize = 16
    const columns = Math.floor(canvas.width / fontSize)

    // Array to store drops with more properties
    const drops: Drop[] = []

    // Initialize drops
    for (let i = 0; i < columns; i++) {
      drops[i] = {
        x: i * fontSize,
        y: Math.random() * canvas.height,
        speed: Math.random() * 3 + 1,
        chars: [],
        opacity: Math.random() * 0.5 + 0.5
      }

      // Initialize character trail for each drop
      for (let j = 0; j < 20; j++) {
        drops[i].chars[j] = charArray[Math.floor(Math.random() * charArray.length)]
      }
    }

    const draw = () => {
      // Create trailing effect with slight transparency
      ctx.fillStyle = 'rgba(0, 0, 0, 0.08)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw each drop
      for (let i = 0; i < drops.length; i++) {
        const drop = drops[i]

        // Draw character trail
        for (let j = 0; j < drop.chars.length; j++) {
          const charY = drop.y - (j * fontSize)

          if (charY > 0 && charY < canvas.height) {
            // Calculate opacity based on position in trail with max 0.5 opacity
            const trailOpacity = (1 - j / drop.chars.length) * drop.opacity * 0.5

            // Brightest character at the head (light gray)
            if (j === 0) {
              ctx.fillStyle = `rgba(200, 200, 200, ${trailOpacity})`
            } else if (j < 3) {
              ctx.fillStyle = `rgba(160, 160, 160, ${trailOpacity})`
            } else {
              ctx.fillStyle = `rgba(120, 120, 120, ${trailOpacity * 0.8})`
            }

            ctx.font = `${fontSize}px "JetBrains Mono", monospace`
            ctx.fillText(drop.chars[j], drop.x, charY)
          }
        }

        // Move drop down
        drop.y += drop.speed

        // Randomly change characters
        if (Math.random() > 0.98) {
          for (let j = 0; j < drop.chars.length; j++) {
            if (Math.random() > 0.5) {
              drop.chars[j] = charArray[Math.floor(Math.random() * charArray.length)]
            }
          }
        }

        // Reset drop when it goes off screen
        if (drop.y > canvas.height + fontSize * drop.chars.length) {
          drop.y = -fontSize * drop.chars.length
          drop.speed = Math.random() * 3 + 1
          drop.opacity = Math.random() * 0.5 + 0.5

          // Randomize start time
          if (Math.random() > 0.95) {
            drop.y = Math.random() * canvas.height
          }
        }
      }
    }

    // Animation loop - slower for better performance
    const interval = setInterval(draw, 60)

    return () => {
      clearInterval(interval)
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0"
      style={{
        background: 'radial-gradient(ellipse at center, #111111 0%, #000000 70%)',
      }}
      aria-hidden="true"
    />
  )
}