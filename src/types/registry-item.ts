import { RegistryTag } from '@/registry/registry-tags'
import { RegistryItem } from 'shadcn/schema'
export type CustomRegistryItem = RegistryItem & {
  meta: {
    tags: RegistryTag[],
    style?: 1 | 2
    originUrl?: string
  }
}
