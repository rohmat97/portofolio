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

    // Gravity Wells Attractors & Orbital Particles Physics Engine
    const wells = [
      { x: width * 0.75, y: height * 0.35, mass: 2200, color: '#38bdf8' },
      { x: width * 0.25, y: height * 0.65, mass: 1800, color: '#a855f7' },
    ];

    const particles = Array.from({ length: 120 }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 1.5,
      vy: (Math.random() - 0.5) * 1.5,
      size: Math.random() * 2 + 1,
      color: Math.random() > 0.5 ? '#38bdf8' : '#c084fc',
    }));

    // Interactive Mouse Attractor
    let mouseWell = { x: -1000, y: -1000, mass: 3000, color: '#2dd4bf' };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseWell.x = e.clientX - rect.left;
      mouseWell.y = e.clientY - rect.top;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      // CLEAR CANVAS FULLY EVERY FRAME (ZERO BLUE TINT / ZERO OVERLAY)
      ctx.clearRect(0, 0, width, height);

      const allWells = mouseWell.x > 0 ? [...wells, mouseWell] : wells;

      // Draw Gravity Wells Glowing Attractors
      allWells.forEach((w) => {
        ctx.beginPath();
        ctx.arc(w.x, w.y, 6, 0, Math.PI * 2);
        ctx.fillStyle = w.color;
        ctx.shadowBlur = 15;
        ctx.shadowColor = w.color;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(w.x, w.y, 35, 0, Math.PI * 2);
        ctx.strokeStyle = `${w.color}33`;
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      // Update & Draw Gravitational Particle Physics
      particles.forEach((p) => {
        allWells.forEach((w) => {
          const dx = w.x - p.x;
          const dy = w.y - p.y;
          const distSq = dx * dx + dy * dy + 400; // Softening parameter
          const dist = Math.sqrt(distSq);
          const force = w.mass / distSq;

          p.vx += (dx / dist) * force * 0.04;
          p.vy += (dy / dist) * force * 0.04;
        });

        // Speed Cap & Dampening
        p.vx *= 0.985;
        p.vy *= 0.985;

        p.x += p.vx;
        p.y += p.vy;

        // Wrap Around Canvas Bounds
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 8;
        ctx.shadowColor = p.color;
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
      className="absolute inset-0 w-full h-full pointer-events-none z-0 mix-blend-screen opacity-60 no-print bg-transparent"
    />
  );
};

export default GravityWells;
