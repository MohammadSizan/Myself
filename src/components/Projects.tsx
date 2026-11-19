import { ExternalLink, Gamepad2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../config/portfolio';
import { CricketPreview } from './CricketPreview';
import { Reveal } from './Reveal';

export function Projects() {
  const project = PORTFOLIO_DATA.featuredProject;

  return (
    <section
      id="projects"
      className="border-b border-white/10 bg-[#191127] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-[#F04BCB]">
              03. Featured Project
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Turning interest in sports and logic into playable experiments.
            </h2>
          </div>

          <article className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-[#211632] p-5 sm:p-8">
            <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12">
              {/* Project Info Column */}
              <div className="flex flex-col justify-between lg:col-span-5">
                <div>
                  {/* Clean unboxed metadata */}
                  <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-[#B9AFC8]">
                    <span className="text-[#F04BCB]">{project.statusLabel}</span>
                    {project.attributes.map((attr) => (
                      <span key={attr} className="inline-flex items-center gap-2">
                        <span aria-hidden="true">·</span>
                        <span>{attr}</span>
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#C13BFF]/40 bg-[#191127] text-[#C13BFF] shrink-0">
                      <Gamepad2 className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">
                      {project.title}
                    </h3>
                  </div>

                  <p className="mt-5 text-base leading-relaxed text-[#E9E3F3]">
                    {project.description}
                  </p>
                </div>

                {/* Verified GitHub Profile Link */}
                <div className="mt-8 border-t border-white/10 pt-6">
                  <a
                    href={project.githubProfileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-white/15 bg-[#191127] px-5 py-2.5 text-sm font-semibold text-white whitespace-nowrap shrink-0 transition-colors duration-200 hover:border-[#C13BFF] hover:text-[#F04BCB]"
                  >
                    <span>Follow Progress on GitHub</span>
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </div>

              {/* Project Preview Area */}
              <div className="lg:col-span-7">
                <CricketPreview />
              </div>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
