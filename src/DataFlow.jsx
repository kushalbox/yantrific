import { useEffect, useState, useRef } from 'react';

const BITS = '01';
const HEX = '0123456789ABCDEF';
const SYM = '!@#$%^&*_+-=[]{}|;:<>?/~';

function rand(str) {
  return str[Math.floor(Math.random() * str.length)];
}

function Char({ type, speed }) {
  const [ch, setCh] = useState(rand(type));

  useEffect(() => {
    const id = setInterval(() => {
      setCh(Math.random() < 0.7 ? rand(type) : rand(SYM));
    }, speed || 120);
    return () => clearInterval(id);
  }, [type, speed]);

  return <span>{ch}</span>;
}

function FlowRing() {
  const count = 48;
  const chars = Array.from({ length: count }, (_, i) => {
    const angle = (i / count) * 360;
    const type = i % 3 === 0 ? HEX : BITS;
    const speed = 80 + Math.random() * 100;
    return { angle, type, speed, id: i };
  });

  return (
    <div className="flow-ring">
      <div className="flow-ring__glow" />
      <div className="flow-ring__center">
        <div className="flow-ring__pulse" />
        <div className="flow-ring__pulse flow-ring__pulse--2" />
        <div className="flow-ring__pulse flow-ring__pulse--3" />
        <span className="flow-ring__label">AI</span>
      </div>
      {chars.map(c => (
        <span
          key={c.id}
          className="flow-ring__char"
          style={{
            transform: `rotate(${c.angle}deg) translateY(-80px)`,
            animationDelay: `${c.id * 0.05}s`,
          }}
        >
          <Char type={c.type} speed={c.speed} />
        </span>
      ))}
    </div>
  );
}

function DataStream() {
  const lines = 8;
  return (
    <div className="data-stream">
      {Array.from({ length: lines }, (_, i) => (
        <div key={i} className="data-stream__line" style={{ animationDelay: `${i * 0.12}s` }}>
          {Array.from({ length: 12 + Math.floor(Math.random() * 8) }, (_, j) => (
            <span key={j} className="data-stream__char">
              <Char type={i % 2 === 0 ? HEX : BITS} speed={60 + Math.random() * 80} />
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}

export default function DataFlow() {
  return (
    <div className="data-panel">
      <div className="data-panel__bg" />
      <div className="data-panel__inner">
        <FlowRing />
        <div className="data-panel__info">
          <div className="data-panel__status">
            <span className="data-panel__dot" />
            <span>processing · 3 candidates</span>
          </div>
          <div className="data-panel__metrics">
            <div className="data-panel__metric">
              <span className="data-panel__value">98.3</span>
              <span className="data-panel__unit">%</span>
              <span className="data-panel__label">confidence</span>
            </div>
            <div className="data-panel__metric">
              <span className="data-panel__value">4.2</span>
              <span className="data-panel__unit">x</span>
              <span className="data-panel__label">ROI</span>
            </div>
            <div className="data-panel__metric">
              <span className="data-panel__value">2.4</span>
              <span className="data-panel__unit">s</span>
              <span className="data-panel__label">latency</span>
            </div>
          </div>
        </div>
        <DataStream />
      </div>
    </div>
  );
}
