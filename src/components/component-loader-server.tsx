import { FC, useState, useEffect, Suspense, lazy, ComponentType } from 'react'


import type { RegistryItem } from 'shadcn/registry'

interface ComponentLoaderProps {
  component: RegistryItem
}
const compoMap = import.meta.glob('@/registry/default/components/*.tsx')
// const Component = lazy(() => import('@/registry/default/components/'))

export default function ComponentLoader ({
  component,
}: ComponentLoaderProps) {
  const [CurrentCompo, setCurrentCompo] = useState<FC>()
  useEffect(() => {
    // const CurrentCompo = lazy(compoMap[`/src/registry/default/components/${component.name}.tsx`] as () => Promise<{ default: ComponentType<any> }>)
    // setCurrentCompo(CurrentCompo)
    let isDestroy = false
    async function loadComp () {
      const Component = await import(`@/registry/default/components/${component.name}.tsx`)
      if (isDestroy) {
        return
      }
      setCurrentCompo(() => Component.default)
    }
    loadComp()
    return () => {
      isDestroy = true
    }
  }, [component.name])

  if (!CurrentCompo) {
    return
  }
  try {
    // const Component = lazy(() => import('@/registry/default/components/comp-267'))
    return <Suspense fallback={<>查找中</>}>
      {/* <Component></Component> */}
      <CurrentCompo />
    </Suspense>
    // return <Component {...(props as TProps)} currentPage={1} totalPages={10} />
  } catch (error) {
    console.error(`Failed to load component ${component.name}:`, error)
    return <></>
  }
}

function EmptyFC () {
  return <div></div>
}
