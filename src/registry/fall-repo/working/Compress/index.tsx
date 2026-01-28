/* eslint-disable @next/next/no-img-element */
import React, { DOMAttributes, FC, ReactNode, useRef, useState } from 'react'
import type { MouseEvent } from 'react'
import { Button } from '@/registry/default/ui/button'
import { cn } from '@/registry/default/lib/utils'

/**
 * 实现图片压缩
 * @returns ReactNode
 */
const PicCompress: React.FC = () => {
  const [filePath, setFilePath] = useState('')
  const [fileList, setFileList] = useState<FileList>()
  // const fileRef = useRef<HTMLInputElement>(null)
  const oldFilePath = useRef('')
  function onChangePic (file: any) {
    const fileReader = new FileReader()
    if (oldFilePath.current !== file.name) {
      oldFilePath.current = file.name
      fileReader.readAsDataURL(file.originFileObj || file)
      fileReader.onload = function () {
        setFilePath(fileReader.result as string)
      }
    }
  }
  function onFileChange (ev:FileList) {
    setFileList(ev)
    // console.log(ev);
    onChangePic(ev[0])
  }
  function onPreview (file: any) {
    // console.log(file);
    onChangePic(file)
  }
  function onDownloadPic () {
    const MAX_WIDTH = 800 // 图片最大宽度
    compress(filePath, 60, 'image/png').then(res => {
      const link = document.createElement('a')
      link.href = res as string
      link.download = '文件名称.jpg'
      link.click()
      link.remove()
    })
    function compress (base64: string, quality: number, mimeType: string) {
      const canvas = document.createElement('canvas')
      const img = document.createElement('img')
      img.crossOrigin = 'anonymous'
      return new Promise((resolve, reject) => {
        img.src = base64
        img.onload = () => {
          let targetWidth = 0; let targetHeight = 0
          if (img.width > MAX_WIDTH) {
            targetWidth = MAX_WIDTH
            targetHeight = (img.height / img.width) * MAX_WIDTH
          } else {
            targetWidth = img.width
            targetHeight = img.height
          }
          canvas.width = targetWidth
          canvas.height = targetHeight
          const ctx = canvas.getContext('2d')!
          ctx.clearRect(0, 0, targetWidth, targetHeight) // 清除画布
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
          const imageData = canvas.toDataURL(mimeType, quality / 100)
          resolve(imageData)
        }
      })
    }
  }
  return (<div>
    当前文件：
    <FormItemUpload
      onChange={onFileChange}>
      <Button >上传文件</Button>
    </FormItemUpload>
    <img className="max-width: 600px;max-height: 480px;" src={filePath}></img>
    <Button onClick={onDownloadPic}>压缩图片下载</Button>
  </div>)
}
export default PicCompress


const FormItemUpload:FC<{
  children:ReactNode
  disable?:boolean
  className?:string
  accept?:DOMAttributes<'accept'>
  onChange(newFileList:FileList):void
}> = ({ children, className, onChange, disable }) => {
  const uploadButtonRef = useRef<HTMLInputElement>(null)
  function onUploadFile (ev:MouseEvent) {
    ev.stopPropagation()
    if (disable) return
    if (!uploadButtonRef.current) {
      return
    }
    uploadButtonRef.current.click()
  }
  function onChangeFile () {
    const files = uploadButtonRef.current?.files
    if (!files || files?.length === 0) {
      return
    }
    onChange(files)
  }
  return <div className={cn(' touch-none none', className)} onClick={onUploadFile} aria-disabled={disable} >
    {children}
    <input type="file" className='hidden' ref={uploadButtonRef} onChange={onChangeFile} disabled={disable}/>
  </div>
}
