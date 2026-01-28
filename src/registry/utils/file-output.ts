const fs = require('fs')
const path = require('path')

// 转换函数：将 sex 属性改为 gender
function transformArray (array) {
  return array.map(item => {
    // 创建新对象，保留其他所有属性
    const { sex, ...rest } = item
    return {
      ...rest,
      gender: sex, // 将 sex 的值赋给 gender
    }
  })
}

// 生成 TypeScript 文件内容
function generateTypeScriptFile (array, variableName = 'transformedData') {
  const typeDefinition = `interface TransformedItem {
  name: string;
  gender: number;
  [key: string]: any;  // 保留其他可能存在的属性
}`

  const dataString = JSON.stringify(array, null, 2)

  return `${typeDefinition}

const ${variableName}: TransformedItem[] = ${dataString};

export default ${variableName};
export type { TransformedItem };`
}

// 主函数
async function main () {
  try {
    // 示例输入数据
    const inputData = [
      { name: '张三', sex: 1, age: 25 }, // 添加额外属性测试
      { name: '李四', sex: 2, city: '北京' }, // 添加额外属性测试
      { name: '王五', sex: 1 },
      { name: '赵六', sex: 2, email: 'zhao@example.com' },
    ]

    // 转换数据
    const transformedData = transformArray(inputData)
    console.log('转换后的数据:')
    console.log(transformedData)

    // 生成 TypeScript 文件内容
    const tsContent = generateTypeScriptFile(transformedData, 'userData')

    // 输出文件路径（当前目录下）
    const outputPath = path.join(__dirname, 'output.ts')

    // 写入文件
    fs.writeFileSync(outputPath, tsContent, 'utf8')

    console.log(`\n✅ TypeScript 文件已生成: ${outputPath}`)
    console.log(`📁 文件大小: ${tsContent.length} 字节`)

    // 显示生成的文件内容预览
    console.log('\n📄 文件内容预览:')
    console.log('='.repeat(50))
    console.log(tsContent.substring(0, 500) + '...')
    console.log('='.repeat(50))
  } catch (error) {
    console.error('❌ 发生错误:', error)
  }
}

// 运行主函数
if (require.main === module) {
  main()
}

// 导出函数供其他模块使用
module.exports = {
  transformArray,
  generateTypeScriptFile,
}
