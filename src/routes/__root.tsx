/* eslint-disable react-refresh/only-export-components */
import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import Footer from '@/components/footer'
import Header from '@/components/header'
import { Toaster as Sonner } from '@/registry/default/ui/sonner'
import { Toaster } from '@/registry/default/ui/toaster'
// import { I18nextProvider } from 'react-i18next'
// import i18n from '@/locales/i18n'
import { ThemeProvider } from '@/context/theme-context'
const RootLayout = () => {
  return (
    <>
      <ThemeProvider>
        <div className="overflow-hidden px-4 supports-[overflow:clip]:overflow-clip sm:px-6">
          <div className="before:bg-[linear-gradient(to_bottom,--theme(--color-border/.3),--theme(--color-border)_200px,--theme(--color-border)_calc(100%-200px),--theme(--color-border/.3))] after:bg-[linear-gradient(to_bottom,--theme(--color-border/.3),--theme(--color-border)_200px,--theme(--color-border)_calc(100%-200px),--theme(--color-border/.3))] relative mx-auto w-full max-w-6xl before:absolute before:inset-y-0 before:-left-12 before:w-px after:absolute after:inset-y-0 after:-right-12 after:w-px">
            <div className="relative flex min-h-screen flex-col">
              <Header />
              <Outlet />
              <Footer />
            </div>
          </div>
        </div>
        <Toaster />
        <Sonner />

      </ThemeProvider>
      <TanStackRouterDevtools position='bottom-right'/>
    </>
  )
}

export const Route = createRootRoute({
  component: RootLayout,
})
