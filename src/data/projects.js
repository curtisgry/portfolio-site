import { v4 } from 'uuid';
import shopapp from '../images/shopapp.png';
import tipcalculator from '../images/tipcalculator.png';
import weatherapp from '../images/simpleweather.png';
import etchasketch from '../images/etchasketch.png';

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

const projects = [
  {
    id: v4(),
    title: 'React Shopping Cart',
    desc: 'This project is a mock store app I made to explore more with React. The user can add items to their cart, change quantities and delete from cart.',
    stack: [js, html, css, re],
    link: 'https://curtisgry.github.io/shopping-cart/#/',
    linkGit: 'https://github.com/curtisgry/shopping-cart',
    image: shopapp,
  },
  {
    id: v4(),
    title: 'Tip Calculator',
    desc: 'A simple application for calculating a tip and spliting it with friends. Build with vanilla Javascript, HTML and CSS.',
    stack: [js, html, css],
    link: 'https://determined-pike-b95fcb.netlify.app/',
    linkGit: 'https://github.com/curtisgry/tip-calculator-challenge',
    image: tipcalculator,
  },
  {
    id: v4(),
    title: 'Quick Weather',
    desc: 'This is a very simple weather app that uses the open weather map api as well as the zippopotam zip code api for additional location information.',
    stack: [js, html, css],
    link: 'https://curtisgry.github.io/quick-weather/',
    linkGit: 'https://github.com/curtisgry/quick-weather',
    image: weatherapp,
  },
  {
    id: v4(),
    title: 'Etch a Sketch',
    desc: 'This project was a great way to get better with javascript as well as using css flexbox. Change grid size and color effects and draw by hovering over the box.',
    stack: [js, html, css],
    link: 'https://curtisgry.github.io/EtchASketch/',
    linkGit: 'https://github.com/curtisgry/EtchASketch',
    image: etchasketch,
  },
];

export default projects;
