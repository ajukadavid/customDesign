import { useState, type FormEvent } from "react"
import { company } from "../company"
import { services } from "../data"
import { Icon } from "./Icon"

const fields = [
  { id: "name", label: "FULL NAME", type: "text", autoComplete: "name" },
  { id: "company", label: "COMPANY", type: "text", autoComplete: "organization" },
  { id: "email", label: "EMAIL", type: "email", autoComplete: "email" },
  { id: "phone", label: "PHONE", type: "tel", autoComplete: "tel" },
] as const

export function QuoteForm() {
  const [submitted, setSubmitted] = useState(false)

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="border border-on-background bg-surface-container-low p-8 md:p-12">
        <span className="mb-4 block font-tech text-technical-data text-primary">
          [ REQUEST_RECEIVED ]
        </span>
        <h3 className="mb-4 font-headline text-[24px] uppercase md:text-headline-md">
          Quote request logged.
        </h3>
        <p className="max-w-xl font-body text-body-md text-on-surface-variant">
          Thank you. We will review the brief and return with a solution
          around your needs. For urgent programmes, call or WhatsApp{" "}
          {company.phoneDisplay}, or email {company.email}.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-8">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {fields.map((field) => (
          <label key={field.id} className="flex flex-col gap-3">
            <span className="font-label text-label-caps text-secondary">
              {field.label}
            </span>
            <input
              id={field.id}
              name={field.id}
              type={field.type}
              required
              autoComplete={field.autoComplete}
              className="border-0 border-b border-on-background bg-transparent px-0 py-3 font-body text-body-md text-on-background outline-none ring-0 focus:border-primary focus:ring-0"
            />
          </label>
        ))}
      </div>
      <label className="flex flex-col gap-3">
        <span className="font-label text-label-caps text-secondary">
          SERVICE
        </span>
        <select
          name="service"
          required
          defaultValue=""
          className="rounded-none border border-on-background bg-surface px-4 py-3 font-body text-body-md text-on-background outline-none focus:border-primary focus:ring-0"
        >
          <option value="" disabled>
            Select a capability
          </option>
          {services.map((service) => (
            <option key={service.id} value={service.title}>
              {service.title}
            </option>
          ))}
        </select>
      </label>
      <label className="flex flex-col gap-3">
        <span className="font-label text-label-caps text-secondary">
          PROJECT BRIEF
        </span>
        <textarea
          name="brief"
          required
          rows={6}
          className="rounded-none border border-on-background bg-transparent px-4 py-3 font-body text-body-md text-on-background outline-none focus:border-primary focus:ring-0"
          placeholder="Span, loads, site, programme, and any drawings on hand."
        />
      </label>
      <button
        type="submit"
        className="inline-flex w-fit items-center justify-center bg-on-background px-8 py-4 font-label text-label-caps font-bold uppercase tracking-widest text-background block-shadow-hover"
      >
        SUBMIT REQUEST
        <Icon name="arrow_forward" className="ml-2" filled />
      </button>
    </form>
  )
}
