import { ComponentType } from 'react'
import type { RegistryItem } from 'shadcn/registry'

interface ComponentLoaderProps {
  component: RegistryItem
}

export default async function ComponentLoader<TProps extends object> ({
  component,
  ...props
}: ComponentLoaderProps & TProps) {
  if (!component?.name) {
    return null
  }

  try {
    const Comp = await import('@/registry/fall-repo/comp-tree/' + component.name)
    console.log(`@/registry/default/comp-tree/${component.name}`)
    const FallComponent = Comp.default as ComponentType<TProps>
    return <FallComponent {...(props as TProps)} currentPage={1} totalPages={10} />
  } catch (error) {
    console.error(`Failed to load component ${component.name}:`, error)
    return null
  }
}
