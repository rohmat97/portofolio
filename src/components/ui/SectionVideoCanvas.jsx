import React, { useEffect, useRef } from 'react';

const SectionVideoCanvas = ({ section, isActive = true }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!isActive) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = canvas.offsetWidth || 500);
    let height = (canvas.height = canvas.offsetHeight || 500);

    const handleResize = () => {
      if (canvas) {
        width = canvas.width = canvas.offsetWidth || 500;
        height = canvas.height = canvas.offsetHeight || 500;
      }
    };
    window.addEventListener('resize', handleResize);

    // 1. HERO SECTION: COSMIC STARS WARP (60FPS)
    if (section === 'home') {
      const stars = Array.from({ length: 60 }).map(() => ({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2 + 1,
        speed: Math.random() * 1.5 + 0.5,
        color: Math.random() > 0.4 ? '#38bdf8' : '#c084fc',
      }));

      const drawStars = () => {
        ctx.fillStyle = 'rgba(8, 12, 20, 0.2)';
        ctx.fillRect(0, 0, width, height);

        stars.forEach((s) => {
          s.y += s.speed;
          if (s.y > height) {
            s.y = 0;
            s.x = Math.random() * width;
          }
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
          ctx.fillStyle = s.color;
          ctx.fill();
        });
        animationFrameId = requestAnimationFrame(drawStars);
      };
      drawStars();
    }

    // 2. ABOUT SECTION: MATRIX CODE RAIN (60FPS)
    else if (section === 'about') {
      const chars = '01ABCDEFGHIJKLMNOPQRSTUVWXYZ<>{}/*=';
      const fontSize = 14;
      const columns = Math.floor(width / fontSize) || 20;
      const drops = Array.from({ length: columns }).map(() => Math.random() * -50);

      const drawMatrix = () => {
        ctx.fillStyle = 'rgba(8, 12, 20, 0.15)';
        ctx.fillRect(0, 0, width, height);

        ctx.fillStyle = '#10b981';
        ctx.font = `${fontSize}px monospace`;

        for (let i = 0; i < drops.length; i++) {
          const text = chars[Math.floor(Math.random() * chars.length)];
          const x = i * fontSize;
          const y = drops[i] * fontSize;

          ctx.fillText(text, x, y);

          if (y > height && Math.random() > 0.975) {
            drops[i] = 0;
          }
          drops[i]++;
        }
        animationFrameId = requestAnimationFrame(drawMatrix);
      };
      drawMatrix();
    }

    // 3. SKILLS SECTION: SWIRLING BLACK HOLE (60FPS)
    else if (section === 'skills') {
      const particles = Array.from({ length: 65 }).map(() => ({
        radius: Math.random() * 160 + 40,
        angle: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.02 + 0.008,
        size: Math.random() * 2 + 1,
        color: Math.random() > 0.5 ? '#c084fc' : '#38bdf8',
      }));

      const drawBlackHole = () => {
        ctx.fillStyle = 'rgba(8, 12, 20, 0.2)';
        ctx.fillRect(0, 0, width, height);

        const cx = width / 2;
        const cy = height / 2;

        particles.forEach((p) => {
          p.angle += p.speed;
          p.radius -= 0.12;
          if (p.radius < 25) p.radius = Math.random() * 160 + 40;

          const x = cx + Math.cos(p.angle) * p.radius;
          const y = cy + Math.sin(p.angle) * (p.radius * 0.45);

          ctx.beginPath();
          ctx.arc(x, y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.fill();
        });

        // Center Black Hole Singularity Void
        ctx.beginPath();
        ctx.arc(cx, cy, 30, 0, Math.PI * 2);
        ctx.fillStyle = '#000000';
        ctx.shadowBlur = 20;
        ctx.shadowColor = '#a855f7';
        ctx.fill();
        ctx.shadowBlur = 0;

        animationFrameId = requestAnimationFrame(drawBlackHole);
      };
      drawBlackHole();
    }

    // 4. PROJECTS SECTION: METEOR SHOWER (60FPS)
    else if (section === 'projects') {
      const comets = Array.from({ length: 10 }).map(() => ({
        x: Math.random() * width + 200,
        y: Math.random() * -200,
        length: Math.random() * 80 + 60,
        speed: Math.random() * 6 + 4,
        size: Math.random() * 2 + 1,
      }));

      const drawComets = () => {
        ctx.fillStyle = 'rgba(8, 12, 20, 0.2)';
        ctx.fillRect(0, 0, width, height);

        comets.forEach((c) => {
          c.x -= c.speed * 1.2;
          c.y += c.speed;

          if (c.y > height || c.x < -100) {
            c.x = Math.random() * width + 200;
            c.y = Math.random() * -100;
          }

          const grad = ctx.createLinearGradient(c.x, c.y, c.x + c.length, c.y - c.length);
          grad.addColorStop(0, '#38bdf8');
          grad.addColorStop(1, 'transparent');

          ctx.beginPath();
          ctx.moveTo(c.x, c.y);
          ctx.lineTo(c.x + c.length, c.y - c.length);
          ctx.strokeStyle = grad;
          ctx.lineWidth = c.size;
          ctx.stroke();
        });
        animationFrameId = requestAnimationFrame(drawComets);
      };
      drawComets();
    }

    // 5. EXPERIENCE SECTION: QUASAR PULSAR LASER BEAM (60FPS)
    else if (section === 'experience') {
      let pulse = 0;

      const drawPulsar = () => {
        ctx.fillStyle = 'rgba(8, 12, 20, 0.2)';
        ctx.fillRect(0, 0, width, height);

        const cx = width / 2;
        const cy = height / 2;
        pulse += 0.05;
        const size = 28 + Math.sin(pulse) * 6;

        ctx.beginPath();
        ctx.moveTo(cx - 3, 0);
        ctx.lineTo(cx + 3, height);
        ctx.strokeStyle = 'rgba(99, 102, 241, 0.6)';
        ctx.lineWidth = 6;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(cx, cy, size, 0, Math.PI * 2);
        ctx.fillStyle = '#6366f1';
        ctx.shadowBlur = 25;
        ctx.shadowColor = '#38bdf8';
        ctx.fill();
        ctx.shadowBlur = 0;

        animationFrameId = requestAnimationFrame(drawPulsar);
      };
      drawPulsar();
    }

    // 6. CONTACT SECTION: CYBER RADAR GRID SCAN (60FPS)
    else {
      let radarAngle = 0;

      const drawRadar = () => {
        ctx.fillStyle = 'rgba(8, 12, 20, 0.2)';
        ctx.fillRect(0, 0, width, height);

        const cx = width / 2;
        const cy = height / 2;
        radarAngle += 0.03;

        ctx.beginPath();
        ctx.arc(cx, cy, 120, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(20, 184, 166, 0.3)';
        ctx.lineWidth = 1.5;
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(cx + Math.cos(radarAngle) * 120, cy + Math.sin(radarAngle) * 120);
        ctx.strokeStyle = '#14b8a6';
        ctx.lineWidth = 2;
        ctx.stroke();

        animationFrameId = requestAnimationFrame(drawRadar);
      };
      drawRadar();
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [section, isActive]);

  if (!isActive) return null;

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full pointer-events-none mix-blend-screen opacity-60"
    />
  );
};

export default SectionVideoCanvas;
