import React from 'react'
import Showcase from "./Showcase.js"
import Services from "./Services.js"
import MissionStatement from './MissionStatement'
import CallToAction from "./CallToAction"
import Testimonials from './Testimonials.js'

function Main() {
   
    return (
        <div>
            <Showcase/>
            <MissionStatement/>
            <Services/>
            <Testimonials/>
            <CallToAction/>
        </div>
    )
}

export default Main
