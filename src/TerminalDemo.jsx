import { useState, useEffect, useCallback } from 'react';

const CHARS = '!@#$%^&*()_+-=[]{}|;:,.<>?/`~abcdefghijklmnopqrstuvwxyz0123456789';

const LINES = [
  { cmd: 'yantrific assess --domain acme-corp', delay: 600 },
  { cmd: '', text: 'Scanning business processes...', delay: 300 },
  { cmd: '', text: '3 high-impact AI opportunities identified', ok: true, delay: 200 },
  { cmd: '', text: '└─ Customer support automation · 65% faster resolution', delay: 100 },
  { cmd: '', text: '└─ Document intelligence · 80% faster extraction', delay: 100 },
  { cmd: '', text: '└─ Demand forecasting · 22% inventory reduction', delay: 100 },
  { cmd: '', text: 'Building implementation roadmap...', delay: 400 },
  { cmd: '', text: 'ROI projected · 4.2× within 12 months', ok: true, delay: 200 },
  { cmd: '', text: 'Ready. Ownership transfers to your team.', delay: 100 },
];

function scrambleText(text, progress) {
  return text.split('').map((ch, i) => {
    if (ch === ' ') return ' ';
    const threshold = Math.min(1, (i / text.length) * 1.2 + 0.15);
    if (progress >= threshold) return ch;
    return CHARS[Math.floor(Math.random() * CHARS.length)];
  }).join('');
}

function TypeChar({ char, done }) {
  const [display, setDisplay] = useState(done ? char : CHARS[Math.floor(Math.random() * CHARS.length)]);

  useEffect(() => {
    if (done) {
      setDisplay(char);
      return;
    }
    const id = setInterval(() => {
      setDisplay(CHARS[Math.floor(Math.random() * CHARS.length)]);
    }, 50);
    return () => clearInterval(id);
  }, [char, done]);

  return <span>{display}</span>;
}

function ScrambleLine({ text, done }) {
  return (
    <span>
      {text.split('').map((ch, i) => (
        <TypeChar key={i} char={ch} done={done} />
      ))}
    </span>
  );
}

function Cursor() {
  return <span className="cursor">▊</span>;
}

export default function TerminalDemo() {
  const [visibleLines, setVisibleLines] = useState([]);
  const [lineProgression, setLineProgression] = useState({});

  const advance = useCallback(() => {
    setVisibleLines(prev => {
      if (prev.length >= LINES.length) {
        setTimeout(() => {
          setVisibleLines([]);
          setLineProgression({});
        }, 3000);
        return prev;
      }
      const idx = prev.length;
      const line = LINES[idx];
      const next = [...prev, idx];
      if (line.text) {
        setLineProgression(p => ({ ...p, [idx]: { scramble: true, done: false, ok: line.ok } }));
        setTimeout(() => {
          setLineProgression(p => ({ ...p, [idx]: { ...p[idx], done: true } }));
        }, line.text.length * 40 + 400);
      } else if (line.cmd) {
        setLineProgression(p => ({ ...p, [idx]: { cmd: true, done: false } }));
        setTimeout(() => {
          setLineProgression(p => ({ ...p, [idx]: { ...p[idx], done: true } }));
        }, line.cmd.length * 50 + 600);
      }
      setTimeout(advance, line.delay + 300);
      return next;
    });
  }, []);

  useEffect(() => {
    const t = setTimeout(advance, 500);
    return () => clearTimeout(t);
  }, [advance]);

  return (
    <div className="terminal">
      <div className="terminal__bar">
        <span className="terminal__dot terminal__dot--red" />
        <span className="terminal__dot terminal__dot--yellow" />
        <span className="terminal__dot terminal__dot--green" />
        <span className="terminal__label">yantrific — ai assessor</span>
      </div>
      <div className="terminal__body">
        {visibleLines.map((idx) => {
          const line = LINES[idx];
          const state = lineProgression[idx] || {};
          return (
            <div key={idx} className="terminal__line">
              {state.cmd ? (
                <span className="terminal__prompt">
                  <span className="terminal__dollar">$</span>{' '}
                  {state.done ? (
                    <span className="terminal__cmd">{line.cmd}</span>
                  ) : (
                    <ScrambleLine text={line.cmd} done={false} />
                  )}
                </span>
              ) : state.scramble ? (
                <span className={state.ok ? 'terminal__ok' : ''}>
                  {state.done ? (
                    <span>{line.text}</span>
                  ) : (
                    <ScrambleLine text={line.text} done={false} />
                  )}
                </span>
              ) : null}
            </div>
          );
        })}
        <div className="terminal__line"><Cursor /></div>
      </div>
    </div>
  );
}
