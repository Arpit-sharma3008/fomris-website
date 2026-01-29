import { motion } from 'framer-motion'
import { useState } from 'react'
import './StealthProject.css'

const StealthProject = () => {
    const [isExpanded, setIsExpanded] = useState(false)

    const handleExpand = () => {
        setIsExpanded(true)
        setTimeout(() => {
            const formSection = document.getElementById('join-movement')
            formSection?.scrollIntoView({ behavior: 'smooth' })
        }, 100)
    }

    return (
        <section id="stealth-project" className="section stealth-section">
            <div className="container">
                <motion.div
                    className="stealth-content"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="stealth-badge">
                        <span className="badge-dot"></span>
                        Operating in Stealth
                    </div>

                    <h2 className="stealth-title">Our First Project</h2>

                    <div className="stealth-intro">
                        <p>
                            We are currently building our first consumer brand around a simple belief:{' '}
                            <strong>in a protein-deficient country, protein should be accessible, inclusive, and unintimidating.</strong>
                        </p>
                        <p>
                            It should not be reserved for a specific body type, lifestyle, or fitness identity.
                        </p>
                        <p>
                            The brand is being built around <strong>body positivity and inclusivity</strong>, positioning protein as a daily
                            nutrition habit—similar to tea or snacks—rather than a niche supplement.
                        </p>
                        <p>
                            The focus is on making protein feel <em>normal, enjoyable, and easy to adopt</em> for a wide range of consumers—
                            from beginners to health-conscious individuals.
                        </p>
                        <p>
                            The long-term vision is to build <strong>trust-led, culture-first nutrition</strong>, where protein is integrated
                            into everyday life through thoughtful product design, clear communication, and responsible positioning.
                        </p>
                    </div>

                    <motion.div
                        className="stealth-cta-container"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                    >
                        <button className="btn btn-outline stealth-cta" onClick={handleExpand}>
                            Be Part of the Change
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M10 5V15M5 10H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export default StealthProject
