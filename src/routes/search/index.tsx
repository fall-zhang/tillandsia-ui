/* eslint-disable react-refresh/only-export-components */
import { createFileRoute } from '@tanstack/react-router'
import { Suspense } from 'react'

import PageHeader from '@/components/page-header'
import ComponentsContainer from './-components/components-container'


export const Route = createFileRoute('/search/')({
  component: RouteComponent,
})

function RouteComponent () {
  return <>
    <PageHeader title="Search Origin UI" className="mb-10">
      Use this page to quickly find a component (e.g., multiselect, vertical
      slider, etc.)
    </PageHeader>
    <Suspense>
      <ComponentsContainer />
    </Suspense>
  </>
}

// export const metadata = {
//   title: 'Search a Origin UI component',
//   description: 'Search for components in the Origin UI library.',
// }
