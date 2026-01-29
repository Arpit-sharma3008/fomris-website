import { motion } from 'framer-motion'
import './About.css'

const About = () => {
    const fadeInVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1.0, ease: "easeOut" }
        }
    }

    return (
        <section id="about" className="section about-section">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInVariants}
                >
                    <h2>About Formis Group</h2>
                </motion.div>

                <motion.div
                    className="about-content"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInVariants}
                >
                    <p className="about-text">
                        Formis Group is a next-generation consumer brand house built on a singular belief:{' '}
                        <strong>Gen Z deserves products that resonate with their values, their identity, and their aspirations.</strong>
                    </p>
                    <p className="about-text">
                        We don't build products for mass consumption. We build movements. We create brands that are culturally
                        intelligent, emotionally resonant, and designed for longevity. Our approach is rooted in trust-led
                        positioning, body positivity, and inclusive design.
                    </p>
                    <p className="about-text">
                        Operating at the intersection of nutrition, wellness, and culture, we are redefining what consumer
                        brands can be—not just in what they offer, but in how they make people feel.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}

export default About
