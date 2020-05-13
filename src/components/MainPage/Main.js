import React from 'react'
import Showcase from "./Showcase.js"
import Principles from "./Principles.js"
import MissionStatement from './MissionStatement'
import CallToAction from "./CallToAction"
import Testimonials from './Testimonials.js'

function Main() {
   
    return (
        <div>
            <Showcase/>
            <MissionStatement/>
            <Principles/>
            <Testimonials/>
            <CallToAction/>
        </div>
    )
}

export default Main
