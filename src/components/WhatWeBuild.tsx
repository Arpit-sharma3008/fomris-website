import { cardVariants } from "../animations"
import { motion } from 'framer-motion'
import './WhatWeBuild.css'

const WhatWeBuild = () => {
    const principles = [
        {
            title: "Body Positivity",
            description: "Nutrition for every body type, lifestyle, and fitness level—not reserved for athletes or gym-goers.",
            icon: (
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <path d="M20 5C11.7 5 5 11.7 5 20C5 28.3 11.7 35 20 35C28.3 35 35 28.3 35 20C35 11.7 28.3 5 20 5Z"
                        stroke="url(#bodyGradient)" strokeWidth="2.5" fill="none" />
                    <path d="M15 18C15 18 17 15 20 15C23 15 25 18 25 18" stroke="url(#bodyGradient)" strokeWidth="2.5" strokeLinecap="round" />
                    <circle cx="15" cy="18" r="1.5" fill="#6366F1" />
                    <circle cx="25" cy="18" r="1.5" fill="#6366F1" />
                    <path d="M15 25C15 25 17 27 20 27C23 27 25 25 25 25" stroke="url(#bodyGradient)" strokeWidth="2.5" strokeLinecap="round" />
                    <defs>
                        <linearGradient id="bodyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#6366F1" />
                            <stop offset="100%" stopColor="#8B5CF6" />
                        </linearGradient>
                    </defs>
                </svg>
            )
        },
        {
            title: "Inclusive Design",
            description: "Products that feel welcoming and unintimidating, designed for daily habits rather than niche supplements.",
            icon: (
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <circle cx="12" cy="12" r="5" stroke="url(#inclusiveGradient1)" strokeWidth="2.5" fill="none" />
                    <circle cx="28" cy="12" r="5" stroke="url(#inclusiveGradient1)" strokeWidth="2.5" fill="none" />
                    <circle cx="20" cy="28" r="5" stroke="url(#inclusiveGradient1)" strokeWidth="2.5" fill="none" />
                    <path d="M16 14L13 22M24 14L27 22M21 25L19 25" stroke="url(#inclusiveGradient1)" strokeWidth="2.5" strokeLinecap="round" />
                    <defs>
                        <linearGradient id="inclusiveGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#8B5CF6" />
                            <stop offset="100%" stopColor="#06B6D4" />
                        </linearGradient>
                    </defs>
                </svg>
            )
        },
        {
            title: "Trust-Led Positioning",
            description: "Clear communication, transparent ingredients, and responsible marketing that respects our consumers.",
            icon: (
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <path d="M20 5L7 11V20C7 27 11.5 33.5 20 35C28.5 33.5 33 27 33 20V11L20 5Z"
                        stroke="url(#trustGradient)" strokeWidth="2.5" fill="none" />
                    <path d="M15 20L18 23L25 16" stroke="url(#trustGradient)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    <defs>
                        <linearGradient id="trustGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#06B6D4" />
                            <stop offset="100%" stopColor="#6366F1" />
                        </linearGradient>
                    </defs>
                </svg>
            )
        },
        {
            title: "Culture-First Approach",
            description: "Brands that integrate seamlessly into everyday life, resonating with Gen Z values and aspirations.",
            icon: (
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <circle cx="20" cy="20" r="13" stroke="url(#cultureGradient)" strokeWidth="2.5" fill="none" />
                    <path d="M20 7V20L27 27" stroke="url(#cultureGradient)" strokeWidth="2.5" strokeLinecap="round" />
                    <circle cx="20" cy="20" r="2" fill="#8B5CF6" />
                    <defs>
                        <linearGradient id="cultureGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#F59E0B" />
                            <stop offset="100%" stopColor="#8B5CF6" />
                        </linearGradient>
                    </defs>
                </svg>
            )
        }
    ]

    return (
        <section className="section what-we-build-section">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-huge" style={{ fontSize: 'clamp(3rem, 5vw, 5rem)', marginBottom: '1rem' }}>
                        What We<br />Build
                    </h2>
                    <p className="subheading" style={{ maxWidth: '600px', margin: '0 auto', marginTop: '2rem' }}>
                        Our brands are founded on four core principles that guide every decision we make.
                    </p>
                </motion.div>

                <div className="grid-2x2 principles-grid">
                    {principles.map((principle, index) => (
                        <motion.div
                            key={index}
                            className="glass-card principle-card"
                            custom={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={cardVariants}
                        >
                            <div className="principle-icon">{principle.icon}</div>
                            <h3 className="principle-title">{principle.title}</h3>
                            <p className="principle-description">{principle.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default WhatWeBuild
