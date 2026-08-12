"use client";

import { AlertCircle, ArrowRight, Check, LoaderCircle } from "lucide-react";
import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";
import { SERVICE_INTENT_EVENT } from "@/lib/service-intent";
import { serviceById, services, type ServiceId } from "@/lib/services";

type FormFields = {
  name: string;
  contact: string;
  company: string;
  service: string;
  message: string;
  consent: boolean;
  productType: string;
  productStage: string;
  systems: string;
  agentTask: string;
  infrastructure: string;
  commercePlatform: string;
  processDescription: string;
};

type FieldErrors = Partial<Record<keyof FormFields, string>>;
type SubmitStatus = "idle" | "loading" | "success" | "error" | "not-configured";

const initialFields: FormFields = {
  name: "",
  contact: "",
  company: "",
  service: "",
  message: "",
  consent: false,
  productType: "",
  productStage: "",
  systems: "",
  agentTask: "",
  infrastructure: "",
  commercePlatform: "",
  processDescription: "",
};

const inputClassName =
  "min-h-12 w-full border-0 border-b bg-transparent px-0 py-3 text-base font-semibold text-ink outline-none transition-colors placeholder:font-normal placeholder:text-slate-400 focus:border-brand focus:ring-0";

function validate(fields: FormFields): FieldErrors {
  const errors: FieldErrors = {};
  const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.contact.trim());
  const phoneDigits = fields.contact.replace(/\D/g, "").length;

  if (fields.name.trim().length < 2) {
    errors.name = "Enter at least 2 characters.";
  }
  if (!isEmail && phoneDigits < 7) {
    errors.contact = "Enter a valid email address or phone number.";
  }
  if (!fields.service) {
    errors.service = "Choose a project direction.";
  }
  if (fields.message.trim().length < 20) {
    errors.message = "Tell us a little more — at least 20 characters.";
  }
  if (!fields.consent) {
    errors.consent = "Consent to data processing is required.";
  }

  const requiredExtras = getDynamicFields(fields.service as ServiceId);
  requiredExtras.forEach((field) => {
    if (fields[field.key].trim().length < 2) {
      errors[field.key] = field.error;
    }
  });

  return errors;
}

