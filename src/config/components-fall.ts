import { RegistryItem } from 'shadcn/registry'

export interface ComponentCategory {
  slug: string
  name: string
  zhName?:string
  components: RegistryItem []
  isNew?: boolean
}

export const categories: ComponentCategory[] = [
  {
    slug: 'accordion',
    name: 'Accordion',
    components: [
      {
        // name: 'comp-09',
        name: 'accordion/normal',
        type: 'registry:lib',
        meta:{
          tag:[]
        },
      }
    ]
  }
]

export function getCategory (slug: string): ComponentCategory | undefined {
  return categories.find((category) => category.slug === slug)
}
