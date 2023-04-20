import React from 'react';
import { useLocation } from 'react-router-dom';

const NotFound = () => {
  // # The useLocation hook returns the location object that represents the current URL
  const { pathname } = useLocation();
  // console.log(location);

  return (
    <main>
      <h2>404: Page &#39;{pathname}&#39; Not Found!</h2>
    </main>
  );
};

export default NotFound;
