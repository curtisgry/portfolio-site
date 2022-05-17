import { v4 } from 'uuid';
import shopapp from '../images/shopapp.png';
import tipcalculator from '../images/tipcalculator.png';
import weatherapp from '../images/simpleweather.png';
import etchasketch from '../images/etchasketch.png';
import sunnyside from '../images/sunnyside.png';
import craftory from '../images/craftory.png';
import voyager from '../images/voyager.png';
import myFlix from '../images/myflix.png';
import pokedex from '../images/pokedex.png';

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
    title: 'myFlix',
    desc: 'myFlix is a full stack application build with the MERN stack. The purpose is for finding movies and information about things related to them like the director, summary, and genre.',
    stack: [js, html, css, mongo, re, nodejs, bootstrap],
    link: 'https://myflix-5f2a35.netlify.app/',
    linkGit: 'https://github.com/curtisgry/myflix-client',
    image: myFlix,
  },
  {
    id: v4(),
    title: 'Voyager Synth',
    desc: 'A web synthesizer and sequencer powered by the Web Audio API. Built with React and Styled Components. The user can change settings and effects to experiment with sound.',
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
    title: 'Pokedex',
    desc: 'This application was made using the fetch API to get the necessary information from https://pokeapi.co into the list displayed on the page. It is a list of buttons that when clicked will show you some details about that Pokemon.',
    stack: [html, css, bootstrap, js],
    link: 'https://curtisgry.github.io/cf-javascript-app/',
    linkGit: 'https://github.com/curtisgry/cf-javascript-app',
    image: pokedex,
  },
];

export default projects;
