import { motion } from 'framer-motion'
import './Team.css'

type TeamMember = {
    name: string;
    role: string;
    description: string;
    gradient: string;
    image: string;
}

const Team = () => {
    const teamMembers: TeamMember[] = [
        {
            name: "Arpit Sharma",
            role: "Founder & Strategic Vision",
            description: "Driving brand strategy, culture-first positioning, and long-term growth.",
            gradient: "linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)",
            image: "/team/founder.jpg?v=1"
        },
        {
            name: "Harmeet Singh",
            role: "Product & Execution",
            description: "Overseeing product development, supply chain, and operational excellence.",
            gradient: "linear-gradient(135deg, #8B5CF6 0%, #06B6D4 100%)",
            image: "/team/operations.jpg?v=2",
        }
    ]

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: (custom: number) => ({
            opacity: 1,
            scale: 1,
            transition: {
                delay: custom * 0.2,
                duration: 0.7,
                ease: "easeOut"
            }
        })
    }

    return (
        <section className="section team-section">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    <h2>Team</h2>
                    <p className="subheading">
                        Built by people who believe in purposeful brands and long-term thinking.
                    </p>
                </motion.div>

                <div className="team-grid">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={index}
                            className="glass-card team-card"
                            custom={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={cardVariants}
                        >
                            <div className="team-avatar" style={{ background: member.gradient }}>
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="avatar-image"
                                />
                            </div>
                            <h3 className="team-name">{member.name}</h3>
                            <p className="team-role">{member.role}</p>
                            <p className="team-description">{member.description}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Footer */}
                <motion.div
                    className="team-footer"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                >
                    <div className="footer-content">
                        <div className="footer-brand">
                            <p className="footer-title">FORMIS</p>
                            <p className="footer-tagline">
                                Building culture-first consumer brands.
                            </p>
                        </div>
                        <div className="footer-contact">
                            <p className="footer-label">Contact</p>
                            <a href="mailto:hello@formis.co" className="footer-link">
                                formisltd@gmail.com
                            </a>
                            <p className="footer-link">+91 8305162939</p>
                            <p className="footer-location">India</p>
                        </div>

                        <p className="footer-text">
                            © 2026 Formis Group. Building the future of consumer brands.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Team
