import { useState } from 'react';
import { Play, RotateCcw } from 'lucide-react';

type BallOutcome = '0' | '1' | '2' | '4' | '6' | 'W';

const OUTCOMES: { label: BallOutcome; runs: number; wicket: boolean; note: string }[] = [
  { label: '0', runs: 0, wicket: false, note: 'Dot ball — solid defensive block' },
  { label: '1', runs: 1, wicket: false, note: 'Quick single into the covers' },
  { label: '2', runs: 2, wicket: false, note: 'Placed into the gap for two' },
  { label: '4', runs: 4, wicket: false, note: 'Crisp boundary through mid-off' },
  { label: '6', runs: 6, wicket: false, note: 'Clean strike over long-on!' },
  { label: 'W', runs: 0, wicket: true, note: 'Clean bowled — stumps rattled!' },
];

export function CricketPreview() {
  const [runs, setRuns] = useState(14);
  const [wickets, setWickets] = useState(1);
  const [balls, setBalls] = useState<BallOutcome[]>(['1', '4', '0', '6']);
  const [lastNote, setLastNote] = useState('Click Bowl Ball to test the interactive pitch preview.');

  const isOverComplete = balls.length >= 6 || wickets >= 10;

  const handleBowlBall = () => {
    if (isOverComplete) return;
    // Weighted realistic cricket outcomes
    const roll = Math.random();
    let pick = OUTCOMES[0];
    if (roll < 0.24) pick = OUTCOMES[0];
    else if (roll < 0.56) pick = OUTCOMES[1];
    else if (roll < 0.72) pick = OUTCOMES[2];
    else if (roll < 0.87) pick = OUTCOMES[3];
    else if (roll < 0.94) pick = OUTCOMES[4];
    else pick = OUTCOMES[5];

    setRuns((prev) => prev + pick.runs);
    if (pick.wicket) {
      setWickets((prev) => Math.min(10, prev + 1));
    }
    setBalls((prev) => [...prev, pick.label]);
    setLastNote(pick.note);
  };

  const handleReset = () => {
    setRuns(0);
    setWickets(0);
    setBalls([]);
    setLastNote('Fresh over ready — press Bowl Ball to start.');
  };

  const latestBall = balls[balls.length - 1];

  return (
    <div className="flex h-full flex-col justify-between rounded-xl border border-white/10 bg-[#100B1C] p-4 sm:p-5">
      {/* Preview Top Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
        <span className="text-xs font-medium text-[#B9AFC8]">
          Interactive Concept Preview <span aria-hidden="true">·</span> Browser Simulation
        </span>
        <span className="font-mono text-xs font-medium tabular-nums text-[#F04BCB]">
          Over 0.{balls.length}
        </span>
      </div>

      {/* Pitch Visualization + Scoreboard */}
      <div className="my-4 grid grid-cols-1 items-center gap-4 sm:grid-cols-12">
        {/* Minimal SVG Pitch Diagram */}
        <div className="sm:col-span-7">
          <div className="relative overflow-hidden rounded-lg border border-white/10 bg-[#191127] p-3">
            <svg
              viewBox="0 0 280 120"
              className="h-28 w-full"
              role="img"
              aria-label="Cricket pitch simulation preview diagram"
            >
              {/* Outfield Boundary */}
              <rect
                x="6"
                y="6"
                width="268"
                height="108"
                rx="14"
                fill="#100B1C"
                stroke="rgba(185,175,200,0.18)"
                strokeWidth="1"
              />
              {/* 30-yard circle hint */}
              <ellipse
                cx="140"
                cy="60"
                rx="105"
                ry="42"
                fill="none"
                stroke="rgba(193,59,255,0.22)"
                strokeDasharray="4 4"
                strokeWidth="1"
              />
              {/* Pitch Strip */}
              <rect
                x="68"
                y="45"
                width="144"
                height="30"
                rx="4"
                fill="#211632"
                stroke="rgba(240,75,203,0.35)"
                strokeWidth="1"
              />
              {/* Batting & Bowling Creases */}
              <line x1="84" y1="45" x2="84" y2="75" stroke="#B9AFC8" strokeWidth="1.2" opacity="0.55" />
              <line x1="196" y1="45" x2="196" y2="75" stroke="#B9AFC8" strokeWidth="1.2" opacity="0.55" />

              {/* Bowler & Batsman Stumps */}
              <line x1="74" y1="53" x2="74" y2="67" stroke="#FFFFFF" strokeWidth="2" />
              <line x1="206" y1="53" x2="206" y2="67" stroke="#FFFFFF" strokeWidth="2" />

              {/* Ball Trajectory */}
              <path
                d="M 86 60 Q 140 48 194 60"
                fill="none"
                stroke="#C13BFF"
                strokeWidth="1.5"
                strokeDasharray="3 3"
              />
              {/* Active Ball Marker */}
              <circle
                cx={latestBall === '4' || latestBall === '6' ? 242 : latestBall === 'W' ? 206 : 162}
                cy={latestBall === '6' ? 26 : latestBall === '4' ? 92 : 60}
                r="5"
                fill={latestBall === 'W' ? '#F04BCB' : '#C13BFF'}
              />
            </svg>
          </div>
        </div>

        {/* Live Score Readout */}
        <div className="flex flex-col justify-between gap-3 sm:col-span-5">
          <div>
            <p className="text-xs text-[#B9AFC8]">Score</p>
            <p className="font-display text-3xl font-bold tabular-nums text-white">
              {runs}/{wickets}
            </p>
          </div>

          <div>
            <p className="mb-1.5 text-xs text-[#B9AFC8]">This Over</p>
            <div className="flex flex-wrap items-center gap-1.5">
              {Array.from({ length: 6 }).map((_, idx) => {
                const outcome = balls[idx];
                return (
                  <span
                    key={idx}
                    className={`inline-flex h-7 w-7 items-center justify-center rounded-md border font-mono text-xs font-medium tabular-nums ${
                      outcome === 'W'
                        ? 'border-[#F04BCB] bg-[#F04BCB]/20 text-white'
                        : outcome === '4' || outcome === '6'
                        ? 'border-[#C13BFF] bg-[#C13BFF]/20 text-white'
                        : outcome
                        ? 'border-white/15 bg-[#211632] text-white'
                        : 'border-white/10 bg-[#191127] text-[#B9AFC8]/40'
                    }`}
                  >
                    {outcome ?? '·'}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Commentary & Controls */}
      <div className="flex flex-col justify-between gap-3 border-t border-white/10 pt-3 sm:flex-row sm:items-center">
        <p className="text-xs text-[#B9AFC8]" aria-live="polite">
          {isOverComplete ? 'Over complete — reset to bowl another over.' : lastNote}
        </p>

        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={handleBowlBall}
            disabled={isOverComplete}
            className="inline-flex min-h-[40px] items-center gap-1.5 rounded-lg bg-[#C13BFF] px-3.5 py-2 text-xs font-semibold text-white whitespace-nowrap shrink-0 transition-colors hover:bg-[#F04BCB] disabled:cursor-not-allowed disabled:opacity-45"
          >
            <Play className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Bowl Ball</span>
          </button>

          <button
            type="button"
            onClick={handleReset}
            aria-label="Reset over"
            className="inline-flex min-h-[40px] items-center gap-1.5 rounded-lg border border-white/15 bg-[#211632] px-3 py-2 text-xs font-medium text-[#B9AFC8] whitespace-nowrap shrink-0 transition-colors hover:border-white/30 hover:text-white"
          >
            <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Reset</span>
          </button>
        </div>
      </div>
    </div>
  );
}
