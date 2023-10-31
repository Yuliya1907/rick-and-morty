import React, { useState} from 'react'

const Modal = () => {
    const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <div class="modal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">History</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
       <div>Character:</div>
       <div>Value</div>
       <div>Location:</div>
       <div>Value</div>
       <div>Episode:</div>
       <div>Value</div>


      </div>
      <div class="modal-footer d-flex justify-content-start">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
  )
}

export default Modal
