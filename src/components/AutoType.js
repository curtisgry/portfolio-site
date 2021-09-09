import React, { useEffect, useState } from 'react';

export default function AutoType({ text, minTime, maxTime }) {
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
    // make str argument into an array of each letter
    const letters = str.split('');
    let newText = '';

    async function drawLetter() {
      // when drawLetter is called add the letter at the current index value to the new text
      newText += letters[index];
      // update state to new text
      setAutoText(`${newText}`);
      index += 1;
      // generate random timing to wait for the next function call
      const timeToWait = getRandomBetween(min, max);
      await wait(timeToWait);
      // stop condition for recursion
      if (index <= letters.length - 1) {
        drawLetter();
      }
    }

    drawLetter();
  };

  // run the type out function on mount
  useEffect(() => {
    typeOut(text, minTime, maxTime);
  }, []);

  return (
    <>
      <h2 className="auto-text f-2">
        {/* render state being updated from typeOut function */}
        {`${autoText}`}
        <span className="blink">_</span>
      </h2>
    </>
  );
}

AutoType.defaultProps = {
  minTime: 100,
  maxTime: 350,
};
