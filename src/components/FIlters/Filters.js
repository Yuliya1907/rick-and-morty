import React from 'react';
import styles from './Filter.module.scss';

const Filters = ({ setSearch, setPageNumber }) => {
  return (
    <div className='my-4 d-flex justify-content-between'>
      <button className={`${styles.btn} btn-light px-5`}>Filter</button>
      <div class="dropdown ">
        <button class="btn btn-light dropdown-toggle btn-lg px-5" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Select item
        </button>
        <ul class="dropdown-menu">
          <li className='d-flex justify-content-between px-3'>
            <label for="character">Character</label>
            <input type="checkbox" id="character" name="character" />
            
          </li>
          <li className='d-flex justify-content-between px-3'>
          <label for="location">Location</label>
            <input type="checkbox" id="location" name="location" />
          </li>
          <li className='d-flex justify-content-between px-3'>
          <label for="episodes">Episodes</label>
            <input type="checkbox" id="episodes" name="episodes" />
          </li>
        </ul>
      </div>
      <form className='d-flex gap-5'>
        <input 
          type='text'
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
  )
}

export default Filters
