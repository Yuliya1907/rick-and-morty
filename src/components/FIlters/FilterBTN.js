import React from 'react'

const FilterBTN = ({ name, index, items, task, setPageNumber }) => {
  return (
    <div className='col-6'>
        <style jsx>
        {`
          .x:checked + label {
            background-color: #3c3e44;
            color: white;
          }
          input[type="radio"] {
            display: none;
          }
        `}
      </style>

      <div className="form-check">
       <input 
         onClick={() => {
            task(items);
            setPageNumber(1);
         }}
         className="x" 
         name={name} 
         type="radio" 
         value="" 
         id={`${name} - ${index}`}
       />
  <label class="btn btn-secondary" for={`${name} - ${index}`}>
    {items}
  </label>
</div>

    </div>
  )
}

export default FilterBTN
