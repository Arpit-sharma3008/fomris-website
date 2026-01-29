import { motion } from 'framer-motion'
import './MissionVision.css'

const MissionVision = () => {
    const cardVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: (custom: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: custom * 0.2,
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1]
            }
        })
    }

    return (
        <section className="section mission-vision-section">
            <div className="container">
                <div className="grid-2-col mission-vision-grid">
                    {/* Mission Card */}
                    <motion.div
                        className="glass-card mission-card"
                        custom={0}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={cardVariants}
                    >
                        <div className="card-icon">
                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                                <circle cx="24" cy="24" r="20" stroke="url(#missionGradient)" strokeWidth="3" />
                                <path d="M24 14V24L30 30" stroke="url(#missionGradient)" strokeWidth="3" strokeLinecap="round" />
                                <defs>
                                    <linearGradient id="missionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#6366F1" />
                                        <stop offset="100%" stopColor="#8B5CF6" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <h3 className="card-title">Mission</h3>
                        <p className="card-description">
                            To build consumer brands that empower Gen Z to embrace healthier lifestyles without compromise—making
                            nutrition accessible, inclusive, and culturally relevant for everyday life.
                        </p>
                    </motion.div>

                    {/* Vision Card */}
                    <motion.div
                        className="glass-card vision-card"
                        custom={1}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={cardVariants}
                    >
                        <div className="card-icon">
                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                                <path d="M24 10L26 20L36 18L28 26L38 30L28 32L30 42L24 34L18 42L20 32L10 30L20 26L12 18L22 20L24 10Z"
                                    fill="url(#visionGradient)" />
                                <defs>
                                    <linearGradient id="visionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#06B6D4" />
                                        <stop offset="100%" stopColor="#8B5CF6" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <h3 className="card-title">Vision</h3>
                        <p className="card-description">
                            To establish Formis Group as a trust-led, culture-first brand house that redefines consumer expectations—
                            where products serve people, not markets, and long-term relationships outweigh short-term gains.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default MissionVision
