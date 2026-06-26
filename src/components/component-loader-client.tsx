'use client'

import { Suspense, useEffect, FC, useState } from 'react'
import { LoaderCircleIcon } from 'lucide-react'
import type { RegistryItem } from 'shadcn/schema'


interface ComponentLoaderProps {
  component: RegistryItem
}

export default function ComponentLoader<TProps extends object> ({
  component,
  ...props
}: ComponentLoaderProps & TProps) {
  const [CurrentCompo, setCurrentCompo] = useState<FC>()

  useEffect(() => {
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
  if (!component.files?.length) {
    return <></>
  }
  if (!CurrentCompo) {
    return <></>
  }
  // const path = component.files[0].path
  // const newPath = path.replace('registry/', '')
  // const Component = React.lazy(
  //   () => import(`@/registry/${newPath}.tsx`)
  // ) as ComponentType<TProps>

  return <Suspense fallback={<div
    data-comp-loading="true"
    className="peer flex min-h-20 items-center justify-center"
  >
    <span className="sr-only">Loading component...</span>
    <LoaderCircleIcon
      className="text-input -ms-1 animate-spin"
      size={24}
      aria-hidden="true"
    />
  </div>}>
    <CurrentCompo {...(props as TProps)} />
  </Suspense>
}
