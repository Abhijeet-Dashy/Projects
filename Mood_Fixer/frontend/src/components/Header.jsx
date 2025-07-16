import React from 'react';
import { Home, Info, Rabbit } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navi = useNavigate();
  return (
    <div className="flex justify-center">
      {/* Liquid animation style */}
      <style>
        {`
          @keyframes liquidGlide {
            0% { transform: translateX(-50%) translateY(-30%); }
            50% { transform: translateX(50%) translateY(30%); }
            100% { transform: translateX(-50%) translateY(-30%); }
          }
        `}
      </style>

      <div className="group relative flex bg-[#f8edeb]/30 backdrop-blur-lg shadow-xl rounded-2xl px-10 py-4 mt-5 gap-10 border border-white/20 overflow-hidden">

        {/* Liquid blob */}
        <div
          className="absolute top-1/2 left-1/2 w-32 h-32 bg-purple-400/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 pointer-events-none"
          style={{
            animation: 'liquidGlide 4s ease-in-out infinite',
          }}
        />

        {/* Logo */}
        <div className="flex items-center gap-2 text-[#5e548e] font-semibold text-lg hover:scale-105 transition">
          <Rabbit size={20} />
          Bunny Inc
        </div>

        {/* Home */}
        <div className="flex items-center gap-2 text-gray-700 hover:text-[#9f86c0] hover:scale-105 transition cursor-pointer">
          <Home size={18} />
          Home
        </div>

        {/* About */}
        <div onClick={()=> navi('/about')} className="flex items-center gap-2 text-gray-700 hover:text-[#9f86c0] hover:scale-105 transition cursor-pointer">
          <Info size={18} />
          About
        </div>
      </div>
    </div>
  );
};

export default Header;
