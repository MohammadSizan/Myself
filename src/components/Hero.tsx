import { useState } from 'react';
import { ArrowRight, Compass, Mail, User } from 'lucide-react';
import { PORTFOLIO_DATA, PROFILE_PHOTO_PATH } from '../config/portfolio';

export function Hero() {
  const [imageError, setImageError] = useState(false);

  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-white/10 bg-[#100B1C] workspace-grid-bg"
    >
      {/* Subtle ambient background illumination */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-28 right-1/4 h-80 w-80 rounded-full bg-[#C13BFF]/12 blur-3xl ambient-orb"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 left-1/6 h-72 w-72 rounded-full bg-[#F04BCB]/10 blur-3xl ambient-orb"
      />

      <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Primary Typography & Actions */}
          <div className="flex flex-col justify-center lg:col-span-7">
            {/* Availability / Status Indicator (clean unboxed typographic line) */}
            <div className="mb-5 flex items-center gap-2.5 text-sm font-medium text-[#F04BCB]">
              <Compass className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span>{PORTFOLIO_DATA.statusText}</span>
            </div>

            <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {PORTFOLIO_DATA.name}
            </h1>

            <p className="mt-3 font-display text-xl font-semibold text-[#C13BFF] sm:text-2xl">
              {PORTFOLIO_DATA.role}
            </p>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/95 sm:text-xl">
              “{PORTFOLIO_DATA.tagline}”
            </p>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-[#B9AFC8]">
              {PORTFOLIO_DATA.heroIntro}
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-lg bg-[#C13BFF] px-6 py-3 text-sm font-semibold text-white whitespace-nowrap shrink-0 transition-colors duration-200 hover:bg-[#F04BCB]"
              >
                <span>Explore My Projects</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>

              <a
                href="#contact"
                className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-lg border border-white/15 bg-[#211632] px-6 py-3 text-sm font-semibold text-white whitespace-nowrap shrink-0 transition-colors duration-200 hover:border-[#C13BFF]/60 hover:bg-[#291B3E]"
              >
                <Mail className="h-4 w-4 text-[#B9AFC8]" aria-hidden="true" />
                <span>Contact Me</span>
              </a>
            </div>
          </div>

          {/* Right Column: Profile Portrait Frame */}
          <div className="flex items-stretch lg:col-span-5">
            <div className="relative flex w-full flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-[#211632] p-4 sm:p-5">
              {/* Subtle geometric workspace corner markers */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute top-3 left-3 h-3 w-3 border-t border-l border-[#C13BFF]/70"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute top-3 right-3 h-3 w-3 border-t border-r border-[#F04BCB]/70"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute bottom-3 left-3 h-3 w-3 border-b border-l border-[#F04BCB]/70"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute bottom-3 right-3 h-3 w-3 border-b border-r border-[#C13BFF]/70"
              />

              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-[#191127] lg:h-full lg:min-h-[420px]">
                {!imageError && PROFILE_PHOTO_PATH ? (
                  <img
                    src={PROFILE_PHOTO_PATH}
                    alt={PORTFOLIO_DATA.profilePhotoAlt}
                    referrerPolicy="no-referrer"
                    onError={() => setImageError(true)}
                    className="h-full w-full object-cover object-top transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.02]"
                  />
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-[#191127] p-6 text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-xl border border-white/10 bg-[#211632] text-[#C13BFF]">
                      <User className="h-8 w-8" aria-hidden="true" />
                    </div>
                    <p className="font-display text-base font-semibold text-white">
                      {PORTFOLIO_DATA.name}
                    </p>
                    <p className="text-xs text-[#B9AFC8]">
                      Profile portrait placeholder
                    </p>
                  </div>
                )}

                {/* Subtle bottom gradient scrim for clean caption legibility */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#100B1C]/85 via-[#100B1C]/35 to-transparent"
                />
                <div className="absolute inset-x-4 bottom-3.5 flex items-center justify-between gap-2 text-xs text-[#B9AFC8]">
                  <span className="font-medium text-white">{PORTFOLIO_DATA.name}</span>
                  <span>Dhaka, Bangladesh</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
