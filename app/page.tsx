'use client';

import {useState} from 'react';
import './page.scss';

/////// Notes: //////
// Don't use getInitialProps bc of React's /app vs /pages brittleness
// Put json in /data/
// 115 strategies total

//// These two need the allStrategies import: /////
// import allStrategies from '../data/data.json';
// 1) This dumps out full json, formatted:
// console.log('allStrategies: ', allStrategies);
// console.log('oblique3: ', allStrategies[4]);
// but for some reason could not extract allStrategies.length obj (2 instead of 115)


export default function obliqueStrategies()  {
  const [theMessage, setMessage] = useState();

  // Now xx.length works: 
  const strategiesJSON = require('../data/data.json');
  // console.log('strategiesJSON.length: ', strategiesJSON.length );

  const randomizer = (max) => {
    return Math.floor(Math.random() * (max) )
  }

  const pullObliqueStrategy = () => {
    let randomNum = randomizer( strategiesJSON.length );
    let thisRandomStrategy = strategiesJSON[randomNum].strategy;
    console.log('randomNum: ', randomNum );
    console.log('thisRandomStrategy: ', thisRandomStrategy );

    setMessage(prevMsg => thisRandomStrategy);
  }

  return (
    <>
    <h1 className="text-center">OBLIQUE STRATEGIES</h1>
    <div className="app-container mx-auto px-5 text-center">
      <p id="theMessage">{theMessage}</p>
      <button className="primary absolute bottom-10" onClick={pullObliqueStrategy}>New Strategy, please</button>
    </div>
    </>
  );
}
