import Image from 'next/image'
import Link from 'next/link'

import { categories } from '@/config/components-fall'
import { SearchComp } from './_components/search-comp'

import { SubscribeBottom } from '@/components/subscribe-form'
import { NewIcon } from '@/components/icons/new-icon'
export default function Page () {
  return (
    <div data-home>
      <div className="max-w-3xl max-sm:text-center">
        <h1 className="font-heading text-foreground mb-4 text-4xl/[1.1] font-bold tracking-tight md:text-5xl/[1.1]">
          Tailwind 和 React 构建 UI 组件
        </h1>
        <p className="text-muted-foreground mb-8 text-lg">
          一个复制粘贴即可用的 UI 集合，tailwind + css
        </p>
        <SearchComp />
      </div>
      <div className="relative my-16">
        <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {categories
            .sort((a, b) => {
              if (a.isNew && !b.isNew) return -1
              if (!a.isNew && b.isNew) return 1
              return 0
            })
            .map((category) => (
              <CategoryCard
                key={category.slug}
                slug={category.slug}
                name={category.name}
                componentsCount={category.components.length}
                isNew={category.isNew}
              />
            ))}
        </div>
      </div>
      <SubscribeBottom />
    </div>
  )
}

type CategoryCardProps = {
  slug: string
  name: string
  componentsCount?: number
  isNew?: boolean
}

function CategoryCard ({
  slug,
  name,
  componentsCount,
  isNew = false
}: CategoryCardProps) {
  const href = `/fall/${slug}`
  const imageBasePath = `/img/thumbs/${slug}`
  const alt = `${name} components`
  const isComingSoon = componentsCount === undefined

  return (<div className="space-y-3 text-center">
    <Link
      href={href}
      className="peer relative inline-flex overflow-hidden rounded-xl border sm:flex dark:border-zinc-700/80"
      tabIndex={-1}
    >
      {isNew && (<NewIcon />)}
      <ImageComponent imageBasePath={imageBasePath} alt={alt} />
    </Link>
    <div className="[&_a]:peer-hover:underline">
      <h2>
        <Link href={href} className="text-sm font-medium hover:underline">
          {name}
        </Link>
      </h2>
      <p className="text-muted-foreground text-[13px]">
        {!isComingSoon
          ? `${componentsCount} ${componentsCount === 1 ? 'Component' : 'Components'}`
          : '-'}
      </p>
    </div>
  </div>
  )
}

type ImageComponentProps = {
  imageBasePath: string
  alt: string
}

function ImageComponent ({ imageBasePath, alt }: ImageComponentProps) {
  return (
    <>
      <Image
        className="w-full dark:hidden"
        src={`${imageBasePath}.png`}
        alt={alt}
        width={268}
        height={198}
      />
      <Image
        className="hidden w-full dark:block"
        src={`${imageBasePath}-dark.png`}
        alt={`${alt} dark`}
        width={268}
        height={198}
      />
    </>
  )
}
