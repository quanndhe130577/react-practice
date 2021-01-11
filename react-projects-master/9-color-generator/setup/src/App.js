import React, { useEffect, useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color, setColor] = useState('#f15025');
  const [error, setError] = useState(false);
  const [indexCopy, setIndexCopy] = useState(-1);
  const [step, setStep] = useState(10);
  const [list, setList] = useState(new Values('#f15025').all(step));

  const handleSubmit = e => {
    
    e.preventDefault();
    updateList();
    setIndexCopy(-1);
  }

  const updateList = () => {
    try{
      let colors = new Values(color).all(parseInt(step));
      setList(colors);
      setError(false);
    }catch(error){
      setError(true);
      console.log(error);
    }
  }

  useEffect(() => {
    updateList();
  }, [step])

  const saveToClipBoard = (index) => {
    setIndexCopy(index);
  }

  return (
    <main>
      <section  className='container'>
        <h3>color generate</h3>
        <form onSubmit={handleSubmit}>
          <input 
            type='text' 
            value={color} 
            onChange={(e) => {
              setColor(e.target.value);
            }}
            placeholder='#f15025'
            className={`${error?'error':null}`}>           
          </input>
          <input value={step} type='number' min='1' style={{margin: 10}} placeholder={`${step}%`}
            onChange={(e) => {     
              setStep(e.target.value);
            }}
          ></input>
          <button className='btn' type='submit'>Submit</button>
        </form>
      </section>
      <section className='colors'>
        {
          list.map((color, index) => {
            return <SingleColor saveToClipBoard={saveToClipBoard} indexCopy={indexCopy} key={index} {...color} index={index} hexColor={color.hex}/>
          })
        }
      </section>
    </main>
  );
}

export default App
