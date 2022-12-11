import React from 'react';
import Tabs from "../../components/Tabs"; 


const Videos = (props) => {
  return (
    <main>
      {/* <div>
        {!isOpen && <RegisterModal />}
      </div> */}
      <Tabs> 
      <div label="First Dance"> 
          <div class="container">
            <iframe class="responsive-iframe" src="https://www.youtube.com/embed/yd4A_j1flMo"></iframe>
          </div>
       </div> 
      <div label="Engagement Photos"> 
         
       </div> 
       <div label="International Photos"> 
         
       </div> 
     </Tabs> 
    </main>
    
  );
};

export default Videos;
