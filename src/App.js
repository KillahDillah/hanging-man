import React, { useEffect, useState } from 'react';
import { getRandomWord } from './words';
import WordToWin from './WordToWin';
import Graveyard from './Graveyard';
import WinnerChickenDinner from './WinnerChickenDinner';

function App() {
  const [word, setWord] = useState('') 

  useEffect(() => {
    setWord(getRandomWord())
  }, [] ); // [] (if empty array) componentDidMount

  return (
    <div className="container">
      <WordToWin word={word}/>
      <Graveyard />
      <WinnerChickenDinner />
    </div>
  );
}

export default App;
