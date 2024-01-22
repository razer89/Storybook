import React from 'react';
import PropTypes from 'prop-types';
import './cards.less';

export const Cards = ({ title, text, link1 }) => (
  <div className="card1" style={{ width: '18rem' }}>
    <div className="card-body-1">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{text}</p>
      <a href={link1.url} className="card-link">
        {link1.label}
      </a>
    </div>
  </div>
);

Cards.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  link1: PropTypes.shape({
    label: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,

};

export default Cards;