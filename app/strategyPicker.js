// Rm this file if contents work better in page.tsx

import React from 'react';


export default function getRandomStrategy(props)  {
  // get all strategies from local json file:
  const strategies = props.obliqueStrategies;

  const randomizer = (max) => {
    return Math.floor(Math.random() * (max) )
  }

  //let allStrats = this.state.strategies;
  let randoNum = randomizer(strategies.length);
  let thisRandomStrategy = strategies[randoNum];
  console.log('thisRandomStrategy: '+ thisRandomStrategy['strategy'] );

  // ?? 
  // this.setState({
  //   rQuote: thisRandomQuote['quote']
  // });

//  render() {
    // const {rQuote} = this.state;

    return (
      <div className="">
        <div className="">
          <p>"{rQuote}"</p> 
        </div>

        <button className="btn" id="quote-random"
          onClick={this.getRandomStrategy}>New Strategy, please
        </button>
      </div>
    );
 // }

}

// pullRandomStrategy = () => {
//   this.getRandomStrategy()
// }






// Fetching data from the JSON file
import fsPromises from 'fs/promises';
import path from 'path'
export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data.json');
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);

  return {
    props: objectData
  }
}


// export default getRandomStrategy;
