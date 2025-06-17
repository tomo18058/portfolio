import { useEffect, useState } from 'react';
import Hero from './components/hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import './index.css';

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
      className="relative min-h-screen overflow-hidden bg-center bg-cover"
      style={{ backgroundImage: `url(${import.meta.env.BASE_URL}bg-stars.jpg)`, }}
    >
      <div className="absolute inset-0 z-0">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute bg-white animate-shooting-star opacity-80"
            style={{
              top: star.top,
              left: star.left,
              width: '2px',
              height: '80px',
              borderRadius: '1px',
              animationDuration: `${star.duration}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-screen">
          <h1 className="text-5xl font-bold text-white animate__animated animate__fadeIn">TOMOKI Portfolio</h1>
        </div>
        <Hero />
        <Projects />
        <Skills />
      </div>
    </div>
  );
}