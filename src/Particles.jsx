import { useEffect, useState } from 'react';

const COLORS = ['rgba(255,79,0,', 'rgba(32,21,21,'];
const PARTICLE_COUNT = 30;

function randomBetween(a, b) {
  return a + Math.random() * (b - a);
}

export default function Particles() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const p = Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
      id: i,
      left: randomBetween(0, 100),
      size: randomBetween(2, 6),
      duration: randomBetween(6, 18),
      delay: randomBetween(0, 10),
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      alpha: randomBetween(0.08, 0.25),
    }));
    setParticles(p);
  }, []);

  return (
    <div className="particles">
      {particles.map(p => (
        <div
          key={p.id}
          className="particle"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            opacity: p.alpha,
            background: `${p.color}${p.alpha})`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
