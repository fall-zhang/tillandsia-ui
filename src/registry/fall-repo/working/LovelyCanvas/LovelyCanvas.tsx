import React, { useEffect, useRef } from 'react'
function findRandom (num1: number, num2: number) {
  return Math.random() * (num2 - num1) + num1
}
class LoveCanvasRun {
  x = 0
  y = 0
  size = 0
  size_change = 0
  opacity = 0
  opacity_change = 0
  light = 0
  color = ''
  cavWidth = 680
  cavHeight = 480
  allAttribute = {
    maxNum: 20, // 个数
    colorRange: null,
    start_probability: 0.1, // 如果数量小于num，有这些几率添加一个新的
    size_min: 1, // 初始爱心大小的最小值
    size_max: 2, // 初始爱心大小的最大值
    size_add_min: 0.3, // 每次变大的最小值（就是速度）
    size_add_max: 0.5, // 每次变大的最大值
    opacity_min: 0.3, // 初始透明度最小值
    opacity_max: 0.5, // 初始透明度最大值
    opacity_prev_min: 0.003, // 透明度递减值最小值
    opacity_prev_max: 0.005, // 透明度递减值最大值
    light_min: 0, // 颜色亮度最小值
    light_max: 90, // 颜色亮度最大值
  }

  allElement: Array<any> = []
  ctx:CanvasRenderingContext2D | null
  colorHue = 0
  constructor (canvasDom:HTMLCanvasElement) {
    this.colorHue = findRandom(0, 360)
    const allElement: Array<any> = []
    this.ctx = canvasDom.getContext('2d')
    if (this.ctx === null) {
      return
    }
    const start = () => {
      window.requestAnimationFrame(start)
      this.colorHue += 0.1
      if (this.ctx === null) {
        return
      }
      // 更改背景色 hsl(颜色值，饱和度，亮度)
      this.ctx.fillStyle = 'hsl(' + this.colorHue + ',100%,97%)'
      this.ctx?.fillRect(0, 0, this.cavWidth, this.cavHeight)
      if ((allElement.length < this.allAttribute.maxNum) && (Math.random() < this.allAttribute.start_probability)) {
        allElement.push()
      }
      allElement.forEach((line) => {
        line.to_step()
      })
    }

    this.to_reset()
    start()
  }

  to_reset () {
    this.x = findRandom(0, this.cavWidth)
    this.y = findRandom(0, this.cavHeight)
    this.size = findRandom(this.allAttribute.size_min, this.allAttribute.size_max)
    this.size_change = findRandom(this.allAttribute.size_add_min, this.allAttribute.size_add_max)
    this.opacity = findRandom(this.allAttribute.opacity_min, this.allAttribute.opacity_max)
    this.opacity_change = findRandom(this.allAttribute.opacity_prev_min, this.allAttribute.opacity_prev_max)
    this.light = findRandom(this.allAttribute.light_min, this.allAttribute.light_max)
    this.color = 'hsl(' + this.colorHue + ',100%,' + this.light + '%)'
  }

  to_step () {
    if (!this.ctx) return
    this.opacity -= this.opacity_change
    this.size += this.size_change
    if (this.opacity <= 0) {
      this.to_reset()
      return false
    }
    this.ctx.fillStyle = this.color
    this.ctx.globalAlpha = this.opacity
    this.ctx.beginPath()
    this.arcHeart(this.x, this.y, this.size, this.size)
    this.ctx.closePath()
    this.ctx.fill()
    this.ctx.globalAlpha = 1
  }

  arcHeart (x: number, receiveY: number, receiveZ: number, m: any) {
    if (!this.ctx) return
    let y = receiveY
    let z = receiveZ
    // 绘制爱心图案的方法，参数 x, y 是爱心的初始坐标，z 是爱心的大小，m 是爱心上升的速度
    y -= m * 10
    this.ctx.moveTo(x, y)
    z *= 0.05
    this.ctx.bezierCurveTo(x, y - 3 * z, x - 5 * z, y - 15 * z, x - 25 * z, y - 15 * z)
    this.ctx.bezierCurveTo(x - 55 * z, y - 15 * z, x - 55 * z, y + 22.5 * z, x - 55 * z, y + 22.5 * z)
    this.ctx.bezierCurveTo(x - 55 * z, y + 40 * z, x - 35 * z, y + 62 * z, x, y + 80 * z)
    this.ctx.bezierCurveTo(x + 35 * z, y + 62 * z, x + 55 * z, y + 40 * z, x + 55 * z, y + 22.5 * z)
    this.ctx.bezierCurveTo(x + 55 * z, y + 22.5 * z, x + 55 * z, y - 15 * z, x + 25 * z, y - 15 * z)
    this.ctx.bezierCurveTo(x + 10 * z, y - 15 * z, x, y - 3 * z, x, y)
  }
  destroy(){
      this.ctx  = null
  }
}
export default function () {
  const canvasDOM = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const loveCanvas = new LoveCanvasRun(canvasDOM.current!)

    // 返回一个介于参数 1 和参数 2 之间的随机数
    return () => {
      loveCanvas.destroy()
    }
  }, [])
  return <>
    <canvas ref={canvasDOM} width={960} height={680}></canvas>
  </>
}
