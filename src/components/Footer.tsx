import { Link } from "react-router-dom"
import { company } from "../company"
import { Icon } from "./Icon"
import { Logo } from "./Logo"

export function Footer() {
  return (
    <footer className="w-full border-t-4 border-primary bg-on-background">
      <div className="mx-auto grid max-w-container-max grid-cols-1 gap-gutter px-margin-mobile py-16 md:grid-cols-4 md:px-margin-desktop md:py-20">
        <div className="md:col-span-2">
          <Link to="/" className="mb-6 inline-block" aria-label="Custom Design Constructs home">
            <Logo alt="" className="h-20 w-auto" />
          </Link>
          <p className="mb-8 max-w-md font-body text-body-md text-surface-variant">
            {company.mission}
          </p>
          <div className="flex flex-col gap-2 font-tech text-technical-data text-surface-dim">
            <a className="hover:text-primary" href={`tel:${company.phoneTel}`}>
              {company.phoneDisplay}
            </a>
            <a className="hover:text-primary" href={`mailto:${company.email}`}>
              {company.email}
            </a>
            <a
              className="hover:text-primary"
              href={company.mapsUrl}
              target="_blank"
              rel="noreferrer"
            >
              {company.addressOneLine}
            </a>
            <span>CAC {company.cacNumber}</span>
          </div>
        </div>
        <div>
          <h4 className="mb-6 font-label text-label-caps uppercase tracking-widest text-primary">
            Capabilities
          </h4>
          <ul className="space-y-4 font-body text-body-md">
            <li>
              <Link
                className="inline-block text-surface-variant transition-transform hover:translate-x-1 hover:text-primary"
                to="/services"
              >
                Warehouses
              </Link>
            </li>
            <li>
              <Link
                className="inline-block text-surface-variant transition-transform hover:translate-x-1 hover:text-primary"
                to="/services"
              >
                Carports
              </Link>
            </li>
            <li>
              <Link
                className="inline-block text-surface-variant transition-transform hover:translate-x-1 hover:text-primary"
                to="/services"
              >
                Solar-Ready Structures
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="mb-6 font-label text-label-caps uppercase tracking-widest text-primary">
            Studio
          </h4>
          <ul className="space-y-4 font-body text-body-md">
            <li>
              <Link
                className="inline-block text-surface-variant transition-transform hover:translate-x-1 hover:text-primary"
                to="/about"
              >
                About
              </Link>
            </li>
            <li>
              <a
                className="inline-block text-surface-variant transition-transform hover:translate-x-1 hover:text-primary"
                href={company.whatsapp}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
              </a>
            </li>
            <li>
              <Link
                className="inline-block text-surface-variant transition-transform hover:translate-x-1 hover:text-primary"
                to="/quote"
              >
                Request a Quote
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-on-background/20 px-margin-mobile py-6 md:px-margin-desktop">
        <div className="mx-auto flex max-w-container-max flex-col items-center justify-between gap-4 md:flex-row">
          <p className="font-tech text-sm text-technical-data text-surface-variant">
            © 2026 {company.name.toUpperCase()}. {company.tagline.toUpperCase()}.
          </p>
          <a
            className="flex h-8 w-8 items-center justify-center bg-surface-variant/10 text-background transition-colors hover:bg-primary"
            href={company.whatsapp}
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
          >
            <Icon name="chat" className="text-sm" />
          </a>
        </div>
      </div>
    </footer>
  )
}
