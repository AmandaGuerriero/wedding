import React from 'react';
import './style.css';

const Details = () => {

  return (
    <main>
      {/* BTD */}
      <div className="details-section-header">
        <img className="details-olive-branch" src="https://res.cloudinary.com/amandaeric/image/upload/f_auto/site-assets/olive-branch.png" alt="Olive Branch" />
        <div className="details-section-title">Welcome Event</div>
        <div className="details-row">
          <div className="details-col details-text">
            <div className="details-section">
              <img className="details-bullet-icon" src="https://res.cloudinary.com/amandaeric/image/upload/f_auto/site-assets/bullet-point.png" alt="Star icon as bullet point" />
              <div className="details-name">TBD</div>
              <div className="details-info">
                <div className="details-address">Near San Luis Obispo</div>
                  <div className="details-date-block">
                    <div className="details-date">FRIDAY, JULY 15TH</div>
                    <div className="details-time">8:00PM</div>
                  </div>
                  <div className="details-details">
                    <div className="details-note1">We will have some bar food available, but we recommend eating dinner beforehand.</div>
                  </div> 
                </div>
              {/* <div className="details-name">BANG THE DRUM BREWERY</div>
              <div className="details-info">
                <div className="details-address">1150 Laurel Ln Suite 130 <br />San Luis Obispo, CA 93401</div>
                  <div className="details-date-block">
                    <div className="details-date">FRIDAY, JULY 15TH</div>
                    <div className="details-time">8:00PM-11:00PM</div>
                  </div>
                  <div className="details-details">
                    <div className="details-note1">Take a left into the industrial park off Laurel Drive (before you reach Camden Lane) and follow the signs for the brewery to the back corner of the park.</div>
                    <div className="details-note2">While we will have some bar food available, we recommend eating dinner beforehand.</div>
                  </div> 
              </div> */}
            </div>
          </div>
          <div className="details-col details-image">
            <img src='https://res.cloudinary.com/amandaeric/image/upload/f_auto/details/BTD.png' alt='Brewery' />
          </div>
        </div>
      </div>
      {/* Casitas */}
      <div className="details-section-header">
        <img className="details-olive-branch" src="https://res.cloudinary.com/amandaeric/image/upload/f_auto/site-assets/olive-branch.png" alt="Olive Branch" />
        <div className="details-section-title">Ceremony + Reception</div>
        <div className="details-row">
          <div className="details-col details-text">
            <div className="details-section">
              <img className="details-bullet-icon" src="https://res.cloudinary.com/amandaeric/image/upload/f_auto/site-assets/bullet-point.png" alt="Star icon as bullet point" />
              <div className="details-name">CASITAS ESTATE</div>
              <div className="details-info">
                  <div className="details-date-block">
                    <div className="details-date">SATURDAY, JULY 16TH</div>
                    <div className="details-time">4:00PM-10:00PM</div>
                  </div>
                  <div className="casitas-disclaimer">DO NOT DRIVE OR UBER TO THE VENUE.  EVERYONE MUST TAKE A SHUTTLE FROM ONE OF THE FOLLOWING LOCATIONS:</div> 
                  <div className="details-shuttle">STAYING IN THE HOTEL BLOCK:</div>
                  <div className="details-shuttle-location">Agrarian Hotel<br />325 E Branch St<br />Arroyo Grande, CA 93420</div>
                  <div className="details-details">
                    <div className="details-note1">Shuttles start running from the hotel around 2:30PM and then back to the hotel around 8:30PM. Please do not take this shuttle if you are not staying at the Agrarian.</div>
                  </div>
                  <div className="details-shuttle">ALL OTHER GUESTS:</div>
                  <div className="details-shuttle-location">Strother Park<br />1150 Huasna Rd<br />Arroyo Grande, CA 93420</div>
                  <div className="details-details">
                    <div className="details-note1">Shuttles start running from the park around 2:30PM and then back to the park around 8:30PM. If you decide to go to straight to the afterparty following the reception and Uber back to your hotel/Airbnb at the end of the night, you are able to leave your car in the park overnight.</div>
                  </div>
              </div>
            </div>
          </div>
          <div className="details-col details-image">
            <img src='https://res.cloudinary.com/amandaeric/image/upload/f_auto/details/CASITAS.png' alt='Brewery' />
          </div>
        </div>
      </div>
      {/* Mason Bar */}
      <div className="details-section-header">
        <img className="details-olive-branch" src="https://res.cloudinary.com/amandaeric/image/upload/f_auto/site-assets/olive-branch.png" alt="Olive Branch" />
        <div className="details-section-title">After Party</div>
        <div className="details-row">
          <div className="details-col details-text">
            <div className="details-section">
              <img className="details-bullet-icon" src="https://res.cloudinary.com/amandaeric/image/upload/f_auto/site-assets/bullet-point.png" alt="Star icon as bullet point" />
              <div className="details-name">MASON BAR</div>
              <div className="details-info">
                <div className="details-address">307 E Branch St<br />Arroyo Grande, CA 93420</div>
                  <div className="details-date-block">
                    <div className="details-date">SATURDAY, JULY 16TH</div>
                    <div className="details-time">10:00PM - CLOSE</div>
                  </div>
                  <div className="details-details">
                    <div className="details-note1">Mason Bar is located directly next to the Agrarian Hotel. Following the ceremony, shuttles will be running alternately to the Agrarian and Strother Park. We will have some bar fare available for those who may have worked up an appetite again on the dance floor.</div>
                  </div>
              </div>
            </div>
          </div>
          <div className="details-col details-image">
            <img src='https://res.cloudinary.com/amandaeric/image/upload/f_auto/details/MASON-JAR.png' alt='Brewery' />
          </div>
        </div>
      </div>
      {/* Breakfast */}
      <div className="details-section-header">
        <img className="details-olive-branch" src="https://res.cloudinary.com/amandaeric/image/upload/f_auto/site-assets/olive-branch.png" alt="Olive Branch" />
        <div className="details-section-title">Breakfast</div>
        <div className="details-row">
          <div className="details-col details-text">
            <div className="details-section">
              <img className="details-bullet-icon" src="https://res.cloudinary.com/amandaeric/image/upload/f_auto/site-assets/bullet-point.png" alt="Star icon as bullet point" />
              <div className="details-name">AGRARIAN HOTEL</div>
              <div className="details-info">
                <div className="details-address">325 E Branch St<br />Arroyo Grande, CA 93420</div>
                  <div className="details-date-block">
                    <div className="details-date">SUNDAY, JULY 17TH</div>
                    <div className="details-time">10:00AM</div>
                  </div>
                  <div className="details-details">
                    <div className="details-note1">Local cinnamon rolls, fruit, yogurt, juice, and coffee/tea will be served in the conference room of the Agrarian Hotel for all who would like to join.</div>
                  </div>
              </div>
            </div>
          </div>
          <div className="details-col details-image">
            <img src='https://res.cloudinary.com/amandaeric/image/upload/f_auto/details/AGRARIAN.png' alt='Brewery' />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Details;
