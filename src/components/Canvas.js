import { useEffect, useRef, useCallback } from "react";

const Canvas = props => {

  const draw = useCallback(ctx => {
    ctx.fillStyle = '#800080'
    ctx.fillRect(100, 100, 20, 20)
  }, [])

  const canvasRef = useRef(null)

  useEffect(()=> {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    const dpr = window.devicePixelRatio || 1
    const rect = canvas.getBoundingClientRect()
    context.canvas.width = rect.width * dpr
    context.canvas.height = rect.height * dpr

    context.scale(dpr, dpr)
    context.fillStyle = '#202028'
    context.fillRect(0, 0, context.canvas.width, context.canvas.height)

    draw(context)
  }, [draw])

  return <canvas ref={canvasRef} {...props}></canvas>
}

export default Canvas



/* 
Create hook for rendering canvas: https://gist.github.com/IcanDivideBy0/23552eb3aa196a9049670686d13de9de
*/