import { RegistryItem } from 'shadcn/registry'
interface FallRegistryItem extends RegistryItem{
  meta:{
    desc:string
    tags:string[],
    colSpan?: 1 | 2 | 3
    style?: 1 | 2
    originUrl?:string
  }
}
export interface ComponentCategory {
  slug: string
  name: string
  zhName?:string
  components: FallRegistryItem []
  isNew?: boolean
}

export const categories: ComponentCategory[] = [
  {
    slug: 'accordion',
    name: 'Accordion',
    components: [
      {
        name: 'accordion/normal',
        type: 'registry:lib',
        meta: {
          desc: '',
          tags: ['alert', 'warning'],
          colSpan: 2
        }
      }
    ]
  },
  {
    slug: 'background',
    name: 'Background',
    components: [
      {
        name: 'background/beam-bg',
        type: 'registry:lib',
        meta: {
          desc: '',
          tags: ['alert', 'warning'],
          colSpan: 2
        }
      },
      {
        name: 'background/path-bg',
        type: 'registry:lib',
        meta: {
          desc: '',
          tags: ['alert', 'warning'],
          colSpan: 2
        }
      }
    ]
  }
]

export function getCategory (slug: string): ComponentCategory | undefined {
  return categories.find((category) => category.slug === slug)
}
