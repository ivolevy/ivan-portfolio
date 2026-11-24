import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ArrowUpRight } from "lucide-react";
import { profile } from "../data/portfolioData";

export const Contact = () => {
  const formRef = useRef(null);
  const [status, setStatus] = useState({ type: "", text: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formRef.current || sending) return;

    setSending(true);
    setStatus({ type: "", text: "" });

    emailjs
      .sendForm(
        "service_3hpiy2n",
        "template_gvukjc5",
        formRef.current,
        "E4xuiiz13SZoQSqQf"
      )
      .then(
        () => {
          setStatus({ type: "success", text: "Message sent. I will get back to you shortly." });
          formRef.current.reset();
          setSending(false);
        },
        () => {
          setStatus({
            type: "error",
            text: "Delivery failed. Please write directly to ivo.levy03@gmail.com.",
          });
          setSending(false);
        }
      );
  };

  return (
    <section id="contact-section" className="py-20 sm:py-28 scroll-mt-16">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-start">
          <div className="md:col-span-5 min-w-0 space-y-6">
            <h2 className="font-serif text-4xl sm:text-5xl font-normal tracking-tight text-ink leading-tight">
              Let&apos;s work together.
            </h2>
            <p className="text-sm sm:text-[15px] text-muted leading-relaxed font-light">
              Available for Full-Stack &amp; AI Software Engineering roles, product engineering, and automation architecture.
            </p>

            <ul className="divide-y divide-line border-t border-b border-line list-none p-0 m-0 text-sm">
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="flex min-h-[46px] items-center justify-between text-ink hover:text-accent no-underline transition-colors"
                >
                  <span>{profile.email}</span>
                  <ArrowUpRight className="h-4 w-4 text-muted" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href={profile.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-[46px] items-center justify-between text-ink hover:text-accent no-underline transition-colors"
                >
                  <span>WhatsApp · {profile.phone}</span>
                  <ArrowUpRight className="h-4 w-4 text-muted" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href={profile.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-[46px] items-center justify-between text-ink hover:text-accent no-underline transition-colors"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight className="h-4 w-4 text-muted" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href={profile.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-[46px] items-center justify-between text-ink hover:text-accent no-underline transition-colors"
                >
                  <span>GitHub</span>
                  <ArrowUpRight className="h-4 w-4 text-muted" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-7 min-w-0">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="contact-name" className="block text-xs text-muted mb-2">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    autoComplete="name"
                    required
                    placeholder="Your name"
                    className="w-full min-h-[44px] border-b border-line bg-transparent py-2 text-sm text-ink placeholder:text-muted/60 focus:border-accent focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="contact-company" className="block text-xs text-muted mb-2">
                    Company
                  </label>
                  <input
                    id="contact-company"
                    type="text"
                    name="company"
                    autoComplete="organization"
                    required
                    placeholder="Company or team"
                    className="w-full min-h-[44px] border-b border-line bg-transparent py-2 text-sm text-ink placeholder:text-muted/60 focus:border-accent focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-xs text-muted mb-2">
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                  placeholder="you@company.com"
                  className="w-full min-h-[44px] border-b border-line bg-transparent py-2 text-sm text-ink placeholder:text-muted/60 focus:border-accent focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-xs text-muted mb-2">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell me about the role or project..."
                  className="w-full border-b border-line bg-transparent py-2 text-sm text-ink placeholder:text-muted/60 focus:border-accent focus:outline-none transition-colors resize-y"
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                className="inline-flex min-h-[44px] items-center rounded-full bg-ink px-7 py-2.5 text-xs font-medium text-canvas hover:opacity-85 transition-opacity disabled:opacity-60"
              >
                {sending ? "Sending..." : "Send Message"}
              </button>

              {status.text && (
                <p
                  role="status"
                  aria-live="polite"
                  className={`text-sm ${
                    status.type === "error" ? "text-red-500" : "text-accent"
                  }`}
                >
                  {status.text}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
