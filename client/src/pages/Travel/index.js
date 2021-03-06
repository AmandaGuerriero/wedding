import React from 'react';
import './style.css';

const Travel = () => {

  return (
    <main>
      <div className="travel-note">We recommend spending additional time exploring the area if you are able. See the <a href="/adventure" className="hyperlink">Adventure page</a> for ideas on what you can see, do, and eat/drink!</div>
      <div className="travel-section-header">
        <img className="travel-olive-branch" src="https://res.cloudinary.com/amandaeric/image/upload/f_auto/site-assets/olive-branch.png" alt="Olive Branch" />
        <div className="travel-section-title">Planes</div>
      </div>
      <div className="travel-row">
        <div className="travel-col travel-text">
          {/* Slo */}
          <div className="travel-section">
            <img className="travel-bullet-icon" src="https://res.cloudinary.com/amandaeric/image/upload/f_auto/site-assets/bullet-point.png" alt="Star icon as bullet point" />
            <div className="travel-info">
              <div className="travel-airport">San Luis Obispo (SBP)</div>
              <div className="travel-driving-time">~15 minutes to Arroyo Grande</div>
            </div>
          </div>
          {/* Santa Barbara */}
          <div className="travel-section">
            <img className="travel-bullet-icon" src="https://res.cloudinary.com/amandaeric/image/upload/f_auto/site-assets/bullet-point.png" alt="Star icon as bullet point" />
            <div className="travel-info">
              <div className="travel-airport">Santa Barbara (SBA)</div>
              <div className="travel-driving-time">~1 hour and 15 minutes to Arroyo Grande</div>
            </div>
          </div>
        {/* LAX */}
        <div className="travel-section">
            <img className="travel-bullet-icon" src="https://res.cloudinary.com/amandaeric/image/upload/f_auto/site-assets/bullet-point.png" alt="Star icon as bullet point" />
            <div className="travel-info">
              <div className="travel-airport">Los Angeles (LAX)</div>
              <div className="travel-driving-time">~3 hours to Arroyo Grande</div>
            </div>
          </div>
        {/* Burbank */}
        <div className="travel-section">
            <img className="travel-bullet-icon" src="https://res.cloudinary.com/amandaeric/image/upload/f_auto/site-assets/bullet-point.png" alt="Star icon as bullet point" />
            <div className="travel-info">
              <div className="travel-airport">Burbank (BUR)</div>
              <div className="travel-driving-time">~3 hours to Arroyo Grande</div>
            </div>
          </div>
        {/* San Jose */}
        <div className="travel-section">
            <img className="travel-bullet-icon" src="https://res.cloudinary.com/amandaeric/image/upload/f_auto/site-assets/bullet-point.png" alt="Star icon as bullet point" />
            <div className="travel-info">
              <div className="travel-airport">San Jose (SJC)</div>
              <div className="travel-driving-time">~3 hours and 15 minutes to Arroyo Grande</div>
            </div>
          </div>
        {/* Burbank */}
        <div className="travel-section">
            <img className="travel-bullet-icon" src="https://res.cloudinary.com/amandaeric/image/upload/f_auto/site-assets/bullet-point.png" alt="Star icon as bullet point" />
            <div className="travel-info">
              <div className="travel-airport">Monterey (MRY)</div>
              <div className="travel-driving-time">~4 hours to Arroyo Grande via Big Sur/Highway 1</div>
            </div>
          </div>
          <div className="travel-map-mobile"><a href="https://www.google.com/maps/d/viewer?mid=13KuUCKDzRegHkicMqn5wTJIj_JNX_3U-&ll=34.59210315853366%2C-119.52527169999999&z=9">View Airports on a map</a></div>
        </div>
        <div className="travel-col travel-iframe-container">
          <iframe className="travel-responsive-iframe" title="airport-map" src="https://www.google.com/maps/d/embed?mid=13KuUCKDzRegHkicMqn5wTJIj_JNX_3U-"></iframe>
        </div>
      </div>
      <div className="travel-section-header">
        <img className="travel-olive-branch" src="https://res.cloudinary.com/amandaeric/image/upload/f_auto/site-assets/olive-branch.png" alt="Olive Branch" />
        <div className="travel-section-title">Trains</div>
      </div>
      <div className="travel-row">
        <div className="travel-trains-autos">
          {/* Trains */}
          <div className="travel-section">
            <div className="travel-train-header">
              <img className="travel-bullet-icon" src="https://res.cloudinary.com/amandaeric/image/upload/f_auto/site-assets/bullet-point.png" alt="Star icon as bullet point" />
              <div className="travel-station">San Luis Obispo Amtrack Station</div>
            </div>
            <div className="travel-trains-autos-info">
              <div className="travel-trains-autos-notes">If a scenic train ride is what you seek, you can board the Pacific Surfliner from Downtown LA, Burbank, or Santa Barbara up to SLO. This will add cost and time to your journey, but offers delightful views of the coast.</div>
            </div>
          </div>
        </div>
        {/* <div className="travel-col iframe-container"></div> */}
        </div>
        <div className="travel-section-header">
          <img className="travel-olive-branch" src="https://res.cloudinary.com/amandaeric/image/upload/f_auto/site-assets/olive-branch.png" alt="Olive Branch" />
          <div className="travel-section-title">Automobiles</div>
        <div className="travel-row ">
        <div className="travel-trains-autos">
        
          {/* Rental Cars */}
          <div className="travel-section">
            <img className="travel-bullet-icon" src="https://res.cloudinary.com/amandaeric/image/upload/f_auto/site-assets/bullet-point.png" alt="Star icon as bullet point" />
            <div className="travel-car">Rental Cars</div>
            <div className="travel-trains-autos-info">
              <div className="travel-trains-autos-notes">We recommend renting a car for the weekend as public transportation in California leaves a bit to be desired (still waiting on that high speed rail....) and while there are many places to explore within 50 miles of Arroyo Grande, everything is still very spread out.<br /><br /></div>
              <div className="travel-trains-autos-notes">If you are traveling from Los Angeles, beware of the vaunted LA traffic as it can add considerable time to your drive especially around the 101/405 interchange, Ventura, and Santa Barbara area. Also, your GPS may try to take you on the 154 after Santa Barbara, which is definitely the more scenic (also more treacherous) route, however it does not usually save time over just staying on the 101.</div>
            </div>
          </div>
           {/* Rideshare */}
           <div className="travel-section">
            <img className="travel-bullet-icon" src="https://res.cloudinary.com/amandaeric/image/upload/f_auto/site-assets/bullet-point.png" alt="Star icon as bullet point" />
            <div className="travel-car">Rideshare</div>
            <div className="travel-trains-autos-info">
              <div className="travel-trains-autos-notes">Uber and Lyft are readily available in Pismo Beach, San Luis Obisbo, and Arroyo Grande. However, if you are staying off the beaten trail, it may take longer to get one.</div>
            </div>
          </div>
        </div>
        {/* <div className="travel-col iframe-container"></div> */}
        </div>
      </div>
    </main>
  );
};

export default Travel;
