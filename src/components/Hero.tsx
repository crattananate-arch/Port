import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Navbar from './Navbar'
import WordsPullUp from './shared/WordsPullUp'
import heroVideo from './bgv.mp4'

export default function Hero() {
  return (
    <section className="h-screen p-4 md:p-6">
      <div className="relative w-full h-full rounded-2xl md:rounded-[2rem] overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>

        <div className="noise-overlay absolute inset-0 opacity-[0.7] mix-blend-overlay pointer-events-none" />

        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />

        <Navbar />

        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 md:p-12 lg:p-16">
          <div className="grid grid-cols-12 gap-4 items-end">
            <div className="col-span-12 md:col-span-8">
              <h1
                className="relative font-medium leading-[0.85] tracking-[-0.05em] text-[20vw] sm:text-[18vw] md:text-[16vw] lg:text-[14vw]"
                style={{ color: '#E1E0CC' }}
              >
                <WordsPullUp text="CHAYAPOL" />
                <span className="absolute top-[0.65em] -right-[0.3em] text-[0.31em]">*</span>
              </h1>
            </div>

            <div className="col-span-12 md:col-span-4 flex flex-col items-end gap-6 md:gap-8 pb-2 md:pb-4 pl-6 sm:pl-8 md:pl-10 lg:pl-14">
              <motion.p
                className="text-primary/70 text-xs sm:text-sm md:text-base text-right"
                style={{ lineHeight: 1.2 }}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                
              </motion.p>

              <motion.a
                href="#projects"
                className="group inline-flex items-center justify-between bg-primary rounded-full pl-5 sm:pl-6 pr-1.5 py-1.5 w-fit"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="text-black font-medium text-sm sm:text-base mr-4 justify-right">
                  View Projects
                </span>
                <span className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black">
                  <ArrowRight className="w-4 h-4 text-[#E1E0CC]" />
                </span>
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
