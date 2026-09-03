import { NavLink } from "react-router-dom"
import { Icon } from "./Icon"

const items = [
  { to: "/", label: "Home", icon: "home", end: true },
  { to: "/services", label: "Services", icon: "build", end: false },
  { to: "/projects", label: "Portfolio", icon: "imagesmode", end: false },
  { to: "/quote", label: "Quote", icon: "request_quote", end: false },
] as const

export function MobileNav() {
  return (
    <nav className="fixed bottom-0 z-50 flex h-20 w-full items-center justify-around border-t-2 border-primary bg-inverse-surface md:hidden">
      {items.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          end={item.end}
          className={({ isActive }) =>
            [
              "flex h-full w-full scale-95 flex-col items-center justify-center p-2 transition-all active:scale-90",
              isActive
                ? "bg-primary text-on-primary"
                : "text-tertiary-fixed-dim hover:bg-primary/20",
            ].join(" ")
          }
        >
          <Icon name={item.icon} className="mb-1" />
          <span className="font-label text-label-caps">{item.label}</span>
        </NavLink>
      ))}
    </nav>
  )
}
