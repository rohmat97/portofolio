import React, { useEffect, useRef } from 'react';

const WaterRipple = () => {
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

    const ripples = [];

    const addRipple = (x, y) => {
      ripples.push({
        x,
        y,
        radius: 5,
        maxRadius: Math.random() * 80 + 70,
        opacity: 0.8,
        speed: Math.random() * 1.5 + 1.2,
        color: Math.random() > 0.5 ? '#c084fc' : '#a855f7',
      });
    };

    // Spawn ambient periodic ripples
    const intervalId = setInterval(() => {
      addRipple(Math.random() * width, Math.random() * height);
    }, 1800);

    const handleMouseMove = (e) => {
      if (Math.random() > 0.4) {
        const rect = canvas.getBoundingClientRect();
        addRipple(e.clientX - rect.left, e.clientY - rect.top);
        if (ripples.length > 35) ripples.shift();
      }
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = ripples.length - 1; i >= 0; i--) {
        const r = ripples[i];
        r.radius += r.speed;
        r.opacity = Math.max(0, 1 - r.radius / r.maxRadius);

        if (r.opacity <= 0 || r.radius >= r.maxRadius) {
          ripples.splice(i, 1);
          continue;
        }

        ctx.beginPath();
        ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
        ctx.strokeStyle = r.color;
        ctx.globalAlpha = r.opacity;
        ctx.lineWidth = 2;
        ctx.shadowBlur = 15;
        ctx.shadowColor = r.color;
        ctx.stroke();

        // Inner Echo Ring
        if (r.radius > 15) {
          ctx.beginPath();
          ctx.arc(r.x, r.y, r.radius - 12, 0, Math.PI * 2);
          ctx.strokeStyle = `${r.color}66`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
        ctx.globalAlpha = 1;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      clearInterval(intervalId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0 mix-blend-screen opacity-75 no-print bg-transparent"
    />
  );
};

export default WaterRipple;
