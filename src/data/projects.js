import { v4 } from 'uuid';
import shopapp from '../images/shopapp.png';
import tipcalculator from '../images/tipcalculator.png';
import weatherapp from '../images/simpleweather.png';
import etchasketch from '../images/etchasketch.png';
import sunnyside from '../images/sunnyside.png';
import craftory from '../images/craftory.png';
import voyager from '../images/voyager.png';

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
import bootstrap from '../images/bootstrap.png';

const projects = [
  {
    id: v4(),
    title: 'Craftory',
    desc: 'Craftory is a full stack application built with the MERN stack. It is an inventory management application for a local candle making company that can also be used by other people who make things and need to keep track of their materials.',
    stack: [js, html, css, mongo, re, nodejs, bootstrap],
    link: 'https://calm-wave-18798.herokuapp.com/',
    linkGit: 'https://github.com/curtisgry/craftory',
    image: craftory,
  },
  {
    id: v4(),
    title: 'Voyager Synth',
    desc: 'A web synthisizer and sequencer powered by the Web Audio API. Built with React and Styled Components. The user can change settings and effects to experiment with sound',
    stack: [re, sc, js, html, css],
    link: 'https://modest-mahavira-5f4d4d.netlify.app/',
    linkGit: 'https://github.com/curtisgry/voyager-synth',
    image: voyager,
  },
  {
    id: v4(),
    title: 'Tip Calculator',
    desc: 'An application for calculating a tip and spliting it with friends. Build with vanilla Javascript, HTML and CSS.',
    stack: [js, html, css],
    link: 'https://determined-pike-b95fcb.netlify.app/',
    linkGit: 'https://github.com/curtisgry/tip-calculator-challenge',
    image: tipcalculator,
  },
  {
    id: v4(),
    title: 'Sunnyside Agency',
    desc: 'A recreation of a web design for a fake design agency. Made with semantic HTML5 and SASS. Flexbox used for layout. Organized using the BEM methodology',
    stack: [html, css, sass],
    link: 'https://curtisgry.github.io/sunnyside-agency/',
    linkGit: 'https://github.com/curtisgry/sunnyside-agency',
    image: sunnyside,
  },
];

export default projects;
