import { useState } from 'react';
import { ArrowUpRight, Check, Copy, Github, Mail, Share2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../config/portfolio';
import { Reveal } from './Reveal';

export function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PORTFOLIO_DATA.contact.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      // Fallback: open mailto if clipboard access is blocked
      window.location.href = `mailto:${PORTFOLIO_DATA.contact.email}`;
    }
  };

  return (
    <section
      id="contact"
      className="bg-[#191127] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
            {/* Left Intro */}
            <div className="lg:col-span-5">
              <p className="text-sm font-medium text-[#F04BCB]">
                05. Contact
              </p>
              <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Let&apos;s connect and talk about games, code, or ideas.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#B9AFC8]">
                Whether you want to share advice on game development, discuss programming, or collaborate on beginner-friendly ideas, feel free to reach out.
              </p>
            </div>

            {/* Right Contact Channels */}
            <div className="grid grid-cols-1 gap-4 lg:col-span-7">
              {/* Email Card */}
              <div className="flex flex-col justify-between gap-4 rounded-2xl border border-white/10 bg-[#211632] p-5 sm:flex-row sm:items-center sm:p-6">
                <div className="flex items-center gap-4 min-w-0">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#C13BFF]/40 bg-[#191127] text-[#C13BFF] shrink-0">
                    <Mail className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-medium text-[#B9AFC8]">Email</p>
                    <a
                      href={`mailto:${PORTFOLIO_DATA.contact.email}`}
                      className="mt-0.5 block truncate font-display text-base font-semibold text-white transition-colors hover:text-[#F04BCB] sm:text-lg"
                    >
                      {PORTFOLIO_DATA.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="inline-flex min-h-[42px] items-center gap-2 rounded-lg border border-white/15 bg-[#191127] px-3.5 py-2 text-xs font-semibold text-white whitespace-nowrap shrink-0 transition-colors hover:border-[#C13BFF]"
                  >
                    {copied ? (
                      <>
                        <Check className="h-4 w-4 text-[#F04BCB]" aria-hidden="true" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-4 w-4 text-[#B9AFC8]" aria-hidden="true" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>

                  <a
                    href={`mailto:${PORTFOLIO_DATA.contact.email}`}
                    className="inline-flex min-h-[42px] items-center gap-1.5 rounded-lg bg-[#C13BFF] px-4 py-2 text-xs font-semibold text-white whitespace-nowrap shrink-0 transition-colors hover:bg-[#F04BCB]"
                  >
                    <span>Send Email</span>
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </div>

              {/* GitHub & Facebook Row */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <a
                  href={PORTFOLIO_DATA.contact.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex min-h-[76px] items-center justify-between gap-4 rounded-2xl border border-white/10 bg-[#211632] p-5 transition-colors duration-200 hover:border-[#C13BFF]/60"
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-[#191127] text-white shrink-0 transition-colors group-hover:text-[#C13BFF]">
                      <Github className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-medium text-[#B9AFC8]">GitHub</p>
                      <p className="mt-0.5 truncate font-display text-base font-semibold text-white">
                        {PORTFOLIO_DATA.contact.githubHandle}
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight
                    className="h-5 w-5 text-[#B9AFC8] shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white"
                    aria-hidden="true"
                  />
                </a>

                <a
                  href={PORTFOLIO_DATA.contact.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex min-h-[76px] items-center justify-between gap-4 rounded-2xl border border-white/10 bg-[#211632] p-5 transition-colors duration-200 hover:border-[#F04BCB]/60"
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-[#191127] text-white shrink-0 transition-colors group-hover:text-[#F04BCB]">
                      <Share2 className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-medium text-[#B9AFC8]">Facebook</p>
                      <p className="mt-0.5 truncate font-display text-base font-semibold text-white">
                        {PORTFOLIO_DATA.name}
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight
                    className="h-5 w-5 text-[#B9AFC8] shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
