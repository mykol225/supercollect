import { useEffect, useRef, useCallback } from "react";
import { useRect } from "../hooks/useRect";

const Canvas = props => {
  // hook to get current.rect object on window resize event
  const [rect, ref] = useRect()

  const draw = useCallback(ctx => {
    ctx.fillStyle = '#800080'
    ctx.fillRect(100, 100, 20, 20)
  }, [])

  // update canvas whenever draw or rect changes 
  useEffect(()=> {
    const canvas = ref.current
    const context = canvas.getContext('2d')
    const dpr = window.devicePixelRatio || 1
    const rect = canvas.getBoundingClientRect()
    context.canvas.width = rect.width * dpr
    context.canvas.height = rect.height * dpr

    context.scale(dpr, dpr)
    context.fillStyle = '#1a1b25'
    context.fillRect(0, 0, context.canvas.width, context.canvas.height)

    draw(context)
  }, [rect, draw])

  return <canvas ref={ref} {...props}></canvas>
}

export default Canvas