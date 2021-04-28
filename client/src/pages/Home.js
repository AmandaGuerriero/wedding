import React, { useState, useEffect } from 'react';
import Popup from '../components/Popup';
import Tabs from "../components/Tabs"; 
import EngagementPhotos from "../components/EngagementPhotos";
import RegisterModal from "../components/RegisterModal";
import DomesticPhotos from "../components/DomesticPhotos";
import InternationalPhotos from "../components/InternationalPhotos";
import RegisterForUpdates from "../pages/Register";
import ReactModal from 'react-modal';


const Home = (props) => {
  const [isOpen, setIsOpen] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(!isOpen);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  const togglePopup = () => {
    console.log("Closed")
    setIsOpen(!isOpen);
  }
  return (
    <main>
      <div>
    {!isOpen && <Popup
      content={<RegisterModal />}
      handleClose={togglePopup}
    />}
  </div>
      <Tabs> 
      <div label="Engagement Photos"> 
         <EngagementPhotos />
       </div> 
       <div label="Domestic Photos"> 
         <DomesticPhotos />
       </div> 
       <div label="International Photos"> 
         <InternationalPhotos />
       </div> 
     </Tabs> 
    </main>
  );
};

export default Home;
