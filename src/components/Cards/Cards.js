import React from 'react';
import './Cards.module.scss'

const Cards = ({ results }) => {
    let display;

    if (results) {
        display = results.map((x) => {
            let {id, name, image, status, species, location} = x;
            return (
                
                <div key={id} className='row'>
                    
                        <img src={image} alt='' className='img-fluid col-5'/>
                        <div className='character__info col-7'>
                            <h4>{name}</h4>
                            <div className='status'>
                              <div className='status__dot'></div>
                              <span>{status}</span>
                              <span> - </span>
                              <span>{species}</span>
                            </div>
                            <p className='captions'>Last known location:</p>
                            <p className='location'>{location.name}</p>
                            <p className='captions'>First seen in:</p>
                            <p className='location'>Close Rick-counters of the Rick Kind</p>
                        </div>
        
                </div>
            );
        });
    } else {
        display = "No characters found :/"
    }
  return (
    <div className="col-6 card">{display}</div>   
  )
}

export default Cards
