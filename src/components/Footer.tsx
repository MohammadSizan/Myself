import { ArrowUp } from 'lucide-react';
import { PORTFOLIO_DATA } from '../config/portfolio';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#100B1C] py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-sm text-[#B9AFC8] sm:flex-row sm:px-6 lg:px-8">
        <p>
          © {year} {PORTFOLIO_DATA.name}. All rights reserved.
        </p>

        <div className="flex items-center gap-6">
          <a
            href="#home"
            className="inline-flex min-h-[40px] items-center gap-1.5 text-sm font-medium text-[#B9AFC8] transition-colors hover:text-white"
          >
            <span>Back to top</span>
            <ArrowUp className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
