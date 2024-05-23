import React from 'react';
import CustomNav from '../../components/NavBar/navbar';
import HeroPage from './Components/HeroPage';
import Cats from './Components/Cats';
function HomePage() {
  return (
    <>  
        <div>
            <CustomNav></CustomNav>
            <HeroPage></HeroPage>
            <Cats></Cats>
        </div>
    </>
  )
}

export default HomePage;