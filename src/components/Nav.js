import React from 'react'
import scrollTo from 'gatsby-plugin-smoothscroll'

export default function Nav(){

    return (
        <nav className="navigation">
            <ul>
                <li><button onClick={()=> scrollTo('#about')}>About</button></li>
                <span>|</span>
                <li><button onClick={()=> scrollTo('#skills')}>Skills</button></li>
                <span>|</span>
                <li><button onClick={()=> scrollTo('#projects')}>Projects</button></li>
            </ul>
        </nav>
    )
}