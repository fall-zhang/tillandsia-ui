import React, { useRef, useState, useEffect } from 'react'
import styles from './index.module.scss'
import clsx from 'clsx'
import { Button } from '@/registry/default/ui/button'

export default function WaterMarkLayout () {
  const [imageSrc, setImageSrc] = useState('')
  const canvasRef = useRef<HTMLCanvasElement>(null)
  // const slug = useParams()
  // console.log(slug)
  const onSelectFile = (info: any) => {
    if (info.file.status !== 'uploading') {
      if (imageSrc) {
        URL.revokeObjectURL(imageSrc)
      }
      setImageSrc(URL.createObjectURL(info.file.originFileObj))
    }
  }
  const onSaveImage = () => {
    const stx = canvasRef.current?.getContext('2d')
  }
  useEffect(() => {
    const stx = canvasRef.current?.getContext('2d')
    const img = document.createElement('img')
    img.src = imageSrc
    img.onload = () => {
      stx?.drawImage(img, 0, 0)
    }
  }, [imageSrc])
  return (<div className={styles.content}>
    <div className={clsx(styles.left)}>
      {/*   <img src={imageSrc} alt="" style={{ maxHeight: '620px', maxWidth: '600px' }} /> */}
      {imageSrc && <div className={styles.image}>
        <canvas ref={canvasRef} height={'680px'} width={'960px'}></canvas>
      </div>}
      <div style={{ display: 'flex', marginTop: '20px' }}>
        {
          imageSrc
            ? <>
              <input onChange={onSelectFile}>
                <Button >导入新图片</Button>
              </input>
              <Button onClick={onSaveImage}>另存为</Button>
            </>
            : <div className={styles.operation}>
              <Button>请选择文件</Button>
            </div>
        }
      </div>
    </div>
    <WaterMarkConfig className={clsx(styles.right)} />
  </div>)
}

const WaterMarkConfig: React.FC<{ className?: string }> = ({ className }) => {
  const positionArr = {
    x: ['left', 'center', 'right'],
    y: ['top', 'center', 'bottom'],
  }
  return (<form className={className}>

    <div className="">
      水印内容
    </div>
    <div className="">
      水印大小
    </div>
    <span>预设水印</span>
    预设水印一：全局水印，斜方向排列，重复
    预设水印二：全局水印，斜方向排列，重复
    预设水印三：定制水印
    {/* <Form.Item >
      <Button type='primary'>应用</Button>
    </Form.Item> */}
  </form>)
}
