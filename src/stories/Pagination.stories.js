
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

export const FirstPage = () => (
  <Pagination
    currentPage={1}
    totalPages={5}
    onPageChange={(page) => console.log(`Page changed to ${page}`)}
  />
);