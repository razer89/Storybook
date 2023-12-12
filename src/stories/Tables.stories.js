import React from 'react';
import './tables.css';

export default {
  title: 'Content/Tables',
  tags: ['autodocs'],
};

export const BasicTable = () => (
    <div>
      <h1>Basic Table</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">
              Username 
              <span className="sort">
                <a className="sort-down-outline" href="#action" title="" aria-label="Sort descending" data-toggle="tooltip" data-original-title="Sort descending">
                  <span className="caret"></span>
                </a>
              </span>
            </th>
            <th scope="col">
              First Name 
              <span className="sort">
                <a className="sort-down-outline" href="#action" title="" aria-label="Sort descending" data-toggle="tooltip" data-original-title="Sort descending">
                  <span className="caret"></span>
                </a>
              </span>
            </th>
            <th scope="col">
              Last Name 
              <span className="sort">
                <a className="sort-down-outline" href="#action" title="" aria-label="Sort descending" data-toggle="tooltip" data-original-title="Sort descending">
                  <span className="caret"></span>
                </a>
              </span>
            </th>
            <th scope="col">
              Email 
              <span className="sort">
                <a className="sort-down-outline" href="#action" title="" aria-label="Sort descending" data-toggle="tooltip" data-original-title="Sort descending">
                  <span className="caret"></span>
                </a>
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row" className="highlight">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row" className="highlight">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row" className="highlight">3</th>
            <td colSpan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </div>
  );