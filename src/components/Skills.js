import React from 'react';
import js from '../images/javascript.svg';
import html from '../images/html5.svg';
import css from '../images/css3.svg';
import re from '../images/react.svg';
import npm from '../images/npm.svg';
import webpack from '../images/webpack.svg';
import express from '../images/express.svg';
import nodejs from '../images/nodedotjs.svg';
import sass from '../images/sass.svg';
import gatsbyicon from '../images/gatsby.svg';
import mongo from '../images/mongodb.svg';
import sc from '../images/styledcomponents.svg';
import gh from '../images/github.svg';
import google from '../images/google.svg';

import SkillItem from './SkillItem';

export default function Skills() {
  return (
    <div id="skills" className="container">
      <h3 className="section-header">Skills</h3>
      <span className="sub-title">Here's what I can do</span>
      <div className="skills-container">
        <SkillItem title="Javascript" image={js} />
        <SkillItem title="HTML" image={html} />
        <SkillItem title="CSS" image={css} />
        <SkillItem title="GitHub" image={gh} />
        <SkillItem title="React" image={re} />
        <SkillItem title="Express" image={express} />
        <SkillItem title="Node.js" image={nodejs} />
        <SkillItem title="Sass" image={sass} />
        <SkillItem title="Gatsby" image={gatsbyicon} />
        <SkillItem title="MongoDB" image={mongo} />
        <SkillItem title="Styled Comp." image={sc} />
        <SkillItem title="Webpack" image={webpack} />
      </div>
      <span className="sub-title">...and I am an expert at...</span>
      <div className="skills-container skills-container-flex">
        <SkillItem title="Googling" image={google} />
      </div>
    </div>
  );
}
