import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { nav } from "../data"
import { Icon } from "./Icon"
import { Logo } from "./Logo"

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-on-background/10 bg-background">
        <div className="flex h-16 items-stretch justify-between md:hidden">
          <div className="flex items-stretch">
            <button
              type="button"
              className="px-3 text-primary transition-colors hover:bg-primary hover:text-on-primary"
              aria-label="Open menu"
              onClick={() => setOpen(true)}
            >
              <Icon name="menu" />
            </button>
            <Link
              to="/"
              className="flex items-center bg-on-background px-3"
              aria-label="Custom Design Constructs home"
            >
              <Logo alt="" className="h-11 w-auto" />
            </Link>
          </div>
          <Link
            to="/quote"
            className="m-3 flex items-center gap-2 border border-on-surface/20 px-4 py-2 font-label text-label-caps text-primary transition-colors hover:bg-primary hover:text-on-primary"
          >
            QUOTE
            <Icon name="arrow_forward" className="text-[16px]" />
          </Link>
        </div>

        <div className="mx-auto hidden max-w-container-max items-stretch md:flex">
          <Link
            to="/"
            className="flex items-center bg-on-background px-5 py-3"
            aria-label="Custom Design Constructs home"
          >
            <Logo alt="" className="h-14 w-auto" />
          </Link>
          <nav className="flex flex-1 items-center justify-end gap-5 px-margin-desktop lg:gap-8">
            {nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  [
                    "font-label text-label-caps uppercase tracking-wider transition-colors",
                    isActive
                      ? "border-b-2 border-primary pb-1 font-bold text-primary"
                      : "font-medium text-on-background hover:text-primary",
                  ].join(" ")
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <Link
            to="/quote"
            className="my-3 mr-margin-desktop inline-flex items-center justify-center bg-on-background px-6 py-3 font-label text-label-caps font-bold uppercase tracking-widest text-background block-shadow-hover"
          >
            GET A QUOTE
          </Link>
        </div>
      </header>

      {open ? (
        <div className="fixed inset-0 z-[60] bg-inverse-surface md:hidden">
          <div className="flex h-16 items-center justify-between border-b border-background/10 px-margin-mobile">
            <Logo className="h-10 w-auto" />
            <button
              type="button"
              className="p-2 text-primary"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            >
              <Icon name="close" />
            </button>
          </div>
          <nav className="flex flex-col">
            {nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  [
                    "border-b border-background/10 px-margin-mobile py-5 font-label text-label-caps uppercase tracking-widest",
                    isActive
                      ? "bg-primary text-on-primary"
                      : "text-background hover:bg-primary/20",
                  ].join(" ")
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/quote"
              onClick={() => setOpen(false)}
              className="px-margin-mobile py-5 font-label text-label-caps uppercase tracking-widest text-primary"
            >
              Quote
            </Link>
          </nav>
        </div>
      ) : null}
    </>
  )
}
