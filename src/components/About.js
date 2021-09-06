import React from 'react'
import {about} from '../data/about'

export default function About() {
    return (
        <div id="about" className="container">
            <div className="about-container">
                <h1 className="f-3">{about.heading}</h1>
                <p>{about.text}</p>
            </div>   
        </div>
    )
}