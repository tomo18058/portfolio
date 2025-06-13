import { useEffect, useState } from 'react';
import Hero from './components/hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import './index.css'; // shooting-star用CSS

type Star = { id: number; top: string; left: string; duration: number };

export default function App() {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const id = Date.now();
      const top = Math.random() * 80 + '%';
      const left = Math.random() * 80 + '%';
      const duration = Math.random() * 1.5 + 1;

      const newStar: Star = { id, top, left, duration };
      setStars((prev) => [...prev, newStar]);

      setTimeout(() => {
        setStars((prev) => prev.filter((star) => star.id !== id));
      }, duration * 1000);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative min-h-screen overflow-hidden text-white bg-center bg-cover"
      style={{ backgroundImage: "url('public/bg-stars.jpg')" }}
    >
      {/* ✅ これで .absolute な星を相対配置できる */}
      <div className="absolute inset-0 z-50 pointer-events-none">
        {stars.map((star) => (
          <div key={star.id} className="absolute bg-red-500 animate-shooting-star opacity-80"
            style={{
              top: star.top,
              left: star.left,
              width: '2px', // より細く
              height: '60px', // 長めの光線
              // background: 'linear-gradient(45deg, white, transparent)',
              background: 'linear-gradient(45deg, rgba(255,223,0,0.9), rgba(255,223,0,0))',
              opacity: 0.8,
              borderRadius: '1px',
              animationDuration: `${star.duration}s`,
              boxShadow: '0 0 10px 5px rgba(255, 255, 255, 0.4)', // 発光感
            }}
          />
        ))}
      </div>

      <div className="relative z-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-screen">
          <h1 className="text-5xl font-bold animate__animated animate__fadeIn">TOMOKI Portfolio</h1>
        </div>
        <Hero />
        <Projects />
        <Skills />
      </div>
    </div>
  );
}
