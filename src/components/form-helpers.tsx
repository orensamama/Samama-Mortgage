import { useState, type ReactNode } from "react";
import { useServerFn } from "@tanstack/react-start";
import { submitContactForm } from "@/lib/submit-form";
import { AlertCircle, CheckCircle2, Loader2 } from "lucide-react";

export type FormStatus = "idle" | "submitting" | "success" | "error";

export function useSubmitForm(formType: string) {
  const submit = useServerFn(submitContactForm);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function submitFields(fields: Record<string, string>, file?: File | null) {
    setStatus("submitting");
    setErrorMessage("");
    try {
      const fd = new FormData();
      fd.append("formType", formType);
      for (const [key, value] of Object.entries(fields)) {
        if (value) fd.append(key, value);
      }
      if (file) fd.append("file", file);
      await submit({ data: fd });
      setStatus("success");
      return true;
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "משהו השתבש. נסו שוב או צרו קשר טלפוני.",
      );
      return false;
    }
  }

  function fail(message: string) {
    setStatus("error");
    setErrorMessage(message);
  }

  return { status, errorMessage, submitFields, fail };
}

export function FormStatusMessage({
  status,
  errorMessage,
  successMessage,
}: {
  status: FormStatus;
  errorMessage: string;
  successMessage: string;
}) {
  if (status === "success") {
    return (
      <div className="flex items-center gap-2 rounded-2xl bg-green-50 px-4 py-3 text-sm font-medium text-green-700">
        <CheckCircle2 className="h-5 w-5 shrink-0" />
        {successMessage}
      </div>
    );
  }
  if (status === "error") {
    return (
      <div className="flex items-center gap-2 rounded-2xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
        <AlertCircle className="h-5 w-5 shrink-0" />
        {errorMessage}
      </div>
    );
  }
  return null;
}

export function SubmitButton({
  status,
  children,
  variant = "primary",
}: {
  status: FormStatus;
  children: ReactNode;
  variant?: "primary" | "gold";
}) {
  return (
    <button
      type="submit"
      disabled={status === "submitting"}
      className={`inline-flex w-full items-center justify-center gap-2 rounded-2xl px-6 py-3.5 font-semibold shadow-soft transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0 sm:w-auto ${
        variant === "gold"
          ? "bg-gold text-gold-foreground hover:-translate-y-0.5 hover:shadow-soft-gold hover:brightness-105"
          : "bg-primary text-primary-foreground hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-soft-lg"
      }`}
    >
      {status === "submitting" && <Loader2 className="h-4 w-4 animate-spin" />}
      {children}
    </button>
  );
}
