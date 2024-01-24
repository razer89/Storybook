
import React from 'react';
import Pagination from './Pagination';

export default {
  title: 'Components/Pagination',
  tags: ['autodocs'],
  component: Pagination,
};

export const Default = () => (
  <Pagination
    currentPage={2}
    totalPages={5}
    onPageChange={(page) => console.log(`Page changed to ${page}`)}
  />
);

Default.parameters = {
  docs: {
    source: {
      code: `
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li class="page-item"><a class="page-link" href="#">1</a></li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
    </nav>
      `,
    },
  },
};


export const FirstPage = () => (
  <Pagination
    currentPage={1}
    totalPages={5}
    onPageChange={(page) => console.log(`Page changed to ${page}`)}
  />
);

FirstPage.parameters = {
  docs: {
    source: {
      code: `
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li class="page-item"><a class="page-link" href="#">1</a></li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
    </nav>
      `,
    },
  },
};