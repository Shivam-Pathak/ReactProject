import React from 'react';
import '../../dist/css/card.css'

function CardWithLinks() {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">My Card Title</h5>
        <p className="card-text">This is some text for my card.</p>
        <a href="#" className="card-link">Link 1</a>
        <a href="#" className="card-link">Link 2</a>
        <a href="#" className="card-link">Link 3</a>
      </div>
    </div>
  );
}

export default CardWithLinks;
