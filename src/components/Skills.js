import React from 'react'
import {useInView} from 'react-intersection-observer'
import js from '../images/javascript.svg'

import SkillItem from './SkillItem'

export default function Skills() {

    return (
     
        <div id="skills" className="container">
            <div className="head-container">
                <h2 className="section-header">Skills</h2>
            </div>
            <span className="sub-title">I am proficient in...</span>
            <div className="skills-container">
                <SkillItem title="Javascript" image={js} />
                <SkillItem title="Javascript" image={js} />
                <SkillItem title="Javascript" image={js} />
                <SkillItem title="Javascript" image={js} />
                <SkillItem title="Javascript" image={js} />
                <SkillItem title="Javascript" image={js} />
            </div>
            <span className="sub-title">...and I'm currently exploring</span>
            <div className="skills-container">
                <SkillItem title="Javascript" image={js} />
                <SkillItem title="Javascript" image={js} />
                <SkillItem title="Javascript" image={js} />
                <SkillItem title="Javascript" image={js} />
                <SkillItem title="Javascript" image={js} />
                <SkillItem title="Javascript" image={js} />
            </div>
        </div>
       
    )
}