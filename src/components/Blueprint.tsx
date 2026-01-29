import { motion } from 'framer-motion'
import SteelLogo from './SteelLogo'
import '../index.css'

const Blueprint = () => {
    return (
        <section className="section container">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <h2 style={{ marginBottom: '4rem' }}>The Formis Blueprint</h2>

                {/* Liquid Metal Banner with CSS Animation */}
                <div className="industrial-banner-container">
                    <div className="liquid-overlay"></div>
                    <SteelLogo />
                    <img
                        src="/texture-ripples.png"
                        alt="Liquid Metal Form"
                        className="industrial-banner"
                    />
                </div>

                <div className="blueprint-grid">
                    {/* Column 1 */}
                    <div className="blueprint-item">
                        <span className="blueprint-label">01. INSIGHT</span>
                        <h3 className="blueprint-header">Cultural Shifts</h3>
                        <p>
                            We don't chase trends. We identify fundamental shifts in consumer behavior before they become mainstream, using proprietary data and cultural analysis.
                        </p>
                    </div>

                    {/* Column 2 */}
                    <div className="blueprint-item">
                        <span className="blueprint-label">02. FORM</span>
                        <h3 className="blueprint-header">Product Habits</h3>
                        <p>
                            Great brands are built on great habits. We design products that fit seamlessly into daily routines, making adoption natural and retention effortless.
                        </p>
                    </div>

                    {/* Column 3 */}
                    <div className="blueprint-item">
                        <span className="blueprint-label">03. SCALE</span>
                        <h3 className="blueprint-header">Distribution</h3>
                        <p>
                            We build distribution engines that move with the consumer—from community-led drops to mass-market availability, timing is everything.
                        </p>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

export default Blueprint
