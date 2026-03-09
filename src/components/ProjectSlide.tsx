import { ExternalLink, Github, Lock, Layers, Smartphone, Globe, Box } from 'lucide-react'
import type { Project } from '../data/portfolio'
import { GlowBlob } from './GlowBlob'
import { MediaPanel } from './MediaPanel'

// Maps a tag string to a Lucide icon
function TagIcon({ tag }: { tag: string }) {
    const t = tag.toLowerCase()
    if (t.includes('mobile')) return <Smartphone size={12} />
    if (t.includes('api') || t.includes('back')) return <Box size={12} />
    if (t.includes('web') || t.includes('app')) return <Globe size={12} />
    return <Layers size={12} />
}

interface ProjectSlideProps {
    project: Project
    slideNumber: number
}

export function ProjectSlide({ project, slideNumber }: ProjectSlideProps) {
    return (
        <div className="relative w-full h-full flex overflow-hidden bg-[#0D1117]">
            <GlowBlob color="#7C3AED" size={600} top="-200px" right="-200px" opacity={0.15} />
            <GlowBlob color="#22D3EE" size={500} bottom="-150px" left="-150px" opacity={0.15} />

            {/* Slide number watermark */}
            <span className="absolute top-8 right-8 font-heading font-bold text-9xl text-[#30363d] opacity-20 select-none z-0" aria-hidden>
                {String(slideNumber).padStart(2, '0')}
            </span>

            {/* ── LEFT COLUMN ── */}
            <div className="relative z-10 w-[45%] flex flex-col justify-center h-full px-14 gap-6">
                {/* Tag */}
                <div>
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wider uppercase border border-[#22D3EE] text-[#22D3EE] bg-[#22D3EE]/10 shadow-[0_0_10px_rgba(34,211,238,0.2)]">
                        <TagIcon tag={project.tag} />
                        {project.tag}
                    </span>
                </div>

                {/* Title */}
                <h1 className="font-heading font-extrabold text-5xl leading-tight text-white drop-shadow-md">
                    {project.title}
                </h1>

                {/* Description */}
                <p className="text-gray-400 text-lg leading-relaxed border-l-4 border-[#58A6FF] pl-4">
                    {project.description}
                </p>

                {/* Tech Stack */}
                <div>
                    <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-3">
                        Tecnologias Utilizadas
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                            <div
                                key={t.label}
                                className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#161b22] border border-[#30363d] text-sm hover:-translate-y-0.5 hover:shadow-lg transition-all cursor-default"
                                style={{ color: t.color }}
                            >
                                {t.devicon && (
                                    <i className={`${t.devicon} text-base`} style={{ color: t.color }} />
                                )}
                                {t.label}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-4 pt-2">
                    {project.deployUrl && (
                        <a
                            href={project.deployUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2 px-6 py-3 rounded-lg bg-[#238636] hover:bg-[#2ea043] text-white font-bold transition-all shadow-lg hover:shadow-green-900/30 no-underline"
                        >
                            <ExternalLink size={15} />

                            Ver Deploy
                        </a>
                    )}
                    {project.repoUrl && (
                        <a
                            href={project.repoUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2 px-6 py-3 rounded-lg bg-[#161b22] border border-[#30363d] hover:border-[#8b949e] text-white font-medium transition-all no-underline"
                        >
                            <Github size={18} />
                            Repositório
                        </a>
                    )}
                    {!project.deployUrl && !project.repoUrl && (
                        <span className="text-gray-600 text-sm italic font-mono">// links em breve</span>
                    )}
                </div>
            </div>

            {/* ── RIGHT COLUMN ── */}
            <div className="relative z-10 w-[55%] h-full flex items-center justify-center pr-12">
                <div className="absolute inset-4 bg-[#58A6FF] opacity-5 rotate-6 scale-90 rounded-3xl blur-2xl" />

                {/* Browser mockup */}
                <div className="relative w-full h-[400px] rounded-xl overflow-hidden border border-[#30363d] bg-[#010409] shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)] flex flex-col hover:-translate-y-1 hover:shadow-[0_25px_50px_-12px_rgba(88,166,255,0.25)] transition-all duration-500">
                    {/* Browser chrome */}
                    <div className="h-9 bg-[#161b22] border-b border-[#30363d] flex items-center px-4 gap-2 shrink-0">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                        <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                        <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                        <div className="ml-3 h-6 bg-[#0d1117] rounded flex-1 flex items-center px-3 gap-2">
                            <Lock size={10} className="text-[#238636]" />
                            <span className="text-gray-500 text-xs font-mono">
                                {project.deployUrl ?? 'https://project-demo.app'}
                            </span>
                        </div>
                    </div>
                    <MediaPanel media={project.media} />
                </div>

                {/* Floating icon */}
                <div className="absolute bottom-2 right-2 w-20 h-20 bg-[#161b22] rounded-2xl border border-[#30363d] flex items-center justify-center shadow-2xl z-20 animate-float">
                    <project.floatingIcon size={32} color={project.floatingIconColor} />
                </div>
            </div>
        </div>
    )
}