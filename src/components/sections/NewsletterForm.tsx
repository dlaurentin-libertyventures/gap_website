"use client";
import { useState } from "react";
import { motion } from "framer-motion";

type FormState = "idle" | "loading" | "success" | "error";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setErrorMsg("Please enter a valid email address.");
      return;
    }
    setErrorMsg("");
    setState("loading");

    // TODO: Connect to email platform (e.g., Mailchimp, ConvertKit, or Supabase)
    // Replace the mock below with your actual API call:
    // const res = await fetch('/api/newsletter', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ email })
    // });
    // if (!res.ok) { setState('error'); return; }
    await new Promise((res) => setTimeout(res, 1200));
    setState("success");
  };

  return (
    <div>
      <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-clay mb-4">
        Stay in the loop
      </p>

      {state === "success" ? (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="py-6"
        >
          <p className="font-display font-bold text-ivory text-lg">
            You&apos;re in.
          </p>
          <p className="font-sans text-pine text-sm mt-2">
            Thanks for joining. We&apos;ll be in touch.
          </p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-3">
            <label
              htmlFor="newsletter-email"
              className="block font-sans text-sm text-pine mb-2"
            >
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@institution.edu"
              className="w-full bg-transparent border border-pine/50 rounded-[6px] px-4 py-3 font-sans text-sm text-ivory placeholder:text-pine/50 focus:outline-none focus:border-clay transition-colors min-h-[44px]"
              disabled={state === "loading"}
              aria-describedby={errorMsg ? "newsletter-error" : undefined}
              aria-invalid={!!errorMsg}
              autoComplete="email"
            />
            {errorMsg && (
              <p
                id="newsletter-error"
                role="alert"
                className="mt-1.5 font-sans text-xs text-clay"
              >
                {errorMsg}
              </p>
            )}
          </div>
          <button
            type="submit"
            disabled={state === "loading"}
            className="w-full bg-clay text-dark-green font-sans font-semibold text-sm py-3 rounded-[6px] hover:bg-[#d4906a] disabled:opacity-60 transition-colors min-h-[44px] cursor-pointer"
          >
            {state === "loading" ? "Joining…" : "Stay updated"}
          </button>
          {state === "error" && (
            <p role="alert" className="mt-2 font-sans text-xs text-clay">
              Something went wrong. Please try again.
            </p>
          )}
        </form>
      )}
    </div>
  );
}
