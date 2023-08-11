'use client';

// import allStrategies from '../data/data.json';
import './page.scss';

/////// Notes: //////
// Don't use getInitialProps bc of React's /app vs /pages brittleness
// Put json in /data/
// 115 strategies total


// These two need the allStrategies import, above:
// This dumps out full json, formatted:
// console.log('allStrategies: ', allStrategies);

// Ex: Pick the third one: 
// console.log('oblique3: ', allStrategies[4]);
// but for some reason could not extract .length from allStrategies obj (2 instead of 115)



export default function obliqueStrategies()  {

  // Now .length works: 
  const strategiesJSON = require('../data/data.json');
  // console.log('strategiesJSON.length: ', strategiesJSON.length );

  let theMessage: string;  

  const randomizer = (max) => {
    return Math.floor(Math.random() * (max) )
  }

  const pullObliqueStrategy = () => {

    let randomNum = randomizer( strategiesJSON.length );
    let thisRandomStrategy = strategiesJSON[randomNum].strategy;
    console.log('randomNum: ', randomNum );
    console.log('thisRandomStrategy: ', thisRandomStrategy );

    // theMessage = thisRandomStrategy;
    return theMessage = thisRandomStrategy;
  }

  // run on load, then on clicks:
  pullObliqueStrategy();
  
  return (
    <div className="">
      <p id="theMessage">{theMessage} </p>
       <button className="primary" id="" onClick={pullObliqueStrategy}>New Strategy, please</button>
    </div>

  );

}
