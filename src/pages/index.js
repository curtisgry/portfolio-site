import React from 'react';
import { Helmet } from 'react-helmet';

import Banner from '../components/Banner';
import Nav from '../components/Nav'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'

// markup
const IndexPage = () => (
  <div className="main">
    <Helmet
      htmlAttributes={{
        lang: 'en',
      }}
    >
      <meta charSet="utf-8" />
      <title>Curtis Gray</title>
    </Helmet>
    <Banner />
    <Nav />
    <main>
      <About />
      <Skills />
      <Projects />
    </main>
  </div>
);

export default IndexPage;
