/* eslint-disable react-refresh/only-export-components */
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/theme/page')({
  component: RouteComponent,
})

function RouteComponent () {
  return <div>主题预览</div>
}
