import React, { useEffect, useRef } from 'react';

const GravityWells = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = canvas.offsetWidth || window.innerWidth);
    let height = (canvas.height = canvas.offsetHeight || window.innerHeight);

    const handleResize = () => {
      if (canvas) {
        width = canvas.width = canvas.offsetWidth || window.innerWidth;
        height = canvas.height = canvas.offsetHeight || window.innerHeight;
      }
    };
    window.addEventListener('resize', handleResize);

    // Gravity Wells Attractors
    const wells = [
      { x: width * 0.75, y: height * 0.35, mass: 2800, color: '#38bdf8', pulse: 0 },
      { x: width * 0.25, y: height * 0.65, mass: 2400, color: '#a855f7', pulse: 1.5 },
    ];

    // Particle Swarm (80 Cosmic Sparkles)
    const colors = ['#38bdf8', '#c084fc', '#34d399', '#fde047', '#f43f5e'];
    const particles = Array.from({ length: 80 }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
      size: Math.random() * 2.5 + 1,
      color: colors[Math.floor(Math.random() * colors.length)],
      sparkle: Math.random() * Math.PI * 2,
    }));

    // Interactive Mouse Sparkle Well
    let mouseWell = { x: -1000, y: -1000, mass: 4000, color: '#2dd4bf', pulse: 0 };
    const sparkTrails = [];

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;
      mouseWell.x = mx;
      mouseWell.y = my;

      // Spawn interactive mouse sparks occasionally
      if (Math.random() > 0.6) {
        sparkTrails.push({
          x: mx + (Math.random() - 0.5) * 20,
          y: my + (Math.random() - 0.5) * 20,
          vx: (Math.random() - 0.5) * 3,
          vy: (Math.random() - 0.5) * 3,
          life: 1,
          size: Math.random() * 3 + 1.5,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
        if (sparkTrails.length > 15) sparkTrails.shift();
      }
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const allWells = mouseWell.x > 0 ? [...wells, mouseWell] : wells;

      // Draw Gravity Wells Shockwave Rings
      allWells.forEach((w) => {
        w.pulse += 0.04;
        const ringSize = (w.pulse % 2) * 50;
        const opacity = Math.max(0, 1 - (w.pulse % 2) / 2);

        // Core Attractor Star
        ctx.beginPath();
        ctx.arc(w.x, w.y, 7, 0, Math.PI * 2);
        ctx.fillStyle = w.color;
        ctx.shadowBlur = 15;
        ctx.shadowColor = w.color;
        ctx.fill();

        // Expanding Shockwave Wave
        ctx.beginPath();
        ctx.arc(w.x, w.y, ringSize, 0, Math.PI * 2);
        ctx.strokeStyle = w.color;
        ctx.globalAlpha = opacity * 0.4;
        ctx.lineWidth = 1.5;
        ctx.stroke();
        ctx.globalAlpha = 1;
        ctx.shadowBlur = 0;
      });

      // Update & Render Mouse Spark Trail
      for (let i = sparkTrails.length - 1; i >= 0; i--) {
        const s = sparkTrails[i];
        s.x += s.vx;
        s.y += s.vy;
        s.life -= 0.04;

        if (s.life <= 0) {
          sparkTrails.splice(i, 1);
          continue;
        }

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size * s.life, 0, Math.PI * 2);
        ctx.fillStyle = s.color;
        ctx.globalAlpha = s.life;
        ctx.fill();
        ctx.globalAlpha = 1;
      }

      // Update & Render Orbital Particle Swarm
      particles.forEach((p) => {
        allWells.forEach((w) => {
          const dx = w.x - p.x;
          const dy = w.y - p.y;
          const distSq = dx * dx + dy * dy + 350;
          const dist = Math.sqrt(distSq);
          const force = w.mass / distSq;

          p.vx += (dx / dist) * force * 0.05;
          p.vy += (dy / dist) * force * 0.05;
        });

        p.vx *= 0.985;
        p.vy *= 0.985;

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        p.sparkle += 0.08;
        const currentSize = p.size + Math.sin(p.sparkle) * 0.8;

        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(0.5, currentSize), 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0 mix-blend-screen opacity-80 no-print bg-transparent"
    />
  );
};

export default GravityWells;
