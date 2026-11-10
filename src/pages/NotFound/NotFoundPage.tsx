import React from 'react';
import { Link } from 'react-router-dom';
import { useCursor } from '../../components/CustomCursor/CursorContext';
import { ArrowLeft } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  const { setCursorType, resetCursor } = useCursor();

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center pt-28 pb-16 px-6 text-center select-none">
      <span className="font-mono text-xs tracking-widest text-[#FF6D1F] uppercase mb-3">
        404 // COORDINATE UNREACHABLE
      </span>
      <h1 className="font-display text-7xl sm:text-9xl font-black text-[#222222] tracking-tighter">
        404<span className="text-[#FF6D1F]">.</span>
      </h1>
      <p className="font-editorial italic text-2xl text-[#222222]/70 mt-3 max-w-md">
        The requested canvas coordinate does not exist.
      </p>
      <div className="mt-8">
        <Link
          to="/"
          onMouseEnter={() => setCursorType('hover')}
          onMouseLeave={resetCursor}
          className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#222222] text-[#FAF3E1] font-mono text-xs uppercase rounded-full hover:bg-[#FF6D1F] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Homepage</span>
        </Link>
      </div>
    </div>
  );
};
