import './SteelLogo.css'

const SteelLogo = () => {
    return (
        <div className="steel-logo-container">
            <svg className="steel-logo-svg" viewBox="0 0 400 120" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="chromeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#E2E8F0" />
                        <stop offset="20%" stopColor="#94A3B8" />
                        <stop offset="50%" stopColor="#FFFFFF" />
                        <stop offset="51%" stopColor="#475569" />
                        <stop offset="100%" stopColor="#1E293B" />
                    </linearGradient>

                    <filter id="bevel" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur in="SourceAlpha" stdDeviation="2" result="blur" />
                        <feOffset in="blur" dx="2" dy="2" result="offsetBlur" />
                        <feSpecularLighting in="blur" surfaceScale="5" specularConstant="1" specularExponent="20" lightingColor="#ffffff" result="specOut">
                            <fePointLight x="-5000" y="-10000" z="20000" />
                        </feSpecularLighting>
                        <feComposite in="specOut" in2="SourceAlpha" operator="in" result="specOut" />
                        <feComposite in="SourceGraphic" in2="specOut" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" result="litPaint" />
                        <feMerge>
                            <feMergeNode in="offsetBlur" />
                            <feMergeNode in="litPaint" />
                        </feMerge>
                    </filter>
                </defs>

                <text
                    x="50%"
                    y="50%"
                    dominantBaseline="middle"
                    textAnchor="middle"
                    className="steel-text"
                    style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontWeight: 700,
                        fontSize: "80px",
                        letterSpacing: "0.05em",
                        fill: "url(#chromeGradient)",
                        filter: "url(#bevel)"
                    }}
                >
                    FORMIS
                </text>
            </svg>
        </div>
    )
}

export default SteelLogo
