import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './accordions.less';

const Accordions = ({ accordionItems }) => {
  return (
    <div className="accordion" id="accordionPanelsStayOpenExample">
      {accordionItems.map((item) => (
        <div className="card" key={item.id}>
          <div className="card-header" id={`panelsStayOpen-heading${item.id}`}>
            <h2 className="mb-0">
              <button
                className={`btn btn-link ${item.isExpanded ? '' : 'collapsed'}`}
                type="button"
                data-toggle="collapse"
                data-target={`#panelsStayOpen-collapse${item.id}`}
                aria-expanded={item.isExpanded ? 'true' : 'false'}
                aria-controls={`panelsStayOpen-collapse${item.id}`}
              >
                {item.label}
                <span className="icon" aria-hidden="true"></span>
              </button>
            </h2>
          </div>
          <div
            id={`panelsStayOpen-collapse${item.id}`}
            className={`collapse ${item.isExpanded ? 'show' : ''}`}
            aria-labelledby={`panelsStayOpen-heading${item.id}`}
          >
            <div className="card-body">
              <strong>{item.label}</strong> {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordions;