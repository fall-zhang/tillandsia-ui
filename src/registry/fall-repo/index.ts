
/**
 * 所有 shell 内容
 */
export const appShell = import.meta.glob('./app-shell/**/*.tsx')

/** 构成 page 的各个部分 */
export const pageSection = import.meta.glob('./page-section/**/*.tsx')

/**
 * 按照目录进行分类的组件
 */
export const UICompo = import.meta.glob('./page-section/**/*.tsx')
