import type { Variants } from "framer-motion"

/**
 * Fade in from bottom
 */
export const fadeInUp: Variants = {
    hidden: {
        opacity: 0,
        y: 30
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1]
        }
    }
}

/**
 * Card stagger animation (with custom index)
 */
export const cardVariants: Variants = {
    hidden: {
        opacity: 0,
        scale: 0.95
    },
    visible: (custom: number) => ({
        opacity: 1,
        scale: 1,
        transition: {
            delay: custom * 0.15,
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1]
        }
    })
}
