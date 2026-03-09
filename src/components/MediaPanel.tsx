import { ImageIcon } from 'lucide-react'
import type { ProjectMedia } from '../data/portfolio'

interface MediaPanelProps {
  media: ProjectMedia
}

export function MediaPanel({ media }: MediaPanelProps) {
  const inner = () => {
    if (media.type === 'image') {
      return <img src={media.src} alt="Screenshot do projeto" className="w-full h-full object-contain" />
    }

    if (media.type === 'video') {
      return <video src={media.src} autoPlay loop muted playsInline className="w-full h-full object-contain" />
    }

if (media.type === 'mobile-video') {
  return (
    <video
      src={media.src}
      autoPlay
      loop
      muted
      playsInline
      className="w-full h-full object-contain"
    />
  )
}

    if (media.type === 'url') {
      return (
        <iframe
          src={media.href}
          title="Demo do projeto"
          className="w-full h-full border-0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )
    }

    return (
      <div className="flex flex-col items-center justify-center h-full gap-3 group cursor-default">
        <div className="w-20 h-20 rounded-xl bg-[#161b22] border border-[#30363d] flex items-center justify-center shadow-lg group-hover:border-[#58A6FF] transition-colors">
          <ImageIcon size={32} className="text-gray-500 group-hover:text-[#58A6FF] transition-colors" />
        </div>
        <p className="text-gray-400 text-sm font-medium">Screenshot / Video Demo</p>
        <p className="text-gray-600 text-xs">Adicione sua mídia em /public e edite portfolio.ts</p>
      </div>
    )
  }

  return (
    <div className="flex-1 bg-[#0D1117] relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{ backgroundImage: 'radial-gradient(#30363d 1px, transparent 1px)', backgroundSize: '20px 20px' }}
      />
      <div className="relative w-full h-full">{inner()}</div>
    </div>
  )
}