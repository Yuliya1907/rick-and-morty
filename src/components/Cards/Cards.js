import React from 'react';
import styles from './Cards.module.scss'
import { Link } from 'react-router-dom';
import CardDetails from '../CardDetails/CardDetails.js';

const Cards = ({ results, page }) => {
    let display;

    if (results) {
        display = results.map((x) => {
            let {id, name, image, status, species, location} = x;
            return (
                
                <div key={id} className={`${styles.card} col-6 col-sm-6 card mb-4`}>
                    <div className='row'>
                    <img src={image} alt='' className={`${styles.image} img-fluid col-5 px-0`}/>
                        <div className='character__info col-7'>
                            <Link to={`${page}${id}`} className={`${styles.name} fs-4 fw-bold mt-3`}>{name}</Link>
                            <div className={`${styles.status} status mb-3 ms-3 fw-bold position-relative`}>
                              {(() => {
                                if(status === 'Dead') {
                                  return (
                                  <span className={`${styles.badge} badge position-absolute end-100 p-2 bg-danger rounded-circle`}>  </span>
                                  );
                                } else if(status === 'Alive') {
                                  return (
                                  <span className={`${styles.badge} badge position-absolute end-100 p-2 bg-success rounded-circle`}>  </span>
                                  );
                                } else {
                                  return (
                                  <span className={`${styles.badge} badge position-absolute end-100 p-2 bg-secondary rounded-circle`}>  </span>
                                  );
                                }
                              })()}
                          
                              <span>{status}</span>
                              <span> - </span>
                              <span>{species}</span>
                            </div>
                            <div className={`${styles.captions}`}>Last known location:</div>
                            <div className={`${styles.name} location fs-5 mb-3`}>{location.name}</div>
                            <div className={`${styles.captions}`}>First seen in:</div>
                            <div className={`${styles.name} location fs-5 mb-3`}>Close Rick-counters</div>
                    </div>
                        
                        </div>
        
                </div>
            );
        });
    } else {
        display = "No characters found :/"
    }
  return (
    <>{display}</>   
  )
}

export default Cards