export function ContactForm() {
  const [fields, setFields] = useState<FormFields>(initialFields);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const endpoint = process.env.NEXT_PUBLIC_CONTACT_API_URL;

  useEffect(() => {
    const handleServiceIntent = (event: Event) => {
      const customEvent = event as CustomEvent<{ service: ServiceId }>;
      if (!customEvent.detail?.service) return;
      setFields((current) => ({ ...current, service: customEvent.detail.service }));
      setErrors((current) => ({ ...current, service: undefined }));
      setStatus("idle");
    };

    window.addEventListener(SERVICE_INTENT_EVENT, handleServiceIntent);
    return () => window.removeEventListener(SERVICE_INTENT_EVENT, handleServiceIntent);
  }, []);

  const updateField = <Key extends keyof FormFields>(
    key: Key,
    value: FormFields[Key],
  ) => {
    setFields((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
    if (status !== "idle") setStatus("idle");
  };

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(fields);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      const firstKey = Object.keys(nextErrors)[0] as keyof FormFields;
      const fieldIds: Partial<Record<keyof FormFields, string>> = {
        name: "name",
        contact: "contact-value",
        company: "company",
        service: "service",
        message: "message",
      };
      const selector =
        firstKey === "consent"
          ? '[name="consent"]'
          : `#${fieldIds[firstKey] ?? `extra-${firstKey}`}`;
      const firstInvalid =
        event.currentTarget.querySelector<HTMLElement>(selector);
      firstInvalid?.focus();
      return;
    }

    if (!endpoint) {
      setStatus("not-configured");
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });

      if (!response.ok) throw new Error("Request failed");
      setStatus("success");
      setFields(initialFields);
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="bg-white p-5 sm:p-8 lg:p-10" noValidate onSubmit={handleSubmit}>
      <div className="mb-8 flex flex-col gap-3 border-b pb-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <span className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-brand">
            Project brief / 01
          </span>
          <h3 className="mt-2 text-2xl font-extrabold tracking-[-0.05em] text-ink sm:text-3xl">
            Tell us about the challenge
          </h3>
        </div>
        <span className="max-w-[240px] text-xs leading-5 text-muted">
          This form is currently in demo mode and does not send data.
        </span>
      </div>

      {fields.service && fields.service in serviceById ? (
        <div className="mb-7 flex items-center justify-between border border-blue-200 bg-blue-50 p-3 text-sm">
          <span className="text-muted">Selected direction</span>
          <strong className="text-brand">{serviceById[fields.service as ServiceId].shortTitle}</strong>
        </div>
      ) : null}

      <div className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
        <Field label="Your name" error={errors.name}>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            className={inputClassName}
            placeholder="How should we address you?"
            value={fields.name}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            onChange={(event) => updateField("name", event.target.value)}
          />
        </Field>

        <Field label="Email or phone" error={errors.contact}>
          <input
            id="contact-value"
            name="contact"
            type="text"
            autoComplete="email"
            inputMode="email"
            className={inputClassName}
            placeholder="name@company.com or +1..."
            value={fields.contact}
            aria-invalid={Boolean(errors.contact)}
            aria-describedby={errors.contact ? "contact-error" : undefined}
            onChange={(event) => updateField("contact", event.target.value)}
          />
        </Field>

        <Field label="Company" error={errors.company}>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            className={inputClassName}
            placeholder="Company name or industry"
            value={fields.company}
            aria-invalid={Boolean(errors.company)}
            onChange={(event) => updateField("company", event.target.value)}
          />
        </Field>

        <Field label="Project direction" error={errors.service}>
          <select
            id="service"
            name="service"
            className={inputClassName}
            value={fields.service}
            aria-invalid={Boolean(errors.service)}
            aria-describedby={errors.service ? "service-error" : undefined}
            onChange={(event) => updateField("service", event.target.value)}
          >
            <option value="">Choose a service</option>
            {services.map((service) => (
              <option key={service.id} value={service.id}>{service.shortTitle}</option>
            ))}
          </select>
        </Field>

        {getDynamicFields(fields.service as ServiceId).map((field) => (
          <DynamicInput
            key={field.key}
            field={field}
            value={fields[field.key]}
            error={errors[field.key]}
            onChange={(value) => updateField(field.key, value)}
          />
        ))}

        <div className="sm:col-span-2">
          <Field label="Project context" error={errors.message}>
            <textarea
              id="message"
              name="message"
              rows={4}
              className={`${inputClassName} resize-y`}
              placeholder="What do you need to build, connect, or automate?"
              value={fields.message}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? "message-error" : undefined}
              onChange={(event) => updateField("message", event.target.value)}
            />
          </Field>
        </div>
      </div>

      <label className="mt-7 flex cursor-pointer items-start gap-3 text-sm leading-6 text-muted">
        <input
          type="checkbox"
          name="consent"
          className="mt-1 size-5 shrink-0 accent-brand"
          checked={fields.consent}
          aria-invalid={Boolean(errors.consent)}
          aria-describedby={errors.consent ? "consent-error" : undefined}
          onChange={(event) => updateField("consent", event.target.checked)}
        />
        <span>
          I agree to data processing in accordance with the{" "}
          <Link href="/privacy" className="font-semibold text-ink underline decoration-slate-300 underline-offset-4 hover:text-brand">
            privacy policy
          </Link>
          .
        </span>
      </label>
      {errors.consent ? (
        <p id="consent-error" className="mt-2 text-sm font-semibold text-danger">
          {errors.consent}
        </p>
      ) : null}

      <div className="mt-8 flex flex-col gap-4 border-t pt-7 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={status === "loading"}
          className="group flex min-h-14 items-center justify-between gap-8 bg-brand px-5 text-left font-bold text-white transition-colors hover:bg-brand-deep disabled:cursor-wait disabled:opacity-70 sm:min-w-[240px]"
        >
          {status === "loading" ? "Sending..." : "Send project brief"}
          {status === "loading" ? (
            <LoaderCircle className="animate-spin" aria-hidden="true" />
          ) : (
            <ArrowRight className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
          )}
        </button>
        <span className="text-xs leading-5 text-muted">
          We can respond once a live contact channel is connected.
        </span>
      </div>

      <div className="mt-5 min-h-12" aria-live="polite">
        {status === "not-configured" ? (
          <StatusMessage tone="info">
            Your details are valid, but were not sent because the contact channel is not connected yet.
          </StatusMessage>
        ) : null}
        {status === "error" ? (
          <StatusMessage tone="error">
            We could not send the brief. Your details remain in the form — please try again later.
          </StatusMessage>
        ) : null}
        {status === "success" ? (
          <StatusMessage tone="success">
            Your brief was sent. Thank you — our team will contact you using the details provided.
          </StatusMessage>
        ) : null}
      </div>
    </form>
  );
}

