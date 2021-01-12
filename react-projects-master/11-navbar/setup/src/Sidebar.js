import React from 'react'
import { links } from './data'

const Sidebar = ({cRef, lRef}) => {
    return (
        <>
            <div className='links-container' ref={cRef}>
            <ul className='links' ref={lRef}>
            {
                links.map((item, index) => {
                const {id, url, text} = item;
                return (
                    <li key={id}><a href={url}>{text}</a></li>
                    );
                })
            }
            </ul>
        </div>
      </>
    );
}

export default Sidebar