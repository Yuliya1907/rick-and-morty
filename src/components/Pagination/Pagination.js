import React from 'react';
import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.scss';

const Pagination = ({ info, setPageNumber, pageNumber }) => {
  
  return (
   <ReactPaginate 
    pageCount={info?.pages} 
    className='pagination justify-content-center gap-4 my-4'
    forcePage={pageNumber===1 ? 0 : pageNumber}
    nextLabel=">"
    previousLabel="<"
    nextClassName='btn btn-light'
    previousClassName='btn btn-light'
    pageClassName={`page-item ${styles.page} `}
    pageLinkClassName={`${styles.link}`}
    activeClassName='btn-light'
    onPageChange={(data) => {
      setPageNumber(data.selected + 1);
    }}
  />
  )
}

export default Pagination
