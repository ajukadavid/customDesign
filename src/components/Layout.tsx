import { useEffect } from "react"
import { Outlet, useLocation } from "react-router-dom"
import { Footer } from "./Footer"
import { Header } from "./Header"
import { MobileNav } from "./MobileNav"

export function Layout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="min-h-screen overflow-x-hidden bg-background pb-24 md:pb-0">
      <Header />
      <Outlet />
      <Footer />
      <MobileNav />
    </div>
  )
}
