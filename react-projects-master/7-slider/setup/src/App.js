import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  //const {id, image, name, title, quote} = people[index];  

  useEffect(() => {
    if (index < 0) {
      setIndex(people.length - 1);
    }
    if(index >= people.length){
      setIndex(0);
    }
  }, [index, people])

  useEffect(() => {
    let inter = setInterval(() => {
      setIndex(index + 1);
    }, 3000)
    return () => clearInterval(inter);
  }, [index])

  return <section className='section'>
    <div className='title'>
      <h2>
        <span>/</span>Reviews
      </h2>
    </div>
    <div className='section-center'>
      {
        people.map((person, indexPerson) => {
          const {id, image, name, title, quote} = person;          
          // more stuff coming up
          let position = '';
          //let position = indexPerson === index ? 'activeSlide' : indexPerson === index - 1 ? 'lastSlide' : indexPerson === index + 1 ? 'nextSlide' : '';
          if(indexPerson === index){
            position = 'activeSlide';
          }else if(indexPerson === index + 1 || (indexPerson === 0 && index === people.length - 1)){
            position = 'nextSlide';
          }else if(indexPerson === index - 1 || (indexPerson === people.length - 1  && index === 0 )){
            position = 'lastSlide';
          }
          if(position === ''){
            return;
          }
          return (
            <article className={position} key={id}>
              <img src={image} alt={name} className='person-img' />
              <h4>{name}</h4>
              <p className='title'>{title}</p>
              <p className='text'>{quote}</p>
              <FaQuoteRight className='icon'/>
            </article>
          );
        })
      }
      {
        /*
        <article className='activeSlide' key={id}>
        <img src={image} alt={name} className='person-img' />
        <h4>{name}</h4>
        <p className='title'>{title}</p>
        <p className='text'>{quote}</p>
        <FaQuoteRight className='icon'/>
      </article>
      */
      }
      <button className='prev' onClick={() => {
        if(index === 0){
          setIndex(people.length - 1);
        }else{
          setIndex(index-1);
        }    
      }}>
        <FiChevronLeft />
      </button>
      <button className='next' onClick={() => {
        if(index === people.length - 1){
          setIndex(0);
        }else{
          setIndex(index+1);
        }
      }}>
        <FiChevronRight />
      </button>
    </div>
  </section>
}

export default App;
