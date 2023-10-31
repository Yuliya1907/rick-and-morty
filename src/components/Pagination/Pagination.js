import React from 'react';
import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.scss';

const Pagination = ({ info, setPageNumber, pageNumber }) => {
  
  return (
   <ReactPaginate 
    pageCount={info?.pages} 
    className='pagination justify-content-center gap-4 my-4'
    forcePage={pageNumber===1 ? 0 : pageNumber - 1}
    nextLabel="&gt;"
    previousLabel="<"
    nextClassName={`${styles.next} btn btn-light next`}
    previousClassName='btn btn-light prev'
    pageClassName='page-item'
    pageLinkClassName={`${styles.link} page-link`}
    activeClassName='btn-secondary'
    onPageChange={(data) => {
      setPageNumber(data.selected + 1);
    }}
  />
  )
}

export default Pagination
