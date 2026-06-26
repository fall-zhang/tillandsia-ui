'use client'

import React, { ComponentType, Suspense } from 'react'
import { LoaderCircleIcon } from 'lucide-react'
import type { RegistryItem } from 'shadcn/registry'


interface ComponentLoaderProps {
  component: RegistryItem
}

export default function ComponentLoader<TProps extends object> ({
  component,
  ...props
}: ComponentLoaderProps & TProps) {
  if (!component.files?.length) {
    return null
  }
  const path = component.files[0].path
  const newPath = path.replace('registry/', '')
  const Component = React.lazy(
    () => import(`@/registry/${newPath}`).catch(() => () => null)
  ) as ComponentType<TProps>

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
    <Component {...(props as TProps)} currentPage={1} totalPages={10} />
  </Suspense>
}
