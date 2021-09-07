import React from 'react';
import Links from './Links';

export default function Footer() {
  return (
    <div id="footer" className="container">
      <div className="footer-container">
        <Links placement="bottom" />
        <p>
          Build with <a href="https://www.gatsbyjs.com/">Gatsby</a>. <br />{' '}
          Icons from <a href="https://simpleicons.org/">Simple Icons</a>.
        </p>
      </div>
    </div>
  );
}
