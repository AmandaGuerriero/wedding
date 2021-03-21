import React from 'react';
import EngagementPhotos from "../components/EngagementPhotos";
import DomesticPhotos from "../components/DomesticPhotos";
import { Tabs } from "@feuer/react-tabs";


const Home = () => {

  return (
    <main>
      <Tabs
        activeTab={{
          id: "tab1"
        }}>
        <React.Fragment>
            <Tabs.Tab id="tab1" className="tab-style" title="Engagement Shoot">
              <EngagementPhotos />
            </Tabs.Tab>
            <Tabs.Tab id="tab2" className="tab-style" title="Domestic Photos">
            <DomesticPhotos />
            </Tabs.Tab>
            <Tabs.Tab id="tab3" className="tab-style" title="International Photos">
              <p>This is tab 3</p>
            </Tabs.Tab>
        </React.Fragment>
      </Tabs>
    </main>
  );
};

export default Home;
