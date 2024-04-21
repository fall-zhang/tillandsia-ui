module.exports = {
  env: {
    browser: true,
    es2022: true,
    node: true
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'eslint-config-standard', 'plugin:@typescript-eslint/recommended', 'next/core-web-vitals'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    // js
    'no-else-return': 2, // 如果 if 语句里面有 return ,后面不能跟 else 语句
    'arrow-body-style': 0,
    'jsx-a11y/label-has-for': 0,
    'max-lines-per-function': [
      2,
      { max: 320, skipComments: true, skipBlankLines: true }
    ],
    semi: [2, 'never'], // 语句不使用分号结尾
    'no-confusing-arrow': 0,
    indent: [1, 2], // 两个空格表示换行
    'no-nested-ternary': 0,
    'no-console': 1,
    'no-debugger': 1, // 使用 debugger 会警告
    'no-multiple-empty-lines': [2, { max: 2 }], // 空行最多不能超过2行
    'no-multi-spaces': 2, // 不能用多余的空格
    'no-trailing-spaces': 2, // 一行结束后面不要有空格
    'eol-last': 0, // 文件以单一的换行符结束
    eqeqeq: 1, // 必须使用全等
    'no-proto': 1, // 禁止使用__proto__属性
    'no-sparse-arrays': 2, // 禁止稀疏数组， [1,,2]
    quotes: [1, 'single'], // 引号类型 `` "" ''
    'comma-dangle': ['error', 'never'], // 最后一个属性不允许有逗号
    'no-param-reassign': [
      2,
      { props: true, ignorePropertyModificationsFor: ['draft'] }
    ],
    // react
    'react/no-this-in-sfc': 0,
    'react/prop-types': 0,
    'react/display-name': 'off',
    'react/jsx-uses-react': 'off', // React ^16.14.0 以及 V17 以后将支持新的语法转换器
    'react/react-in-jsx-scope': 'off', // 新的语法转换器不必引入 React
    // typescript
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-this-alias': 'off'

  }
}
