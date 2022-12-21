import React from 'react';
import Tabs from "../components/Tabs"; 
import WelcomePhotos from "../components/WelcomePhotos";
import WeddingPhotos from "../components/WeddingPhotos";
import Videos from "./Videos";
import HoneymoonPhotos from '../components/Honeymoon';


const Home = (props) => {
  return (
    <main>
      {/* <div>
        {!isOpen && <RegisterModal />}
      </div> */}
      <Tabs> 
       <div label="Honeymoon"> 
         <HoneymoonPhotos />
       </div> 
      <div label="Wedding"> 
         <WeddingPhotos />
       </div> 
      <div label="Welcome Event"> 
         <WelcomePhotos />
       </div> 
      {/* <div label="Engagement Photos"> 
         <EngagementPhotos />
       </div> 
       <div label="Domestic Photos"> 
         <DomesticPhotos />
       </div> 
       <div label="International Photos"> 
         <InternationalPhotos /> 
       </div> */}
       <div label="Videos"> 
         <Videos />
       </div> 
     </Tabs> 
    </main>
    
  );
};

export default Home;
