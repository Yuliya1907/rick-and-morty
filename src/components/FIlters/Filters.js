import React, { useState } from 'react';
import styles from './Filter.module.scss';
import Gender from './Category/Gender';
import Species from './Category/Species';
import Status from './Category/Status';

const Filters = ({ setSearch, setPageNumber, setStatus, setGender, setSpecies }) => {
  const [showFilters, setShowFilters] = useState(false);
  const [buttonText, setButtonText] = useState("Filter");

  const toggleFilters = () => {
    if (showFilters) {
      setSearch('');
      setPageNumber('');
      setStatus('');
      setGender('');
      setSpecies('');
      setButtonText("Filter");
    } else {
      setButtonText("Remove Filter");
    }

    setShowFilters(!showFilters);
  }

  return (
    <div className='my-4 d-flex justify-content-around'>
      <button
        className={`${styles.btn} btn-light px-5`}
        onClick={toggleFilters}
      >
        {buttonText}
      </button>
      {showFilters && (
        <div className='filters d-flex gap-5'>
  
          <div className="accordion accordion-flush col-4" id="accordionFlushExample">
            <Gender setPageNumber={setPageNumber} setGender={setGender} />
            <Species setPageNumber={setPageNumber} setSpecies={setSpecies} />
            <Status setStatus={setStatus} setPageNumber={setPageNumber} />
          </div>
          
          <form className='d-flex gap-5'>
            <input
              type='text'
              className={`${styles.input}`}
              placeholder='Add key words to find'
              onChange={(e) => {
                setPageNumber(1);
                setSearch(e.target.value);
              }}
            />
            <button
              className={`${styles.btn} btn-light px-5`}
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              Find
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Filters;

