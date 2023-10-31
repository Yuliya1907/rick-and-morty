import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import styles from '../Cards/Cards.module.scss';
import { Modal, Button } from 'react-bootstrap';

const CardDetails = () => {
    let { id } = useParams();

  let [fetchedData, updateFetchedData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  let { name, location, image, status, species } = fetchedData;

  let api = `https://rickandmortyapi.com/api/character/${id}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
      console.log(fetchedData);
    })();
  }, [api]);

   

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className='d-flex justify-content-center align-items-center mt-5'>
  <div className={`${styles.card} col-sm-8 card mb-4`}>
    <div className='row'>
    <img src={image} alt='' className={`${styles.image} img-fluid col-5 px-0`}/>
        <div className='character__info col-7'>
            <div className={`${styles.name} fs-4 fw-bold mt-3`}>{name}</div>
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
            <div className={`${styles.name} location fs-5 mb-3`}>{location?.name}</div>
            <div className={`${styles.captions}`}>First seen in:</div>
            <div className={`${styles.name} location fs-5 mb-3`}>Close Rick-counters</div>
            <div className={`${styles.captions}`}>Other info</div>
            <div className={`${styles.name} location fs-5 mb-3`}>The Mosaic Rooms are a leading non-profit arts organisation and bookshop dedicated to supporting and promoting contemporary culture from the Arab world and beyond in London.<br/>Established in 2009, as a project of the A.M. Qattan Foundation, it dedicates its work to championing creative and critical voices that are often underrepresented.</div>
    </div>
        
        </div>

        <btn onClick={handleOpenModal} className={`${styles.modalbtn} position-absolute top-30 start-100 translate-middle p-2 bg-light`}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#3C3E44" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M12 8V12" stroke="#3C3E44" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M12 16H12.01" stroke="#3C3E44" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        </btn>

        <btn className={`${styles.modalbtn} position-absolute top-50 start-100 translate-middle p-2 bg-light`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="#3C3E44" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M7 10L12 15L17 10" stroke="#3C3E44" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M12 15V3" stroke="#3C3E44" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </btn>
        <btn className={`${styles.modalbtn} position-absolute top-100 start-100 translate-middle p-2 bg-light`}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="#3C3E44" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z" stroke="#3C3E44" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z" stroke="#3C3E44" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </btn>

        <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header>
          <Modal.Title>History</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div>Character:</div>
       <div>Value</div>
       <div>Location:</div>
       <div>Value</div>
       <div>Episode:</div>
       <div>Value</div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            CLOSE
          </Button>
        </Modal.Footer>
      </Modal>

</div>


    </div>
  
  )
}

export default CardDetails
