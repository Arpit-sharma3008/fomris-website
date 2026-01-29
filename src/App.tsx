import Hero from './components/Hero'
import About from './components/About'
import MissionVision from './components/MissionVision'
import WhatWeBuild from './components/WhatWeBuild'
import StealthProject from './components/StealthProject'
import JoinMovement from './components/JoinMovement'
import Team from './components/Team'
import Manifesto from './components/Manifesto'
import Blueprint from './components/Blueprint'
import FogBackground from './components/FogBackground'
import Header from './components/Header'

function App() {
    return (
        <div className="app">
            <FogBackground />
            <Header />
            <Hero />
            <Manifesto />
            <About />
            <Blueprint />
            <WhatWeBuild />
            <MissionVision />
            <StealthProject />
            <JoinMovement />
            <Team />
        </div>
    )
}

export default App
