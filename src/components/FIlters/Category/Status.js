import React from 'react'
import FilterBTN from '../FilterBTN'

const Status = ({ setPageNumber, setStatus }) => {
    let status = ["Alive", "Dead", "Unknown"];
  return (
    <div className="accordion-item">
    <h2 className="accordion-header">
      <button 
        className="accordion-button collapsed" 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#flush-collapseOne" 
        aria-expanded="false" 
        aria-controls="flush-collapseOne"
      >
        Status
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body row">
        {status.map((items, index) => (
        <FilterBTN 
          key={index} 
          name="status" 
          index={index} 
          items={items}
          task={setStatus}
          setPageNumber={setPageNumber}
        /> 
        ))}
        
      </div>
    </div>
  </div>
  )
}

export default Status
