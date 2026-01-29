import { motion } from 'framer-motion'
import './ProductUnboxing.css'

const ProductUnboxing = () => {
    return (
        <section className="section unboxing-section">
            <div className="unboxing-container">

                {/* Popping Products */}
                <motion.div
                    className="products-wrapper"
                    initial={{ y: 100, opacity: 0, scale: 0.5 }}
                    whileInView={{
                        y: -150,
                        opacity: 1,
                        scale: 1.2,
                        transition: {
                            type: "spring",
                            bounce: 0.5,
                            duration: 1.5,
                            delay: 0.2
                        }
                    }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <img src="/products-cluster.png" alt="Gen Z Products" className="products-image" />
                </motion.div>

                {/* The Box */}
                <motion.div
                    className="box-wrapper"
                    initial={{ scale: 0.9, y: 50 }}
                    whileInView={{
                        scale: 1,
                        y: 0,
                        transition: { duration: 0.8, ease: "easeOut" }
                    }}
                    viewport={{ once: true }}
                >
                    <img src="/box-open.png" alt="Shipping Box" className="box-image" />
                </motion.div>

            </div>
        </section>
    )
}

export default ProductUnboxing
