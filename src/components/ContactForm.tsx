"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, Loader2 } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [focused, setFocused] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const data = new FormData(form);

    // Add Web3Forms required fields
    data.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "YOUR_KEY_HERE");
    data.append("to_email", process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "contact@monopolyrecruitment.com");
    data.append("subject", "New message from Monopoly Recruitment website");
    data.append("from_name", "Monopoly Recruitment Website");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const json = await res.json();
      setStatus(json.success ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  const inputBase =
    "w-full bg-transparent text-navy text-[15px] placeholder-brand-gray-light/60 border-0 border-b-2 py-3 pr-4 outline-none transition-colors duration-300 font-medium";

  const fields = [
    { id: "name",    label: "Full Name",     type: "text",  placeholder: "John Smith",             half: true  },
    { id: "email",   label: "Email Address", type: "email", placeholder: "john@example.com",        half: true  },
    { id: "phone",   label: "Phone (opt.)",  type: "tel",   placeholder: "+44 000 000 0000",        half: true  },
    { id: "subject", label: "Subject",       type: "text",  placeholder: "I'm looking for a role…", half: true  },
  ];

  return (
    <section id="contact-form" className="bg-white py-20 lg:py-24">
      <div className="max-w-[1200px] mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

          {/* Left: Headline */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-4"
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-[2px] bg-brand-teal rounded-full" />
              <span className="text-brand-teal font-bold uppercase tracking-widest text-xs">Get In Touch</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-sans font-light text-navy tracking-tight leading-tight mb-5">
              We&apos;d love to hear from you.
            </h2>
            <p className="text-brand-gray-dark text-[15px] leading-relaxed font-medium">
              Whether you&apos;re a candidate ready to take the next step or an employer looking to build a winning team — drop us a message and we&apos;ll be in touch quickly.
            </p>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-8"
          >
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-20 text-center"
                >
                  <CheckCircle2 size={56} className="text-brand-teal mb-5" strokeWidth={1.5} />
                  <h3 className="text-2xl font-bold text-navy mb-3">Message Sent!</h3>
                  <p className="text-brand-gray-dark font-medium">
                    Thanks for reaching out. We&apos;ll get back to you shortly.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-0"
                >
                  {/* 2-column grid for short fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-0">
                    {fields.map((f) => (
                      <div key={f.id} className="relative mb-8">
                        <label
                          htmlFor={f.id}
                          className={`absolute top-3 left-0 text-xs font-bold uppercase tracking-widest transition-all duration-300 pointer-events-none ${
                            focused === f.id
                              ? "text-brand-teal -translate-y-5 text-[10px]"
                              : "text-brand-gray-light/80"
                          }`}
                        >
                          {f.label}
                        </label>
                        <input
                          id={f.id}
                          name={f.id}
                          type={f.type}
                          placeholder=""
                          required={f.id !== "phone"}
                          onFocus={() => setFocused(f.id)}
                          onBlur={() => setFocused(null)}
                          className={`${inputBase} ${
                            focused === f.id
                              ? "border-brand-teal"
                              : "border-brand-gray-light/30"
                          }`}
                        />
                      </div>
                    ))}
                  </div>

                  {/* Message field — full width */}
                  <div className="relative mb-10">
                    <label
                      htmlFor="message"
                      className={`absolute top-3 left-0 text-xs font-bold uppercase tracking-widest transition-all duration-300 pointer-events-none ${
                        focused === "message"
                          ? "text-brand-teal -translate-y-5 text-[10px]"
                          : "text-brand-gray-light/80"
                      }`}
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      required
                      onFocus={() => setFocused("message")}
                      onBlur={() => setFocused(null)}
                      className={`${inputBase} resize-none ${
                        focused === "message"
                          ? "border-brand-teal"
                          : "border-brand-gray-light/30"
                      }`}
                    />
                  </div>

                  {/* Submit */}
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-xs text-brand-gray-light/60 font-medium">
                      By submitting you agree to our privacy policy.
                    </p>
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="inline-flex items-center gap-3 px-8 py-4 bg-navy text-white hover:bg-brand-teal hover:text-navy font-bold text-sm tracking-widest uppercase rounded-full transition-all duration-300 group shrink-0 disabled:opacity-60"
                    >
                      {status === "loading" ? (
                        <>
                          <Loader2 size={16} className="animate-spin" />
                          Sending…
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send size={15} className="group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
