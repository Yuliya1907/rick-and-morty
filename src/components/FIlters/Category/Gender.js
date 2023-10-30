import React from 'react';
import FilterBTN from '../FilterBTN';

const Gender = ({ setGender, setPageNumber }) => {
    let genders = ["female", "male", "genderless", "unknown"];
  return (
    <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Gender
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body row">
      {genders.map((items, index) => (
        <FilterBTN 
          key={index} 
          name="gender" 
          index={index} 
          items={items}
          task={setGender}
          setPageNumber={setPageNumber}
        /> 
        ))}
      </div>
    </div>
  </div>
  )
}

export default Gender
