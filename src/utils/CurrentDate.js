import React, { useState, useEffect } from 'react';

const CurrentDate = () => {
  const [CurrentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
  const id = setInterval(() => setCurrentDate(new Date()));
    return () => {
      clearInterval(id);
  }});

  return (
    <div className="current-date">{`${CurrentDate.toLocaleDateString()}`}</div>
  );
};

export default CurrentDate;