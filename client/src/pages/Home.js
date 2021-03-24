import React from 'react';
import Tabs from "../components/Tabs"; 
import EngagementPhotos from "../components/EngagementPhotos";
import DomesticPhotos from "../components/DomesticPhotos";
import InternationalPhotos from "../components/InternationalPhotos";


const Home = () => {

  return (
    <main>
      <Tabs> 
       <div label="Domestic Photos"> 
         <DomesticPhotos />
       </div> 
       <div label="International Photos"> 
         <InternationalPhotos />
       </div> 
       <div label="Engagement Photos"> 
         <EngagementPhotos />
       </div> 
     </Tabs> 
    </main>
  );
};

export default Home;
