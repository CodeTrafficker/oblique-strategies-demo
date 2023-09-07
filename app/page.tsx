'use client';

import {useEffect, useState} from 'react';
import './page.scss';

/////// Notes: //////
// Don't use getInitialProps bc of React's /app vs /pages brittleness
// Put json in /data/
// 114 strategies total, but get length() for versality's sake

// Can go into global functions file if expanding later:
const randomizer = (max) => {
  return Math.floor(Math.random() * (max) )
}

export default function obliqueStrategies()  {
  const [theMessage, setMessage] = useState();
  const strategiesJSON = require('../data/data.json');
  const jsonLength = strategiesJSON.length;
  const [paletteChoice, setPaletteChoice] = useState();

  // Run once on page load to show an initial strategy message instead 
  // of empty space. Empty array [] because React:
  useEffect(() => {
    pullObliqueStrategy();
  }, []);


  // There are three palettes so far in variables.scss. 
  // Divide total num of strategies into closest integer thirds
  // Set case for first third, second third, remaining range
  const paletteSwitcher = (randomNum) => {
    const paletteCount = 3;
    const rangeLength = Math.floor(jsonLength/paletteCount);
    const range1 = [0, rangeLength];
    const range2 = [rangeLength + 1, Math.floor(rangeLength * 2)];
    const range3 = [Math.floor(rangeLength * 2) + 1, jsonLength];
    console.log('range1: ', range1, ', range2: ',range2, ', range3: ', range3);

    let paletteClass = 'palette1';

    // Chained ternary operator instead of long if/else fn: 
    (randomNum <= range1[1]) ? paletteClass = 'palette1'
    : (range2[0] <= randomNum && randomNum <= range2[1]) ? paletteClass = 'palette2'      
    : (range3[0] <= randomNum) ? paletteClass = 'palette3'
    : paletteClass = 'palette1';

    console.log('randomNum is ',randomNum,' and paletteClass is ', paletteClass);

    setPaletteChoice(prevChoice => paletteClass);
  }


  const pullObliqueStrategy = () => {
    let randomNum = randomizer( jsonLength );
    let thisRandomStrategy = strategiesJSON[randomNum].strategy;
    console.log('randomNum: ', randomNum );
    console.log('thisRandomStrategy: ', thisRandomStrategy );

    // setTimeout(() => { 
    paletteSwitcher(randomNum);
    setMessage(prevMsg => thisRandomStrategy);
    //}, 500);

  }

  return (
    <>
    <h1 className="text-center">OBLIQUE STRATEGIES</h1>
    <div className="app-container mx-auto px-5 text-center">
      <p id="theMessage" className="">{theMessage} {paletteChoice}</p>
      <button className="primary absolute bottom-10" onClick={pullObliqueStrategy}>Draw a card</button>
    </div> 
    <p className="info-credits mx-auto text-center py-3 text-sm italic">
      Read more about the history of Brian Eno's Oblique Strategies card deck here: <a href="https://en.wikipedia.org/wiki/Oblique_Strategies">wikipedia.org/wiki/Oblique_Strategies</a>
      <br />
      Github repo <a href="https://github.com/CodeTrafficker/oblique-strategies-demo">here</a>.
    </p>
    </>
  );
}
