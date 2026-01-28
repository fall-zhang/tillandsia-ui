'use client'
import React, { useState, useRef, KeyboardEvent, ChangeEvent, useEffect } from 'react'
// 定义 Tag 的类型
export interface Tag {
  id: string;
  text: string;
}

// 定义组件的 Props
interface TagInputProps {
  initialTags?: Tag[];
  placeholder?: string;
  maxTags?: number;
  allowedPattern?: RegExp;
  onTagsChange?: (tags: Tag[]) => void;
  className?: string;
  disabled?: boolean;
}

const TagInput: React.FC<TagInputProps> = ({
  initialTags = [],
  placeholder = '输入标签后按回车或逗号...',
  maxTags = 10,
  allowedPattern = /^[a-zA-Z0-9\u4e00-\u9fa5\-_]+$/,
  onTagsChange,
  className = '',
  disabled = false
}) => {
  // 状态管理
  const [tags, setTags] = useState<Tag[]>(initialTags)
  const [inputValue, setInputValue] = useState<string>('')
  const [error, setError] = useState<string>('')
  const inputRef = useRef<HTMLInputElement>(null)

  // 当初始标签变化时更新状态
  useEffect(() => {
    setTags(initialTags)
  }, [initialTags])

  // 当标签变化时调用回调函数
  useEffect(() => {
    if (onTagsChange) {
      onTagsChange(tags)
    }
  }, [tags, onTagsChange])

  // 生成唯一ID
  const generateId = () => {
    return Date.now().toString(36) + Math.random().toString(36).substr(2)
  }

  // 添加标签
  const addTag = (text: string) => {
    const trimmedText = text.trim()

    if (!trimmedText) {
      setError('标签内容不能为空')
      return
    }

    if (tags.length >= maxTags) {
      setError(`最多只能添加 ${maxTags} 个标签`)
      return
    }

    if (!allowedPattern.test(trimmedText)) {
      setError('标签包含无效字符')
      return
    }

    // 检查是否已存在相同标签
    if (tags.some(tag => tag.text.toLowerCase() === trimmedText.toLowerCase())) {
      setError('标签已存在')
      return
    }

    const newTag: Tag = {
      id: generateId(),
      text: trimmedText
    }

    setTags([...tags, newTag])
    setInputValue('')
    setError('')
  }

  // 删除标签
  const removeTag = (id: string) => {
    if (disabled) return
    setTags(tags.filter(tag => tag.id !== id))
  }

  // 处理输入变化
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
    setError('')
  }

  // 处理键盘事件
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (disabled) return

    // 按回车、逗号或空格添加标签
    if (e.key === 'Enter' || e.key === ',' || e.key === ' ') {
      e.preventDefault()
      if (inputValue.trim()) {
        addTag(inputValue)
      }
    }

    // 按退格键删除最后一个标签
    if (e.key === 'Backspace' && !inputValue && tags.length > 0) {
      const lastTag = tags[tags.length - 1]
      removeTag(lastTag.id)
    }
  }

  // 处理输入框失去焦点
  const handleBlur = () => {
    if (inputValue.trim()) {
      addTag(inputValue)
    }
  }

  // 清空所有标签
  const clearAllTags = () => {
    if (disabled) return
    setTags([])
    setError('')
  }

  return (
    <div className={`w-full ${className}`}>
      {/* 标签输入容器 */}
      <div
        className={`
          w-full border rounded-lg p-2 min-h-12 transition-all duration-200
          ${disabled
      ? 'bg-gray-100 border-gray-300 cursor-not-allowed'
      : 'bg-white border-gray-300 hover:border-blue-400 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200'
    }
          ${error ? 'border-red-500 focus-within:border-red-500 focus-within:ring-red-200' : ''}
        `}
        onClick={() => !disabled && inputRef.current?.focus()}
      >
        {/* 标签列表 */}
        <div className="flex flex-wrap gap-2 mb-2">
          {tags.map(tag => (
            <div
              key={tag.id}
              className={`
                inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium
                ${disabled
              ? 'bg-gray-300 text-gray-600'
              : 'bg-blue-100 text-blue-800 hover:bg-blue-200'
            }
              `}
            >
              <span>{tag.text}</span>
              {!disabled && (
                <button
                  type="button"
                  onClick={() => removeTag(tag.id)}
                  className="w-5 h-5 flex items-center justify-center rounded-full hover:bg-blue-300 transition-colors"
                  aria-label={`删除标签 ${tag.text}`}
                >
                  ×
                </button>
              )}
            </div>
          ))}

          {/* 输入框 */}
          {tags.length < maxTags && (
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              onBlur={handleBlur}
              placeholder={tags.length === 0 ? placeholder : ''}
              disabled={disabled}
              className={`
                flex-1 min-w-[120px] px-2 py-1 outline-none
                ${disabled ? 'bg-gray-100 cursor-not-allowed' : 'bg-transparent'}
                ${tags.length === 0 ? 'w-full' : ''}
              `}
            />
          )}
        </div>
        {/* 底部信息栏 */}
        <div className="flex justify-between items-center px-1 text-xs text-gray-500">
          <div>
            {error && (
              <span className="text-red-500 font-medium">{error}</span>
            )}
          </div>
          <div className="flex gap-4">
            <span>
              {tags.length} / {maxTags}
            </span>
            {!disabled && tags.length > 0 && (
              <button
                type="button"
                onClick={clearAllTags}
                className="text-gray-500 hover:text-red-500 transition-colors"
              >
                清空所有
              </button>
            )}
          </div>
        </div>
      </div>
      {/* 使用说明 */}
      <div className="mt-2 text-xs text-gray-500">
        提示：输入标签后按回车、逗号或空格添加，点击标签上的×删除，按退格键可删除最后一个标签
      </div>
    </div>
  )
}

export default TagInput
