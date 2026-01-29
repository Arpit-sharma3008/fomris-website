import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import './Header.css'

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
            <motion.div
                className="header-logo"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 0.9, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div className="logo-icon">
                    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 5L35 12V28L20 35L5 28V12L20 5Z" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M20 5V20M20 20L35 12M20 20L5 12" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                <span className="logo-text">FORMIS</span>
            </motion.div>
        </header>
    )
}

export default Header
