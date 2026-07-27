import React from 'react';

const BigMeteor = ({ delay = '0s' }) => {
  return (
    <div
      className="animate-big-meteor top-[-100px] right-[-100px] no-print z-0"
      style={{ '--delay': delay, '--duration': '4.5s' }}
    >
      {/* 500x500px Vector Flaming Meteor (Rock Leading Down-Left, Fire Tail Trailing Up-Right) */}
      <div className="relative w-[380px] h-[380px] sm:w-[480px] sm:h-[480px] flex items-center justify-center pointer-events-none select-none filter drop-shadow-[0_0_35px_rgba(249,115,22,0.85)]">
        
        <svg
          viewBox="0 0 500 500"
          className="w-full h-full transform rotate-[-45deg]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer Red/Orange Flaming Tail & Spiky Flame Edges */}
          <path
            d="M 460,40 C 380,120 300,160 200,220 C 140,256 90,300 70,360 C 50,420 80,470 140,480 C 220,490 280,440 330,370 C 380,300 420,200 460,40 Z"
            fill="url(#outerFlame)"
          />
          <path
            d="M 440,60 C 370,130 290,180 210,235 C 160,270 110,310 95,360 C 80,410 110,450 160,455 C 230,460 280,415 325,355 C 370,290 405,190 440,60 Z"
            fill="url(#innerFlame)"
          />

          {/* Yellow Inner Fire Aura Wrap */}
          <path
            d="M 400,100 C 340,160 270,200 200,250 C 150,285 115,320 110,365 C 105,405 130,435 175,435 C 235,435 275,395 315,340 C 355,280 380,180 400,100 Z"
            fill="#FACC15"
          />

          {/* Cratered Olive/Gray Asteroid Rock Core */}
          <g>
            {/* Main Rock Base */}
            <path
              d="M 120,320 C 100,350 110,390 140,420 C 180,450 230,440 260,410 C 290,380 300,340 280,300 C 250,250 200,240 160,260 C 130,275 125,295 120,320 Z"
              fill="#8A8A5C"
              stroke="#5C5C3D"
              strokeWidth="6"
            />
            {/* Rock Shading Highlight */}
            <path
              d="M 140,270 C 175,255 220,265 245,305 C 265,340 255,375 230,395 C 205,370 180,330 140,270 Z"
              fill="#A3A375"
            />

            {/* Craters with Inner Rim Shading */}
            <ellipse cx="160" cy="315" rx="22" ry="15" fill="#5C5C3D" stroke="#3D3D29" strokeWidth="4" />
            <ellipse cx="156" cy="313" rx="17" ry="11" fill="#47472B" />

            <ellipse cx="215" cy="350" rx="28" ry="18" fill="#5C5C3D" stroke="#3D3D29" strokeWidth="5" />
            <ellipse cx="210" cy="347" rx="22" ry="13" fill="#47472B" />

            <ellipse cx="210" cy="290" rx="18" ry="12" fill="#5C5C3D" stroke="#3D3D29" strokeWidth="4" />
            <ellipse cx="207" cy="288" rx="13" ry="8" fill="#47472B" />

            <ellipse cx="250" cy="325" rx="16" ry="10" fill="#5C5C3D" stroke="#3D3D29" strokeWidth="3" />

            <ellipse cx="170" cy="390" rx="20" ry="12" fill="#5C5C3D" stroke="#3D3D29" strokeWidth="4" />
            <ellipse cx="166" cy="388" rx="15" ry="8" fill="#47472B" />
          </g>

          {/* Gradients Definition */}
          <defs>
            <linearGradient id="outerFlame" x1="460" y1="40" x2="100" y2="400" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#DC2626" />
              <stop offset="50%" stopColor="#EA580C" />
              <stop offset="100%" stopColor="#F97316" />
            </linearGradient>

            <linearGradient id="innerFlame" x1="440" y1="60" x2="120" y2="380" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#EA580C" />
              <stop offset="60%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#FACC15" />
            </linearGradient>
          </defs>
        </svg>

      </div>
    </div>
  );
};

export default BigMeteor;
