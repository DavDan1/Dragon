import React, { useState, useEffect } from 'react';
import customersData from './customers.json';
import './customer-reviews.scss';

const CustomerReviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % customersData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const renderCustomer = (index) => {
    const customer = customersData[index];
    const stars = Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < customer.rating ? 'star filled' : 'star'}>&#9733;</span>
    ));
    return (
      <div key={index} className={`customer ${index === currentIndex ? 'current' : ''}`}>
        <div className="stars">{stars}</div>
        <div className="comment">{customer.comment}</div>
        <div className="name">{customer.name}</div>
      </div>
    );
  };

  const renderCustomers = () => {
    const lastIndex = customersData.length - 1;
    const indices = [
      (currentIndex - 1 + customersData.length) % customersData.length,
      currentIndex,
      (currentIndex + 1) % customersData.length,
    ];
    return indices.map((index) => {
      if (index === lastIndex && currentIndex === 0) {
        // Special case for wrapping around to the last index
        return renderCustomer(index);
      } else if (index === 0 && currentIndex === lastIndex) {
        // Special case for wrapping around to the first index
        return renderCustomer(index);
      } else {
        return renderCustomer(index);
      }
    });
  };

  return (
    <div className="carousel-container">
      <h2 className="carousel-title">OUR SATISFIED CUSTOMERS</h2>
      <div className="carousel">
        {renderCustomers()}
        <div className="carousel-dots">
          {customersData.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            ></button>
          ))}
        </div>
      </div>
    </div >
  );
};

export default CustomerReviews;
