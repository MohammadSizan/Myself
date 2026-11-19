import { PORTFOLIO_DATA } from '../config/portfolio';
import { Reveal } from './Reveal';

export function About() {
  return (
    <section
      id="about"
      className="border-b border-white/10 bg-[#191127] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
            {/* Left Heading Column */}
            <div className="lg:col-span-4">
              <p className="text-sm font-medium text-[#F04BCB]">
                01. About Me
              </p>
              <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
                {PORTFOLIO_DATA.about.heading}
              </h2>
            </div>

            {/* Right Story + Personal Focus Details */}
            <div className="lg:col-span-8">
              <div className="space-y-5 text-base leading-relaxed text-[#B9AFC8] sm:text-lg">
                {PORTFOLIO_DATA.about.paragraphs.map((paragraph, index) => (
                  <p key={index} className="text-[#E9E3F3]">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Clean hairline-divided personal focus grid (no nested cards inside cards) */}
              <dl className="mt-10 grid grid-cols-1 gap-6 border-t border-white/10 pt-8 sm:grid-cols-2">
                {PORTFOLIO_DATA.about.highlights.map((item) => (
                  <div key={item.label} className="space-y-1">
                    <dt className="text-xs font-medium text-[#B9AFC8]">
                      {item.label}
                    </dt>
                    <dd className="font-display text-base font-semibold text-white">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
