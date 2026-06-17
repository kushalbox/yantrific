import { useState, useEffect, useCallback } from 'react';

const CHARS = '!@#$%^&*_+-=[]{}|;:<>?/~';

const TABS = ['SCRAPE', 'SEARCH', 'MAP'];
const FORMATS = ['.JSON', '.MD'];

const JSON_DATA = [
  [
    { k: '"url"', v: '"https://acme-corp.com/api"' },
    { k: '"title"', v: '"Yantrific · AI Consulting"' },
    { k: '"markdown"', v: '"# AI strategy to production..."' },
    { k: '"score"', v: '0.97' },
    { k: '"tokens"', v: '1,247' },
  ],
  [
    { k: '"url"', v: '"https://docs.acme-corp.com"' },
    { k: '"title"', v: '"AI Implementation Guide"' },
    { k: '"markdown"', v: '"# Getting started with AI..."' },
    { k: '"score"', v: '0.94' },
    { k: '"tokens"', v: '892' },
  ],
  [
    { k: '"url"', v: '"https://acme-corp.com/blog"' },
    { k: '"title"', v: '"AI in Production · Case Study"' },
    { k: '"markdown"', v: '"How we reduced costs by 40%..."' },
    { k: '"score"', v: '0.91' },
    { k: '"tokens"', v: '2,103' },
  ],
];

function randomChar() {
  return CHARS[Math.floor(Math.random() * CHARS.length)];
}

function Scramble({ text, speed, done }) {
  const [display, setDisplay] = useState('');
  const [resolved, setResolved] = useState(false);

  useEffect(() => {
    if (done) {
      setDisplay(text);
      setResolved(true);
      return;
    }
    setResolved(false);
    const chars = text.split('');
    let frame = 0;
    const rate = speed || 30;
    const totalFrames = chars.length * 2 + 15;
    const id = setInterval(() => {
      frame++;
      setDisplay(
        chars.map((ch, i) => {
          if (ch === ' ' || ch === ':' || ch === ',' || ch === '.' || ch === '-' || ch === '/') return ch;
          const progress = frame / totalFrames;
          const threshold = Math.min(0.95, (i / chars.length) * 1.2 + 0.1);
          if (progress >= threshold) return ch;
          return randomChar();
        }).join('')
      );
      if (frame >= totalFrames) {
        setDisplay(text);
        setResolved(true);
        clearInterval(id);
      }
    }, rate);
    return () => clearInterval(id);
  }, [text, speed, done]);

  return <span className={resolved ? 'scramble--done' : ''}>{display}</span>;
}

function Line({ data, active }) {
  return (
    <div className={`code-line ${active ? 'code-line--active' : ''}`}>
      <span className="code-line__num">{data.i}</span>
      <span className="code-line__bracket">{'  {'}</span>
      {data.fields.map((f, j) => (
        <div key={j} className="code-line__field">
          <span className="code-line__key">{active ? <Scramble text={f.k} speed={20} /> : f.k}</span>
          <span className="code-line__sep">: </span>
          <span className="code-line__val">{active ? <Scramble text={f.v} speed={25} /> : f.v}</span>
          {j < data.fields.length - 1 && <span className="code-line__comma">,</span>}
        </div>
      ))}
      <span className="code-line__bracket">{'  }'}</span>
    </div>
  );
}

export default function TerminalDemo() {
  const [tab, setTab] = useState(0);
  const [format, setFormat] = useState(0);
  const [phase, setPhase] = useState('scrambling');
  const [activeLine, setActiveLine] = useState(null);
  const [done, setDone] = useState(false);

  const runDemo = useCallback(() => {
    setPhase('scrambling');
    setActiveLine(null);
    setDone(false);
    let lineIdx = 0;
    const lines = JSON_DATA.length;
    const t1 = setInterval(() => {
      if (lineIdx < lines) {
        setActiveLine(lineIdx);
        lineIdx++;
      } else {
        clearInterval(t1);
        setTimeout(() => {
          setDone(true);
          setActiveLine(null);
        }, 500);
      }
    }, 600);
    const totalTime = lines * 600 + 800;
    setTimeout(() => {
      setPhase('done');
      setTimeout(() => {
        setTab(t => (t + 1) % TABS.length);
        setFormat(f => (f + 1) % FORMATS.length);
      }, 1500);
    }, totalTime);
  }, []);

  useEffect(() => {
    const t = setTimeout(runDemo, 400);
    return () => clearTimeout(t);
  }, [runDemo]);

  useEffect(() => {
    if (phase === 'done') {
      const t = setTimeout(runDemo, 1800);
      return () => clearTimeout(t);
    }
  }, [phase, runDemo]);

  const lines = JSON_DATA.map((fields, i) => ({
    i: i + 1,
    fields,
  }));

  return (
    <div className="term">
      <div className="term__bar">
        <span className="term__dot" />
        <span className="term__tab">
          {TABS.map((t, i) => (
            <span key={t} className={`term__tab-item ${i === tab ? 'term__tab-item--active' : ''}`}>
              [ {t} ]
            </span>
          ))}
        </span>
        <span className="term__format">
          {FORMATS.map((f, i) => (
            <span key={f} className={`term__fmt ${i === format ? 'term__fmt--active' : ''}`}>{f}</span>
          ))}
        </span>
      </div>
      <div className="term__body">
        <div className="term__status">
          <span className="term__indicator" />
          {phase === 'scrambling' ? (
            <span className="term__status-text"><Scramble text="Analyzing business processes..." speed={25} /></span>
          ) : (
            <span className="term__status-text term__status-text--ok">200 OK · 3 results</span>
          )}
        </div>
        <div className="term__code">
          <span className="code-line__bracket">[</span>
          {lines.map((l, i) => (
            <Line key={i} data={l} active={activeLine === i} />
          ))}
          <span className="code-line__bracket">]</span>
        </div>
        <div className="term__cursor" />
      </div>
    </div>
  );
}
