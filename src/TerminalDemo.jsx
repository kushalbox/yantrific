import { useState, useEffect, useCallback } from 'react';

const CHARS = '!@#$%^&*_+-=[]{}|;:<>?/~';
const DIGITS = '0123456789';

const STEPS = [
  { tag: 'SCAN', lines: [
    'scanning business logic layers...',
    'indexing process topology · 142 nodes',
    '✓ knowledge graph complete',
  ]},
  { tag: 'ANALYZE', lines: [
    'running inference on 4 candidates...',
    'customer support · 65% improvement',
    'document intelligence · 80% faster',
    'demand forecasting · 22% reduction',
  ]},
  { tag: 'PROJECT', lines: [
    'simulating ROI scenarios...',
    '✓ 4.2× projected within 12 months',
    '✓ plan delivered to your team',
  ]},
];

function randomFrom(str) {
  return str[Math.floor(Math.random() * str.length)];
}

function Scramble({ text, done, fast }) {
  const [display, setDisplay] = useState(
    text.split('').map(() => randomFrom(CHARS)).join('')
  );

  useEffect(() => {
    if (done) {
      setDisplay(text);
      return;
    }
    const interval = fast ? 25 : 50;
    const id = setInterval(() => {
      setDisplay(prev =>
        prev.split('').map((ch, i) => {
          if (text[i] === ' ' || text[i] === '·' || text[i] === '─') return text[i];
          const threshold = Math.min(1, (i / text.length) * 1.3 + 0.1);
          if (Math.random() < threshold) return text[i];
          return randomFrom(CHARS);
        }).join('')
      );
    }, interval);
    return () => clearInterval(id);
  }, [text, done, fast]);

  return <span>{display}</span>;
}

function NumberStream() {
  const [cols] = useState(() =>
    Array.from({ length: 16 }, () => Math.floor(Math.random() * 8))
  );
  return (
    <div className="num-stream">
      {cols.map((offset, i) => (
        <span key={i} className="num-stream__col" style={{ animationDelay: `${offset * 0.15}s` }}>
          {Array.from({ length: 6 }, (_, j) => (
            <span key={j}>{randomFrom(DIGITS)}</span>
          ))}
        </span>
      ))}
    </div>
  );
}

export default function TerminalDemo() {
  const [step, setStep] = useState(0);
  const [lineIdx, setLineIdx] = useState(0);
  const [lineDone, setLineDone] = useState(false);
  const [phase, setPhase] = useState('scramble');

  const current = STEPS[step];

  const advanceLine = useCallback(() => {
    if (!current) return;
    if (lineIdx >= current.lines.length) {
      const t = setTimeout(() => {
        setStep(s => (s + 1) % STEPS.length);
        setLineIdx(0);
        setLineDone(false);
        setPhase('scramble');
      }, 1200);
      return () => clearTimeout(t);
    }
    setPhase('scramble');
    setLineDone(false);
    const t = setTimeout(() => {
      setLineDone(true);
      setPhase('done');
      const t2 = setTimeout(() => {
        setLineIdx(i => i + 1);
      }, 400);
      return () => clearTimeout(t2);
    }, current.lines[lineIdx].length * 25 + 400);
    return () => clearTimeout(t);
  }, [step, lineIdx, current]);

  useEffect(() => {
    if (current) advanceLine();
  }, [lineIdx, step, current, advanceLine]);

  return (
    <div className="ai-panel">
      <div className="ai-panel__glow" />
      <NumberStream />
      <div className="ai-panel__body">
        <div className="ai-panel__bar">
          <span className="ai-panel__indicator" />
          <span className="ai-panel__tag">{current?.tag || 'READY'}</span>
          <span className="ai-panel__divider">|</span>
          <span className="ai-panel__agent">yantrific ai</span>
        </div>
        <div className="ai-panel__lines">
          {current?.lines.slice(0, lineIdx).map((l, i) => (
            <div key={i} className="ai-panel__line ai-panel__line--done">
              {l.startsWith('✓') ? '✓' : '▸'} {l.slice(2)}
            </div>
          ))}
          {current && lineIdx < current.lines.length && (
            <div className="ai-panel__line ai-panel__line--active">
              <span className="ai-panel__arrow">▸</span>{' '}
              {phase === 'done' ? (
                <span>{current.lines[lineIdx].slice(2)}</span>
              ) : (
                <Scramble text={current.lines[lineIdx].slice(2)} done={false} fast />
              )}
            </div>
          )}
          <div className="ai-panel__cursor" />
        </div>
      </div>
    </div>
  );
}
