import React from 'react';


const CardItem = () => {
  return (
    <>
      <div className="service-card-container">
        <button type="button" className="card-get-btn">
          <span className="card-get-btn-txt">Get Start</span>
        </button>
        <div className="service-card-info-container">
          <h6 className="card-info-txt">Build your brand</h6>
          <h4 className="card-title-txt">Graphic Design</h4>
          <button className="card-link-btn">
            <i className="icon-link" />
          </button>
        </div>
        <div className="service-card-img-container item-0" />
      </div>
    </>
  );
};

export default CardItem;
