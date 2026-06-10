import React, { useState } from 'react';

export default function Hero() {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 overflow-hidden">
            {/* Background Ambient Glows */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#CDB26D]/5 rounded-full blur-[140px] pointer-events-none"></div>
            <div className="absolute bottom-0 right-10 w-[300px] h-[300px] bg-[#967531]/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="grid lg:grid-cols-12 gap-16 items-center relative z-10">

                {/* Left Typography Column */}
                <div className="lg:col-span-6 space-y-8 text-left">
                    <h1 className="text-xl sm:text-6xl font-black tracking-tight text-white leading-[1.1]">
                        <span className="block">Your Body Is a System.</span>
                        <span className="block bg-gradient-to-r from-[#967531] via-[#CDB26D] to-[#F3DA90] bg-clip-text text-transparent font-bold">
                            We Optimize Every Variable
                        </span>
                    </h1>

                    <div className="pt-4 flex flex-col sm:flex-row gap-4">
                        <a
                            href="#"
                            className="shadow-[0_0_25px_rgba(205,178,109,0.25)] bg-gradient-to-r from-[#967531] via-[#CDB26D] to-[#F3DA90] text-[#030712] px-8 py-4 rounded-xl font-bold tracking-wide uppercase text-xs text-center transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-[0_0_35px_rgba(205,178,109,0.45)]"
                        >
                            Start Your Transformation
                        </a>
                        <a href="#" className="border border-[#CDB26D]/20 hover:border-[#F3DA90]/60 bg-slate-900/40 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-bold tracking-wide uppercase text-xs text-center transition duration-300 hover:bg-[#CDB26D]/5">
                            Explore The Science
                        </a>
                    </div>
                </div>

               
               {/* Right Premium Video Deck */}

<div className="lg:col-span-6 group">
    <div className="relative p-1 rounded-2xl bg-gradient-to-b from-[#1a170b] via-[#070a0f] to-[#3d3215]/40 shadow-2xl transition duration-500">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-[#F3DA90] to-[#967531] rounded-2xl opacity-30 blur-lg group-hover:opacity-60 transition duration-500"></div>

        {/* الإطار الذهبي المشع */}
        <div className="relative bg-black rounded-xl overflow-hidden aspect-video border-[2px] border-[#CDB26D] ring-4 ring-[#CDB26D]/20 shadow-[0_0_30px_rgba(205,178,109,0.4)] group-hover:border-[#F3DA90] group-hover:shadow-[0_0_60px_rgba(243,218,144,0.5)] transition-all duration-500">

            {isPlaying ? (
                <video
                    src="/gym.mp4"
                    autoPlay
                    controls
                    className="w-full h-full object-cover"
                />
            ) : (
                <div onClick={() => setIsPlaying(true)} className="w-full h-full relative cursor-pointer">
                    <img
                        src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1200"
                        alt="Video Thumbnail"
                        className="w-full h-full object-cover opacity-50 hover:opacity-70 transition duration-700"
                    />
                    {/* زر التشغيل بلمعة ذهبية قوية */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 border-2 border-[#F3DA90] bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(243,218,144,0.6)] transition duration-300 transform group-hover:scale-110">
                            <svg className="w-8 h-8 text-[#F3DA90] fill-current ml-1" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        </div>
                    </div>
                </div>
            )}
        </div>
    </div>
</div>
            </div>
        </section>
    );
}