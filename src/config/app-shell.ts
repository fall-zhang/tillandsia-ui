import { RegistryItem } from 'shadcn/registry'
interface FallRegistryItem extends RegistryItem{
  meta:{
    tags:string[],
    style?: 1 | 2
    originUrl:string
  }
}
export interface ComponentCategory {
  slug: string
  name: string
  zhName?:string
  components: FallRegistryItem []
  isNew?: boolean
}

export const appShellCategories: ComponentCategory[] = [
  {
    slug: 'accordion',
    name: 'Accordion',
    components: [
      {
        // name: 'comp-09',
        name: 'accordion/normal',
        type: 'registry:lib',
        meta: {
          originUrl: '',
          tags: ['alert', 'warning']
        }
      }
    ]
  }
]

export function getCategory (slug: string): ComponentCategory | undefined {
  return appShellCategories.find((category) => category.slug === slug)
}
