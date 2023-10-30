import React from 'react'
import FilterBTN from '../FilterBTN';

const Species = ({ setSpecies, setPageNumber }) => {
    let species = [
        "Human",
        "Alien",
        "Humanoid",
        "Poopybutthole",
        "Mythological",
        "Unknown",
        "Animal",
        "Disease",
        "Robot",
        "Cronenberg",
        "Planet",
      ];
  return (
    <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        Species
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body row">
        {species.map((items, index) => (
            <FilterBTN 
              key={index} 
              index={index} 
              items={items} 
              name="species" 
              task={setSpecies}
              setPageNumber={setPageNumber}
            />
        ))}
      </div>
    </div>
  </div>
  )
}

export default Species
