import '../index.css'

const FogBackground = () => {
    return (
        <div className="background-wrapper">
            {/* Layer 1: Locked Fog Atmosphere (Texture & Mist) */}
            <div className="fog-container">
                <div className="fog-layer fog-layer-1"></div>
                <div className="fog-layer fog-layer-2"></div>
            </div>

            {/* Layer 2: Color Bliss Signals (Independent Light) */}
            <div className="bliss-container">
                <div className="bliss-orb bliss-blue"></div>
                <div className="bliss-orb bliss-amber"></div>
                <div className="bliss-orb bliss-green"></div>
                <div className="bliss-orb bliss-violet"></div>
            </div>
        </div>
    )
}

export default FogBackground
