/* eslint-disable react-refresh/only-export-components */
import { createFileRoute, Link } from '@tanstack/react-router'

import PageHeader from '@/components/page-header'
import { Button } from '@/registry/default/ui/button'

export const Route = createFileRoute('/err/not-found')({
  component: RouteComponent,
})

function RouteComponent () {
  return <>
    <PageHeader title="404" className="mb-6">
      {'The page you\'re looking for does not exist or is no longer here.'}
    </PageHeader>
    <div className="text-center">
      <Button asChild className="rounded-full">
        <Link to="/">Browse components</Link>
      </Button>
    </div>
  </>
}
