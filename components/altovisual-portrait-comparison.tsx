"use client"

import { AltovisualPortraitCanvas } from "./altovisual-portrait-canvas"

export function AltovisualPortraitComparison() {
  // Using fixed values as requested
  const contrast = 1.4
  const brightness = 0.7

  return (
    <div className="space-y-4">
      <AltovisualPortraitCanvas width={100} height={120} contrast={contrast} brightness={brightness} />
      <div className="text-center text-xs text-muted-foreground mt-2">Altovisual Art Portrait</div>
    </div>
  )
}