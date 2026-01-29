import '../index.css' // Ensuring styles are available

const Manifesto = () => {
    return (
        <div className="marquee-container">
            <div className="marquee-content">
                <span className="marquee-item">Culture First</span>
                <span className="marquee-item">Consumer Backed</span>
                <span className="marquee-item">Next Gen Builds</span>
                <span className="marquee-item">Formis Group</span>
            </div>
            {/* Duplicate for seamless loop */}
            <div className="marquee-content">
                <span className="marquee-item">Culture First</span>
                <span className="marquee-item">Consumer Backed</span>
                <span className="marquee-item">Next Gen Builds</span>
                <span className="marquee-item">Formis Group</span>
            </div>
        </div>
    )
}

export default Manifesto