type DynamicKey =
  | "productType"
  | "productStage"
  | "systems"
  | "agentTask"
  | "infrastructure"
  | "commercePlatform"
  | "processDescription";

type DynamicFieldConfig = {
  key: DynamicKey;
  label: string;
  placeholder: string;
  error: string;
};

function getDynamicFields(service?: ServiceId): DynamicFieldConfig[] {
  const fieldsByService: Partial<Record<ServiceId, DynamicFieldConfig[]>> = {
    mvp: [
      { key: "productType", label: "Product type", placeholder: "B2B service, customer portal, marketplace...", error: "Tell us what kind of product you are planning." },
      { key: "productStage", label: "Current stage", placeholder: "Idea, prototype, or existing product", error: "Tell us the product’s current stage." },
    ],
    crm: [{ key: "processDescription", label: "Core workflow", placeholder: "Sales, manufacturing, service, logistics...", error: "Describe the workflow for the CRM or dashboard." }],
    api: [{ key: "systems", label: "Systems to connect", placeholder: "CRM, ERP, website, payment service...", error: "List the systems you currently use." }],
    cloud: [{ key: "infrastructure", label: "Current infrastructure", placeholder: "Servers, provider, containers, constraints...", error: "Describe the current infrastructure." }],
    commerce: [{ key: "commercePlatform", label: "Current platform", placeholder: "New build, Shopify, WooCommerce, custom...", error: "Name the current or planned platform." }],
    ai: [{ key: "agentTask", label: "AI assistant task", placeholder: "Support, documents, lead qualification...", error: "Describe the future assistant’s task." }],
    growth: [{ key: "processDescription", label: "Current lead journey", placeholder: "From source to CRM and the next action", error: "Briefly describe the current process." }],
    analytics: [{ key: "systems", label: "Data sources", placeholder: "CRM, ERP, ads, spreadsheets, database...", error: "List the relevant data sources." }],
    rpa: [{ key: "processDescription", label: "Repeated process", placeholder: "Steps, systems, and common exceptions", error: "Describe the repetitive process." }],
  };

  return service ? fieldsByService[service] ?? [] : [];
}

function DynamicInput({ field, value, error, onChange }: { field: DynamicFieldConfig; value: string; error?: string; onChange: (value: string) => void }) {
  const id = `extra-${field.key}`;
  return (
    <div className="sm:col-span-1">
      <label htmlFor={id} className="block text-sm font-bold text-ink">{field.label}</label>
      <input
        id={id}
        name={field.key}
        type="text"
        className={inputClassName}
        placeholder={field.placeholder}
        value={value}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        onChange={(event) => onChange(event.target.value)}
      />
      {error ? <p id={`${id}-error`} className="mt-2 flex items-start gap-2 text-sm font-semibold text-danger"><AlertCircle className="mt-0.5 size-4 shrink-0" aria-hidden="true" />{error}</p> : null}
    </div>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  const errorId = `${label === "Email or phone" ? "contact" : label === "Project direction" ? "service" : label === "Project context" ? "message" : label === "Your name" ? "name" : "company"}-error`;

  return (
    <div>
      <label className="block text-sm font-bold text-ink" htmlFor={
        label === "Your name"
          ? "name"
          : label === "Email or phone"
            ? "contact-value"
            : label === "Company"
              ? "company"
              : label === "Project direction"
                ? "service"
                : "message"
      }>
        {label}
      </label>
      {children}
      {error ? (
        <p id={errorId} className="mt-2 flex items-start gap-2 text-sm font-semibold text-danger">
          <AlertCircle className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
          {error}
        </p>
      ) : null}
    </div>
  );
}

function StatusMessage({
  tone,
  children,
}: {
  tone: "info" | "error" | "success";
  children: React.ReactNode;
}) {
  const styles = {
    info: "border-blue-200 bg-blue-50 text-blue-900",
    error: "border-red-200 bg-red-50 text-red-900",
    success: "border-emerald-200 bg-emerald-50 text-emerald-900",
  };

  return (
    <p className={`flex items-start gap-3 border p-3 text-sm font-semibold ${styles[tone]}`}>
      {tone === "success" ? (
        <Check className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
      ) : (
        <AlertCircle className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
      )}
      {children}
    </p>
  );
}
