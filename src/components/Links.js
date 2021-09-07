import React from 'react';
import Github from './icons/Github';
import LinkedIn from './icons/LinkedIn';
import Gmail from './icons/Gmail';

export default function Links({ placement }) {
  return (
    <div className={`icons-container icons-${placement}`}>
      <div className="icon">
        <a href="https://github.com/curtisgry" target="_blank" rel="noreferrer">
          <Github />
        </a>
      </div>
      <div className="icon">
        <a
          href="https://www.linkedin.com/in/curtis-gray"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedIn />
        </a>
      </div>
      <div className="icon">
        <a
          href="mailto: gray.curtis1@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <Gmail />
        </a>
      </div>
    </div>
  );
}
