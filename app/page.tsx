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
  console.log('const jsonLength is: ', jsonLength );

  // Run once on page load to show an initial strategy message instead 
  // of empty space. Empty array [] because React:
  useEffect(() => {
    pullObliqueStrategy();
  }, []);

  const pullObliqueStrategy = () => {
    let randomNum = randomizer( jsonLength );
    let thisRandomStrategy = strategiesJSON[randomNum].strategy;
    console.log('randomNum: ', randomNum );
    console.log('thisRandomStrategy: ', thisRandomStrategy );

    setMessage(prevMsg => thisRandomStrategy);
  }

  return (
    <>
    <h1 className="text-center">OBLIQUE STRATEGIES</h1>
    <div className="app-container   mx-auto px-5 text-center">
      <p className="theMessage">{theMessage}</p>
      <button className="primary absolute bottom-10" onClick={pullObliqueStrategy}>New Strategy, please</button>
    </div>
    </>
  );
}
