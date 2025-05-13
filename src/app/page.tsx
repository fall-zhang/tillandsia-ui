import Image from 'next/image'
import WorkSection from './_components/WorkSection'
export default function Home () {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 dark:bg-black">
      <div className="mb-32 grid text-center lg:max-w-5xl gap-3 h-32 lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <WorkSection label='我的笔记' detail='fufufuufufuf' href='beijing'></WorkSection>
      </div>
    </main>
  )
}
