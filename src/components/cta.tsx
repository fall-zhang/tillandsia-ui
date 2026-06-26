import { Button } from '@/registry/default/ui/button'

export default function Cta () {
  return (
    <div className="mt-16 text-center md:mt-20">
      <h2 className="font-heading text-foreground mb-6 text-3xl/[1.1] font-bold tracking-tight">
        Didn&apos;t find what you were looking for?
      </h2>
      <Button className="rounded-full">
        <a
          href="https://github.com/fall-zhang/tillandsia-ui/issues"
          target="_blank" rel="noreferrer"
        >
          {/* <span className="text-primary-foreground">Suggest component</span> */}
          <span className="text-primary-foreground">给我们一些组件的建议</span>
        </a>
      </Button>
    </div>
  )
}
