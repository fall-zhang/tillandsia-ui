import type { RegistryItem } from 'shadcn/registry'

import { cn } from '@/registry/default/lib/utils'

export default function ComponentCard ({
  isSearchPage = false,
  children,
  component,
  className,
}: {
  isSearchPage?: boolean
  children: React.ReactNode
  component: RegistryItem
  className?: string
}) {
  const getColSpanClasses = (includeStart = false) => {
    let baseClasses = 'col-span-12 sm:col-span-6 lg:col-span-4'
    if (component.meta?.colSpan === 2) {
      baseClasses = 'col-span-12 sm:col-span-6 lg:col-span-6'
    } else if (component.meta?.colSpan === 3) {
      baseClasses = 'col-span-12 sm:col-span-12 lg:col-span-12'
    }
    // const baseClasses =
    //   component.meta?.colSpan === 2
    //     ? 'col-span-12 sm:col-span-6 lg:col-span-6'
    //     : component.meta?.colSpan === 3
    //       ? 'col-span-12 sm:col-span-12 lg:col-span-12'
    //       : 'col-span-12 sm:col-span-6 lg:col-span-4'
    let startClasses = ''
    if (includeStart && component.meta?.colSpan !== 3) {
      if (component.meta?.colSpan === 2) {
        startClasses = 'sm:col-start-4 lg:col-start-4'
      } else {
        startClasses = 'sm:col-start-4 lg:col-start-5'
      }
    }
    // const startClasses =
    //   includeStart && component.meta?.colSpan !== 3
    //     ? component.meta?.colSpan === 2
    //       ? 'sm:col-start-4 lg:col-start-4'
    //       : 'sm:col-start-4 lg:col-start-5'
    //     : ''

    return cn(baseClasses, startClasses)
  }
  let styleClasses = ''
  if (component.meta?.style === 1) {
    styleClasses = 'flex justify-center items-center'
  } else if (component.meta?.style === 2) {
    styleClasses = 'text-center'
  } else {
    styleClasses = ''
  }

  // const styleClasses =
  //   component.meta?.style === 1
  //     ? 'flex justify-center items-center'
  //     : component.meta?.style === 2
  //       ? 'text-center'
  //       : ''

  return (
    <div
      className={cn(
        'group/item relative border has-[[data-comp-loading=true]]:border-none',
        isSearchPage
          ? 'col-span-12 grid grid-cols-12'
          : cn(getColSpanClasses(), styleClasses),
        className
      )}
      data-slot={component.name}
    >
      {isSearchPage
        ? (
          <div className={cn(getColSpanClasses(true), styleClasses)}>
            {children}
          </div>
        )
        : (
          children
        )}
    </div>
  )
}
