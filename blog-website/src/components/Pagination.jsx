import React from 'react'

const Pagination = ({ onPageChange, currentPage, blogs, pageSize}) => {
  const totalPage = Math.ceil(blogs.length / pageSize)
  const renderPaginationLinks = () => {
    let pagelinks = []
    for (let i = 1; i <= totalPage; i++) {
      pagelinks.push(i)
    }
    return pagelinks.map((pageNumber) => 
      <li className={pageNumber === currentPage ? "activePagination" : ""} key={pageNumber}>
        <a href="#" onClick={() => onPageChange(pageNumber)}>{pageNumber}</a>
      </li>
    )
  }
  return (
    <ul className='pagination flex-wrap text-white'>
      <li>
        <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
      </li>
      <div className='flex'>{renderPaginationLinks()}</div>
      <li>
        <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPage}>Next</button>
      </li>
    </ul>
  )
}

export default Pagination