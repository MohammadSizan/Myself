import { useState } from 'react';
import { Code2, Compass, Layers } from 'lucide-react';
import { PORTFOLIO_DATA } from '../config/portfolio';
import { Reveal } from './Reveal';

type SkillFilter = 'all' | 'current' | 'goal';

export function Skills() {
  const [filter, setFilter] = useState<SkillFilter>('all');

  const visibleSkills = PORTFOLIO_DATA.skills.filter((skill) => {
    if (filter === 'all') return true;
    return skill.stage === filter;
  });

  return (
    <section
      id="skills"
      className="border-b border-white/10 bg-[#100B1C] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-medium text-[#F04BCB]">
                02. Skills &amp; Learning Roadmap
              </p>
              <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
                An honest snapshot of where I am and what comes next.
              </h2>
              <p className="mt-3 max-w-2xl text-base text-[#B9AFC8]">
                I am at the beginning of my developer journey—building a solid foundation in Python before expanding into systems and web technologies.
              </p>
            </div>

            {/* Interactive Filter Tabs */}
            <div
              role="group"
              aria-label="Filter skills by learning stage"
              className="inline-flex w-fit items-center gap-1 rounded-lg border border-white/10 bg-[#191127] p-1 shrink-0"
            >
              {(
                [
                  { id: 'all', label: 'All' },
                  { id: 'current', label: 'Current Level' },
                  { id: 'goal', label: 'Future Goals' },
                ] as const
              ).map((tab) => {
                const active = filter === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setFilter(tab.id)}
                    aria-pressed={active}
                    className={`min-h-[38px] rounded-md px-3.5 py-1.5 text-xs font-semibold whitespace-nowrap shrink-0 transition-colors duration-200 ${
                      active
                        ? 'bg-[#C13BFF] text-white'
                        : 'text-[#B9AFC8] hover:text-white'
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Skills Grid */}
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {visibleSkills.map((skill) => {
              const isCurrent = skill.stage === 'current';
              return (
                <article
                  key={skill.id}
                  className={`flex flex-col justify-between rounded-2xl border p-6 transition-colors duration-200 ${
                    isCurrent
                      ? 'border-[#C13BFF]/50 bg-[#211632]'
                      : 'border-white/10 bg-[#211632]/75 hover:border-[#F04BCB]/40'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-xs font-medium text-[#B9AFC8]">
                        {skill.focusArea}
                        <span aria-hidden="true"> · </span>
                        <span
                          className={
                            isCurrent ? 'text-[#F04BCB] font-semibold' : 'text-[#B9AFC8]'
                          }
                        >
                          {skill.levelLabel}
                        </span>
                      </span>
                      {isCurrent ? (
                        <Code2 className="h-4 w-4 text-[#C13BFF] shrink-0" aria-hidden="true" />
                      ) : (
                        <Compass className="h-4 w-4 text-[#B9AFC8]/70 shrink-0" aria-hidden="true" />
                      )}
                    </div>

                    <h3 className="mt-4 font-display text-2xl font-bold text-white">
                      {skill.name}
                    </h3>

                    <p className="mt-2.5 text-sm leading-relaxed text-[#B9AFC8]">
                      {skill.summary}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4 text-xs">
                    <span className="flex items-center gap-1.5 text-[#B9AFC8]">
                      <Layers className="h-3.5 w-3.5 text-[#C13BFF]" aria-hidden="true" />
                      {isCurrent ? 'Active Study' : 'Planned Milestone'}
                    </span>
                    <span
                      className={`font-mono tabular-nums ${
                        isCurrent ? 'text-white font-medium' : 'text-[#B9AFC8]'
                      }`}
                    >
                      {isCurrent ? 'Beginner' : 'Roadmap'}
                    </span>
                  </div>
                </article>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
