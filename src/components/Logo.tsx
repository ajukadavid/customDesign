import { company } from "../company"

type LogoProps = {
  className?: string
  alt?: string
}

export function Logo({ className = "h-12 w-auto", alt = company.name }: LogoProps) {
  return (
    <img
      src="/logo.png"
      alt={alt}
      width={445}
      height={201}
      className={className}
    />
  )
}
