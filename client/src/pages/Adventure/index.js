import React from 'react';
import './style.css';
import Collapsible from 'react-collapsible';

const Adventure = () => {
  return (
    <main>
      <div className="adventure-note">We know this is a bit of a destination wedding for most of our guests, but we really wanted to be able to share a region we love so much with everyone else. If time allows, we encourage you to take some time to explore the region that has brought us so much joy over the numerous trips we’ve taken up there.</div>
      <div className="adventure-note">Below is an extensive list of the things to see, do, eat, and drink that we hope will be helpful for you in planning your own Central Coast adventure!</div>
      <div className="adventure-section-header">
        <img className="adventure-olive-branch" src="https://res.cloudinary.com/amandaeric/image/upload/f_auto/site-assets/olive-branch.png" alt="Olive Branch Image" />
        <div className="adventure-section-title">Big Sur</div>
      </div>
      <div>
        <div className="adventure-picture-row">
          <img className="adventure-image" src="https://res.cloudinary.com/amandaeric/image/upload/f_auto/engagement/IMG_9893-h.jpg" alt="Big Sur" />
          <img className="adventure-image" src="https://res.cloudinary.com/amandaeric/image/upload/f_auto/engagement/IMG_9893-h.jpg" alt="Big Sur" />
          <img className="adventure-image" src="https://res.cloudinary.com/amandaeric/image/upload/f_auto/engagement/IMG_9893-h.jpg" alt="Big Sur" />
          <img className="adventure-image" src="https://res.cloudinary.com/amandaeric/image/upload/f_auto/engagement/IMG_9893-h.jpg" alt="Big Sur" />
        </div>
      </div>
      <div className="adventure-row">
        <div className="adventure-col adventure-text">
          {/* Big Sur */}
          <div className="adventure-section">
            <img className="adventure-bullet-icon" src="https://res.cloudinary.com/amandaeric/image/upload/f_auto/site-assets/bullet-point.png" alt="Star icon as bullet point" />
            <div className="adventure-summary">SUMMARY TITLE HERE</div>
            <div className="adventure-info">
              <div className="adventure-description">The quick brown fox jumps over the lazy dog and then the sleepy cat wakes up and goes over to the window to look at the cute otter twiisting around in the beautiful bay.</div>
              <Collapsible trigger="SEE" triggerWhenOpen="SEE" className="accordion fa fa-caret-right">
              <div className="adventure-options-links">
                <ul className="hotel-entry">
                  <div className="hotel-header">
                  <div>•</div>
                  <a href="https://www.agrarianhotel.com/" target="_blank" className="hotel-name-link">AGRARIAN HOTEL</a>
                    <div className="hotel-rating">9.4 ★</div> 
                    <div className="hotel-price">$280-$320/night</div>
                    </div>
                    <div className="hotel-info">This newly renovated hotel is located right in Arroyo Grande and directly next-door to the Mason Bar. We stayed here in May and while it doesn’t come with many frills or views, it is nice, clean, and conveniently located. We have a block of hotel rooms reserved here so if you are interested into booking one of them, you can call the hotel directly and let them know you staying there for our wedding.</div>
                </ul>
              </div>
              </Collapsible>
              <Collapsible trigger="DO" triggerWhenOpen="DO" className="accordion fa fa-caret-right">
              <div className="adventure-options-links">
                <ul className="hotel-entry">
                  <div className="hotel-header">
                  <div>•</div>
                  <a href="https://www.oxfordsuitespismobeach.com/" target="_blank" className="hotel-name-link">OXFORD SUITES</a>
                    <div className="hotel-rating">8.6 ★</div> 
                    <div className="hotel-price">$250/night</div>
                    </div>
                    <div className="hotel-info">A more moderately priced hotel option for Pismo, but it is not on the water.  [MIGHT HAVE DISCOUNT]</div>
                </ul>
                <ul className="hotel-entry">
                  <div className="hotel-header">
                  <div>•</div>
                  <a href="https://www.shorecliff.com/" target="_blank" className="hotel-name-link">SHORE CLIFF</a>
                    <div className="hotel-rating">9.2 ★</div> 
                    <div className="hotel-price">$360-415/night</div>
                    </div>
                    <div className="hotel-info">One of the more reasonably priced hotels on the cliffs with the drawback being that is about a mile north of downtown Pismo. We haven’t stayed here before, but it has good reviews and offers special rates for guests at weddings. Call directly to book with the discounted wedding rate.</div>
                </ul>
                <ul className="hotel-entry">
                  <div className="hotel-header">
                  <div>•</div>
                  <a href="https://www.seacrestpismo.com/" target="_blank" className="hotel-name-link">SEACREST</a>
                    <div className="hotel-rating">9.2 ★</div> 
                    <div className="hotel-price">$400-550/night</div>
                    </div>
                    <div className="hotel-info">While we can’t vouch for all the rooms, we stayed here once in a room with a sweeping ocean view, balcony, and giant jacuzzi in the room and we loved it. [Call directly to book with the discounted wedding rate.]</div>
                </ul>
                <ul className="hotel-entry">
                  <div className="hotel-header">
                  <div>•</div>
                  <a href="https://www.pismolighthousesuites.com/" target="_blank" className="hotel-name-link">PISMO LIGHTHOUSE SUITES</a>
                    <div className="hotel-rating">9.4 ★</div> 
                    <div className="hotel-price">$400-550/night</div>
                    </div>
                    <div className="hotel-info">Another very good option if you want to stay right on the water. They don’t do wedding blocks, but they do have a special wedding rate so call directly to book with that discount.</div>
                </ul>
                <ul className="hotel-entry">
                  <div className="hotel-header">
                  <div>•</div>
                  <a href="https://www.theinnatthepier.com/" target="_blank" className="hotel-name-link">INN AT THE PIER</a>
                    <div className="hotel-rating">8.6 ★</div> 
                    <div className="hotel-price">$500-700/night</div>
                    </div>
                    <div className="hotel-info">Upscale hotel right on the pier in Pismo Beach. </div>
                </ul>
                <ul className="hotel-entry">
                  <div className="hotel-header">
                  <div>•</div>
                  <a href="https://www.vesperapismobeach.com/" target="_blank" className="hotel-name-link">VESPERA BY MARRIOT</a>
                    <div className="hotel-rating">8.6 ★</div> 
                    <div className="hotel-price">$600-800/night</div>
                    </div>
                    <div className="hotel-info">Very new and swanky hotel located on the water in downtown Pismo for those who have a lot of Marriot points.</div>
                </ul>
              </div>
              </Collapsible>
              <Collapsible trigger="EAT" triggerWhenOpen="EAT" className="accordion fa fa-caret-right">
              <div className="adventure-options-links">
                <ul className="hotel-entry">
                  <div className="hotel-header">
                  <div>•</div>
                  <a href="https://www.agrarianhotel.com/" target="_blank" className="hotel-name-link">AGRARIAN HOTEL</a>
                    <div className="hotel-rating">9.4 ★</div> 
                    <div className="hotel-price">$280-$320/night</div>
                    </div>
                    <div className="hotel-info">This newly renovated hotel is located right in Arroyo Grande and directly next-door to the Mason Bar. We stayed here in May and while it doesn’t come with many frills or views, it is nice, clean, and conveniently located. We have a block of hotel rooms reserved here so if you are interested into booking one of them, you can call the hotel directly and let them know you staying there for our wedding.</div>
                </ul>
              </div>
              </Collapsible>
              <Collapsible trigger="DRINK" triggerWhenOpen="DRINK" className="accordion fa fa-caret-right">
              <div className="adventure-options-links">
                <ul className="hotel-entry">
                  <div className="hotel-header">
                  <div>•</div>
                  <a href="https://www.agrarianhotel.com/" target="_blank" className="hotel-name-link">AGRARIAN HOTEL</a>
                    <div className="hotel-rating">9.4 ★</div> 
                    <div className="hotel-price">$280-$320/night</div>
                    </div>
                    <div className="hotel-info">This newly renovated hotel is located right in Arroyo Grande and directly next-door to the Mason Bar. We stayed here in May and while it doesn’t come with many frills or views, it is nice, clean, and conveniently located. We have a block of hotel rooms reserved here so if you are interested into booking one of them, you can call the hotel directly and let them know you staying there for our wedding.</div>
                </ul>
              </div>
              </Collapsible>
            </div>
            </div>
          </div>
        <div className="adventure-col adventure-iframe-container">
          <iframe className="adventure-responsive-iframe" src="https://www.google.com/maps/d/embed?mid=1z5UcYpc_Be-fVbqVHDH7CmKRF7PVyicV&hl=en"></iframe>
        </div>
      </div>
    </main>
  );
};

export default Adventure;
