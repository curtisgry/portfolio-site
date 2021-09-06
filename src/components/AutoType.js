import React, { useEffect, useState } from 'react';

export default function AutoType({ text }) {
  const [autoText, setAutoText] = useState('');

  function wait(ms = 0) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }

  function getRandomBetween(min = 20, max = 150, randomNumber = Math.random()) {
    return Math.floor(randomNumber * (max - min) + min);
  }

  const typeOut = (str, min, max) => {
    let index = 0;
    const letters = str.split('');
    let newText = '';

    async function drawLetter() {
      newText += letters[index];
      setAutoText(`${newText}`);
      console.log(autoText);
      index += 1;
      const timeToWait = getRandomBetween(min, max);
      await wait(timeToWait);
      if (index <= letters.length - 1) {
        drawLetter();
      }
    }

    drawLetter();
  };

  useEffect(() => {
    typeOut(text, 100, 350);
  }, []);

  return (
    <>
      <h2 className="auto-text f-2">
        {`${autoText}`}
        <span className="blink">_</span>
      </h2>
    </>
  );
}
