import { RegistryTag } from "@/registry/registry-tags"

type RegistryItem = {
  name: string
  meta?: {
    colSpan: number
    style: 1 | 2
    tags?: RegistryTag[]
  }
}
