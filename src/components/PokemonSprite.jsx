import { useEffect, useRef } from 'react'
import { removeWhiteBackground } from '../utils/removeWhiteBackground'

export default function PokemonSprite({ src, alt, className = '' }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const img = new Image()
    img.src = src
    img.onload = () => {
      canvas.width = img.naturalWidth
      canvas.height = img.naturalHeight
      const ctx = canvas.getContext('2d')
      ctx.drawImage(img, 0, 0)
      removeWhiteBackground(canvas)
    }
  }, [src])

  return <canvas ref={canvasRef} className={`oak-image ${className}`} aria-label={alt} />
}
