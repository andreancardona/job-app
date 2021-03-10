import React, { useState, useEffect } from 'react';
import '../styles/currentDate.css';

const CurrentDate = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
  const id = setInterval(() => setCurrentDate(new Date()), 1000);
    return () => {
      clearInterval(id);
  }
  }, []);

  return (
    <div className="current-date">{`${currentDate.toLocaleDateString()}`}</div>
  );
};

export default CurrentDate;