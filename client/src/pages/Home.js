import React, { useState, useEffect } from 'react';
import Tabs from "../components/Tabs"; 
import EngagementPhotos from "../components/EngagementPhotos";
import RegisterModal from "../components/RegisterModal";
import DomesticPhotos from "../components/DomesticPhotos";
import InternationalPhotos from "../components/InternationalPhotos";
// import { Modal } from 'react-responsive-modal';


const Home = (props) => {
  // const [isOpen, setIsOpen] = useState(true);
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsOpen(isOpen); // Set to not Open 
  //   }, 1000);
  //   return () => clearTimeout(timer);
  // }, []);
  // const onCloseModal = () => {
  //   console.log("Closed")
  //   setIsOpen(isOpen);
  // }
  
  return (
    <main>
      {/* <div>
        {!isOpen && <RegisterModal />}
      </div> */}
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
