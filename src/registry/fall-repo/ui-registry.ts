import { CustomRegistryItem } from '@/types/registry-item'

// type RegistryItem = {
//   name: string
//   id: string
//   type: 'registry:component'
//   registryDependencies: string[] // 需要的 shadcn 依赖
//   dependencies?: string[] // npm 需要的 dependencies 依赖
//   devDependencies?: string[] // npm 需要的 devDependencies 依赖
//   entryPath: string
//   relativeFiles: {
//     path: string
//     type: 'component' | 'hook'
//   }[]
//   // componentEntry:FC
//   // files:any
//   meta: {
//     tags: RegistryTag[]
//     style?: 1 | 2
//     colSpan?: 2 | 3
//   }
// }

const uiRegistry: CustomRegistryItem[] = []
