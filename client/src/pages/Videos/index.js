import React from 'react';
import Tabs from "../../components/Tabs"; 
import './style.css';


const Videos = (props) => {
  return (
    <main>
      {/* <div>
        {!isOpen && <RegisterModal />}
      </div> */}
      <Tabs> 
      <div label="Ceremony"> 
          <div className="container">
            <iframe className="responsive-iframe" src="https://www.youtube.com/embed/Get4M7Z8oNA"></iframe>
          </div>
       </div> 
      <div label="First Dance"> 
      <div className="container">
            <iframe className="responsive-iframe" src="https://www.youtube.com/embed/yd4A_j1flMo"></iframe>
          </div>
       </div> 
       {/* <div label="Toasts"> 
          <div className="container">
            <iframe className="responsive-iframe" src="https://www.youtube.com/embed/x2uAcgFJuWg"></iframe>
          </div>
        </div> 
       <div label="Dancing"> 
          <div className="container">
            <iframe className="responsive-iframe" src="https://www.youtube.com/embed/yd4A_j1flMo"></iframe>
          </div>
       </div>  */}
     </Tabs> 
    </main>
    
  );
};

export default Videos;
