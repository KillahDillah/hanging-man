import React, { useEffect, useState } from 'react';
import man from './man.png'

function WordtoWin({word}) {
  const [underScores, setUnderScores] = useState('');
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

  useEffect(() => {
    setUnderScores(word.split('').map( letter => '_').join(''))
  }, [word])

  function handleClick(e) {
    e.target.setAttribute('disabled', true)
    let correct = false;

    const guess = e.target.innerText
    const tempArr = underScores.split('')

    for(let i=0; i < word.length; i++){
      if(guess === word[i]){
        tempArr[i] = guess;
        correct = true;
      }
    }
    setUnderScores(tempArr.join(''))
    e.target.classList.add(correct ? 'btn-success' : 'btn-danger')
  }

  console.log(underScores)
  return (
    <div>
      <img src={man} />
      <h1>{underScores}</h1>
      <section>
        {alphabet.map(letter => (
        <button onClick={handleClick} key={letter} type="button" className='btn'>{letter}</button>
        ))}
      </section>
    </div>
  )
}

export default WordtoWin;