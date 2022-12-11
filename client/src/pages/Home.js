import React from 'react';
import Tabs from "../components/Tabs"; 
import EngagementPhotos from "../components/EngagementPhotos";
import DomesticPhotos from "../components/DomesticPhotos";
import InternationalPhotos from "../components/InternationalPhotos";
import WelcomePhotos from "../components/WelcomePhotos";
import Videos from "./Videos";


const Home = (props) => {
  return (
    <main>
      {/* <div>
        {!isOpen && <RegisterModal />}
      </div> */}
      <Tabs> 
      <div label="Welcome Event"> 
         <WelcomePhotos />
       </div> 
      <div label="Engagement Photos"> 
         <EngagementPhotos />
       </div> 
       <div label="Domestic Photos"> 
         <DomesticPhotos />
       </div> 
       <div label="International Photos"> 
         <InternationalPhotos />
       </div> 
       <div label="Videos"> 
         <Videos />
       </div> 
     </Tabs> 
    </main>
    
  );
};

export default Home;
