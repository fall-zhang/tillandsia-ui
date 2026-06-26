import { CustomRegistryItem } from '@/types/registry-item'

export interface ComponentCategory {
  slug: string
  name: string
  zhName?: string
  components: CustomRegistryItem []
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
          tags: ['alert', 'warning'],
        },
      },
    ],
  },
]

export function getCategory (slug: string): ComponentCategory | undefined {
  return appShellCategories.find((category) => category.slug === slug)
}
