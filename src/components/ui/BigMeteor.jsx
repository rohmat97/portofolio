import React from 'react';

const BigMeteor = ({ delay = '0s' }) => {
  return (
    <div
      className="animate-big-meteor top-[-150px] right-[-150px] no-print z-0"
      style={{ '--delay': delay, '--duration': '5s' }}
    >
      {/* 500x500px Photorealistic Flaming Meteor */}
      <div className="relative w-[450px] h-[450px] sm:w-[550px] sm:h-[550px] flex items-center justify-center pointer-events-none select-none">
        
        {/* Photorealistic 3D Meteor Image with Screen Blending & Glow */}
        <div className="relative w-full h-full [mask-image:radial-gradient(circle_at_center,black_45%,transparent_80%)]">
          <img
            src="https://images.unsplash.com/photo-1538370965046-79c0d6907d47?auto=format&fit=crop&w=1200&q=80"
            alt="Photorealistic 3D Flaming Meteor"
            className="w-full h-full object-cover mix-blend-screen opacity-90 filter drop-shadow-[0_0_35px_#f97316]"
          />
        </div>

      </div>
    </div>
  );
};

export default BigMeteor;
