# React demo of Oblique Strategies, musician Brian Eno's card deck for driving creative decisions.

You can learn more about the history of this brainstorming tool [here](https://en.wikipedia.org/wiki/Oblique_Strategies).

For the purposes of this demo it provides a long list of text strings to pick randomly, similar to shuffling the deck and drawing the top card.

## On the web
(TODO) You can view a working demo here on Surge.sh -- 
### [https://codetrafficker-obliquestrategies.surge.sh/](https://codetrafficker-obliquestrategies.surge.sh/)

You can view the Github repo here: 
### [oblique-strategies-demo](https://github.com/CodeTrafficker/oblique-strategies-demo)


## Tech stack
ReactJS 
Next.js, for transpiling typescript and scss into flat js and css files ready for deployment
Tailwind, for basic column control and a few default styles


## Outline
page.tsx file uses the useState hook to start with one random phrase, and then refresh it with a new, randomly selected one on button click. In accord with modern-day ES6/TypeScript conventions, The file utilizes arrow functions, consts, and a nested ternary block.

The useEffect hook is merely to run the main pullObliqueStrategy() function on first page load, otherwise there is no initial strategy displayed.

The basic randomizer() function picks a random number within the given length of the json string.

pullObliqueStrategy() function uses randomizer() to generate a random number; applies that number to the json string to pull the corresponding strategy to display.

It then provides that number to the paletteSwitcher() function, which picks one of three color sets, depending on which third of the total number of strategies the random number falls (ie, in the first, second, or third division of the total 114 strategies).

/data/data.json stores the 114 phrases, and called by page.tsx. It is a static list that does not change, so it is sensible to store this locally instead of calling the same data from an API service.

page.scss pulls scss variables from variables.scss to set repeating color values; transitions for quick dissolves from palette to palette; and general styling for the page. For Responsive Design it assumes mobile sizing as the default, and one media query for window sizes 640px and wider brings in style modifications for those larger window views.


## Use of AI
For a productivity boost, I pasted the list of cards into chatGPT and prompted for a json string, using "strategy" as a key per phrase, and each phrase as a value. This step avoided copying and pasting each line, and potential formatting errors. It took around three prompts to massage the raw data into the desired format, and not more than 5 or 10 minutes' time.


## Github Projects board
I used Github Projects to organize this demo. It helped me keep track of tasks and get to a stopping point. Any with "Nice to have" in the title can wait. The Board is here: [https://github.com/users/CodeTrafficker/projects/6/views/1](https://github.com/users/CodeTrafficker/projects/6/views/1)


## Installation
This guide assumes you already have [Node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com/) installed.

Clone or download master branch from [Github](https://github.com/CodeTrafficker/oblique-strategies-demo) to your local work directory.

Maneuver to local version of /oblique-strategies-demo/ , then run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Credits
2023 - Phil Lollar at [LinkedIn](https://www.linkedin.com/in/phillollar/) and [Github](https://github.com/CodeTrafficker/)
Awesome static html/js/css hosting service [Surge](https://surge.sh/)

