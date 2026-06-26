/* eslint-disable react-refresh/only-export-components */
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/background-image/page')({
  component: RouteComponent,
})

function RouteComponent () {
  return <div>Hello </div>
}
