import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({rgb, weight, index, hexColor, saveToClipBoard, indexCopy}) => {
  //const [alert, setAlert] = useState(false);
  const bcg = rgb.join(',');
  const hex = rgbToHex(...rgb);
  const hexValue = `#${hexColor}`;

  /*useEffect(() => {
    const timout = setTimeout( () => {
      setAlert(false);
    }, 3000);
    return () => clearTimeout(timout);
  }, [alert])*/

  return (
    <article className={`color ${index > 10  && 'color-light'}`} style={{backgroundColor: `rgb(${bcg})`}}
      onClick={() => {
        //setAlert(true);
        saveToClipBoard(index);
        navigator.clipboard.writeText(hexValue);
      }}
    >
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>{hexValue}</p>
      {
        index == indexCopy && <p className='alert'>copied to cliboard</p>
      }
    </article>
  )
}

export default SingleColor
