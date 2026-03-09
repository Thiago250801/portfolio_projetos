import { Terminal, Code2, UserCircle2 } from 'lucide-react'
import { GlowBlob } from './GlowBlob'
import { candidate } from '../data/portfolio'

export function CoverSlide() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden bg-[#0D1117]">
      <GlowBlob color="#7C3AED" size={500} top="-150px" left="-150px" opacity={0.25} />
      <GlowBlob color="#22D3EE" size={600} bottom="-200px" right="-100px" opacity={0.25} />
      <GlowBlob color="#58A6FF" size={300} top="20%" left="60%" opacity={0.15} />

      {/* Decorative code symbols — some em telas muito pequenas */}
      <span className="hidden sm:block absolute font-bold text-[#30363d] opacity-25 select-none font-mono text-7xl md:text-9xl" style={{ top: '10%', right: '10%', transform: 'rotate(15deg)' }}>{'</>'}</span>
      <span className="hidden sm:block absolute font-bold text-[#30363d] opacity-25 select-none font-mono text-5xl md:text-6xl" style={{ bottom: '15%', left: '8%', transform: 'rotate(-10deg)' }}>{'{ }'}</span>
      <span className="hidden md:block absolute font-bold text-[#30363d] opacity-25 select-none font-mono text-3xl md:text-4xl" style={{ top: '20%', left: '15%' }}>const</span>
      <span className="hidden md:block absolute font-bold text-[#30363d] opacity-25 select-none font-mono text-3xl md:text-4xl" style={{ bottom: '30%', right: '20%' }}>npm install</span>

      <div className="relative z-10 flex flex-col items-center text-center w-full max-w-4xl px-6 sm:px-10 gap-4 sm:gap-6">
        {/* Badge */}
        <div className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-[#22D3EE] bg-[#0D1117] shadow-[0_0_15px_rgba(34,211,238,0.3)]">
          <span className="text-[#22D3EE] font-bold tracking-widest uppercase text-xs sm:text-sm font-mono flex items-center gap-2">
            <Terminal size={12} />
            {candidate.badgeLabel}
          </span>
        </div>

        {/* Title */}
        <div>
          <p className="font-heading font-extrabold text-4xl sm:text-5xl md:text-7xl leading-tight text-white drop-shadow-xl">Apresentação</p>
          <p className="font-heading font-extrabold text-4xl sm:text-5xl md:text-7xl leading-tight text-[#58A6FF] drop-shadow-xl">de Projetos</p>
        </div>

        <div className="w-16 sm:w-24 h-1.5 sm:h-2 bg-[#7C3AED] rounded-full" />

        {/* Card */}
        <div className="bg-[#161b22]/70 border border-[#30363d] backdrop-blur-md rounded-xl p-5 sm:p-8 w-full max-w-2xl hover:border-[#58A6FF] hover:scale-[1.01] transition-all duration-300">
          <div className="flex flex-col items-center gap-2 sm:gap-3">
            <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-[#1F2937] border-2 border-[#58A6FF] flex items-center justify-center text-[#58A6FF] shadow-lg">
              <UserCircle2 size={32} className="sm:hidden" />
              <UserCircle2 size={40} className="hidden sm:block" />
            </div>
            <h2 className="font-heading font-bold text-xl sm:text-3xl text-white">{candidate.name}</h2>
            <p className="text-gray-400 text-base sm:text-xl font-light flex items-center gap-2">
              <Code2 size={16} className="text-[#7C3AED] shrink-0" />
              {candidate.role}
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 w-full flex justify-between px-6 sm:px-12 text-gray-500 text-xs sm:text-sm font-mono opacity-60">
        <span>v1.0.0</span>
        <span>Made with 💻 &amp; ☕</span>
      </div>
    </div>
  )
}