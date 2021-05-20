import React from 'react';
import Header from '../components/Header';

const Layout = ({ children }) => {
  return (
    <div className="Main">
      <Header />
      {children}
    </div>
  );
};
export default Layout;
