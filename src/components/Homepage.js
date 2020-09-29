import React from 'react';
import Header from './Header';
import MainContent from './MainContent';
import MapContainer from './MapContainer'

const Home = () => {

  return (
    <>
      <Header />
      <div className="container">
        <MainContent />
        <MapContainer />
      </div>
    </>
  );
}

export default Home;