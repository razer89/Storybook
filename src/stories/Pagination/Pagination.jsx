import React from 'react';
import PropTypes from 'prop-types';
import './pagination.less';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const renderPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <li key={i} className={i === currentPage ? 'page-item active' : 'page-item'}>
          <a className="page-link" href="#" onClick={() => onPageChange(i)}>
            {i}
          </a>
        </li>
      );
    }
    return pages;
  };

  return (
    <nav className="control-items" aria-label="Pagination">
      <ul className="pagination">
        {/* Render "Previous" button */}
        <li className={currentPage === 1 ? 'page-item disabled' : 'page-item'}>
          <a className="page-link" href="#" tabIndex="-1" aria-disabled="true" onClick={() => onPageChange(currentPage - 1)}>
          <span aria-hidden="true">&lsaquo;</span>
          </a>
        </li>

        {/* Render page numbers */}
        {renderPageNumbers()}

        {/* Render "Next" button */}
        <li className={currentPage === totalPages ? 'page-item disabled' : 'page-item'}>
          <a className="page-link" href="#" onClick={() => onPageChange(currentPage + 1)}>
          <span aria-hidden="true">&rsaquo;</span>
          </a>
        </li>
      </ul>
      <span className="page-number-input" title="" data-toggle="tooltip" id="_userinput_wrapper" data-original-title="Type the page number and hit enter or click go">
        <input className="input-pagination" id="_userinput" type="text" size="5" aria-label="Type the page number and hit enter or click go" />
        <input className="btn-form" type="button" value="Go" id="_userinput_go" />
      </span>
    </nav>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;