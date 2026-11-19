import { GraduationCap } from 'lucide-react';
import { PORTFOLIO_DATA } from '../config/portfolio';
import { Reveal } from './Reveal';

export function Education() {
  return (
    <section
      id="education"
      className="border-b border-white/10 bg-[#100B1C] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-4">
              <p className="text-sm font-medium text-[#F04BCB]">
                04. Education
              </p>
              <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Academic Foundation
              </h2>
              <p className="mt-3 text-base text-[#B9AFC8]">
                Balancing formal secondary studies with independent programming practice.
              </p>
            </div>

            <div className="lg:col-span-8">
              <ol className="space-y-6">
                {PORTFOLIO_DATA.education.map((entry) => (
                  <li
                    key={entry.id}
                    className="rounded-2xl border border-white/10 bg-[#211632] p-6 sm:p-7"
                  >
                    <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                      <div className="flex items-start gap-4">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#C13BFF]/40 bg-[#191127] text-[#C13BFF] shrink-0">
                          <GraduationCap className="h-5 w-5" aria-hidden="true" />
                        </div>
                        <div>
                          <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-[#F04BCB]">
                            <span>{entry.academicLevel}</span>
                            <span aria-hidden="true">·</span>
                            <span className="text-[#B9AFC8]">{entry.timeframe}</span>
                          </div>
                          <h3 className="mt-1.5 font-display text-xl font-bold text-white sm:text-2xl">
                            {entry.institution}
                          </h3>
                          <p className="mt-2.5 text-sm leading-relaxed text-[#B9AFC8] sm:text-base">
                            {entry.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
