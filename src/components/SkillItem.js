import React from 'react';
import { useInView } from 'react-intersection-observer';

export default function SkillItem({ title, image }) {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <div ref={ref} className={`skill-item ${inView ? 'visible' : ''}`}>
      <span>{title}</span>
      <img className="tech-icon" src={image} />
    </div>
  );
}
