'use client'
import { useEffect, useRef } from 'react'
/**
* Constructor.
* @param element DOM 为参数
*/
class ShuffleText {
  contentText
  /**
   * The string for random text.
   * 随机的内容。
   * @type {string}
   * @default 'キスト文字列です停止しテキストを設定しますます文字列です'
   */
  sourceRandomCharacter = 'キスト文字列です停止しテキストを設定しますます文字列です'
  /**
   * The string for effect space.
   * 空白に用いる文字列です。
   * 动画初始文字
   * @type {string}
   * @default '-'
   */
  emptyCharacter = '?'
  /**
   * The milli seconds of effect time.
   * エフェクトの実行時間（ミリ秒）です。
   * 动画持续时间
   * @type {number}
   * @default 600
   */
  duration = 600
  _isRunning = false
  _originalStr = ''
  _originalLength = 0
  _timeCurrent = 0
  _timeStart = 0
  _randomIndex: Array<any> = []
  _element: HTMLElement | null
  _requestAnimationFrameId = 0
  constructor (element: HTMLElement) {
    this.contentText = element.textContent
    this.setText(this.contentText ?? '')
    this._element = element
  }

  setText (text: string) {
    this._originalStr = text
    this._originalLength = text.length
  }

  /** Play effect. 再生を開始します。 */
  start () {
    this.stop()
    this._randomIndex = []
    let str = ''
    for (let i = 0; i < this._originalLength; i++) {
      const rate = i / this._originalLength
      this._randomIndex[i] = Math.random() * (1 - rate) + rate
      str += this.emptyCharacter
    }
    this._timeStart = new Date().getTime()
    this._isRunning = true
    this._requestAnimationFrameId = requestAnimationFrame(() => {
      this.__onInterval()
    })
    if (this._element) {
      this._element.textContent = this.contentText
    }
  }

  /** Stop effect. 。 */
  stop () {
    this._isRunning = false
    cancelAnimationFrame(this._requestAnimationFrameId)
  }

  __onInterval () {
    this._timeCurrent = new Date().getTime() - this._timeStart
    const percent = this._timeCurrent / this.duration
    let str = ''
    for (let i = 0; i < this._originalLength; i++) {
      if (percent >= this._randomIndex[i]) {
        str += this._originalStr.charAt(i)
      } else if (percent < this._randomIndex[i] / 3) {
        str += this.emptyCharacter
      } else {
        str += this.sourceRandomCharacter.charAt(Math.floor(Math.random() * this.sourceRandomCharacter.length))
      }
    }
    if (percent > 1) {
      str = this._originalStr
      this._isRunning = false
    }
    if (this._element) {
      this._element.textContent = str
    }
    if (this._isRunning) {
      this._requestAnimationFrameId = requestAnimationFrame(() => {
        this.__onInterval()
      })
    }
  }
}
Object.defineProperty(ShuffleText.prototype, 'isRunning', {
  get () {
    return this._isRunning
  },
  enumerable: false,
  configurable: true
})

const MainPage = () => {
  const shuffleDOM = useRef<HTMLHeadingElement>(null)
  useEffect(() => {
    if (shuffleDOM.current) {
      const shuffle = new ShuffleText(shuffleDOM.current!)
      shuffle.start()
    }
  }, [])
  return <>
    <h2 ref={shuffleDOM}>未来的前端艺术家</h2>
  </>
}

export default MainPage
