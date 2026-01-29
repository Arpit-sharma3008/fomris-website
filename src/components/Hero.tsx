import { motion } from 'framer-motion'
import './Hero.css'

const Hero = () => {
    const scrollToThesis = () => {
        const stealthSection = document.getElementById('stealth-project')
        stealthSection?.scrollIntoView({ behavior: 'smooth' })
    }

    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: (custom: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: custom * 0.2,
                duration: 0.8,
                ease: "easeOut"
            }
        })
    }

    return (
        <section className="hero">
            <div className="container hero-container">
                {/* 2. Main Headline */}
                <motion.h1
                    className="hero-headline"
                    custom={1}
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                >
                    We build what the next<br />
                    generation consumes.
                </motion.h1>

                {/* 3. Subtext */}
                <motion.p
                    className="hero-subtext"
                    custom={2}
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                >
                    Formis Group is a consumer brand-building company. We create culture-first<br className="desktop-break" />
                    brands at the intersection of consumer insight, product, and distribution.
                </motion.p>

                {/* 4. CTA Button */}
                <motion.div
                    className="hero-cta-wrapper"
                    custom={3}
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                >
                    <button className="btn btn-primary hero-btn" onClick={scrollToThesis}>
                        Step Inside The First Build
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </motion.div>
            </div>
        </section>
    )
}

export default Hero
