import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './accordions.less';

const Accordions = ({ accordionItems }) => {
  return (
    <div className="accordion" id="accordionPanelsStayOpenExample">
      {accordionItems.map((item) => (
        <div className="accordion-item" key={item.id}>
          <h2 className="accordion-header" id={`panelsStayOpen-heading${item.id}`}>
            <button
              className={`accordion-button ${item.isExpanded ? '' : 'collapsed'}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#panelsStayOpen-collapse${item.id}`}
              aria-expanded={item.isExpanded}
              aria-controls={`panelsStayOpen-collapse${item.id}`}
            >
              {item.label}
            </button>
          </h2>
          <div
            id={`panelsStayOpen-collapse${item.id}`}
            className={`accordion-collapse collapse ${item.isExpanded ? 'show' : ''}`}
            aria-labelledby={`panelsStayOpen-heading${item.id}`}
          >
            <div className="accordion-body">
              <strong>{item.label}</strong> {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordions;