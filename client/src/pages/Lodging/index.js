import React from 'react';
import './style.css';



const Lodging = () => {
  var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

  return (
    <main>
      <div className="note">We recommend booking your accomodations sometime this year to ensure the best price and selection. Hotels tend to bea little more expensive so if you are traveling with other friends/family we encourage you to look at Airbnb/VRBO houses.</div>
      <div className="section-header">
        <img className="olive-branch" src="https://res.cloudinary.com/amandaeric/image/upload/f_auto/site-assets/olive-branch.png" alt="Olive Branch Image" />
        <div className="section-title">Hotels</div>
      </div>
      <div className="travel-row">
        <div className="travel-col text">
          {/* Arroyo Grande */}
          <div className="travel-section">
            <img className="bullet-icon" src="https://res.cloudinary.com/amandaeric/image/upload/f_auto/site-assets/bullet-point.png" alt="Star icon as bullet point" />
            <div className="town">Arroyo Grande</div>
            <div className="info">
              <div className="shuttle-lot">1 minute from shuttle lot</div>
              <div className="blurb">A tiny, quaint downtown area with a couple of bars and restaurants including Mason Bar where wewill be holding an after party for those who wishto attend. Is a little more “townie” than touristy.</div>
              <div className="accordion">&nbsp;<i className="fa fa-caret-right"></i>&nbsp;RECOMMENDATIONS</div>
            </div>
          </div>
         {/* Pismo Beach */}
         <div className="travel-section">
            <img className="bullet-icon" src="https://res.cloudinary.com/amandaeric/image/upload/f_auto/site-assets/bullet-point.png" alt="Star icon as bullet point" />
            <div className="town">Pismo Beach</div>
            <div className="info">
              <div className="shuttle-lot">10 minutes from shuttle lot</div>
              <div className="blurb">A part swanky, part grungy/touristy beach town atop cliffs that overlook the ocean. There is a pier and a decent amount of dining options that attract a large variety of guests. </div>
              <div className="accordion">&nbsp;<i className="fa fa-caret-right"></i>&nbsp;RECOMMENDATIONS</div>
              <div className="panel">
                <p>Lorem ipsum...</p>
              </div>  
            </div>
          </div>
        {/* Avila Beach */}
        <div className="travel-section">
            <img className="bullet-icon" src="https://res.cloudinary.com/amandaeric/image/upload/f_auto/site-assets/bullet-point.png" alt="Star icon as bullet point" />
            <div className="town">Avila Beach</div>
            <div className="info">
              <div className="shuttle-lot">10 minutes from shuttle lot</div>
              <div className="blurb">Very small beach town in a little cove that is a little quieter than Pismo in terms of bars and restaurants but it is right on the ocean so it draws a decent daytime beach crowd.</div>
              <div className="accordion">&nbsp;<i className="fa fa-caret-right"></i>&nbsp;RECOMMENDATIONS</div>
            </div>
          </div>
        {/* San Luis Obispo */}
        <div className="travel-section">
            <img className="bullet-icon" src="https://res.cloudinary.com/amandaeric/image/upload/f_auto/site-assets/bullet-point.png" alt="Star icon as bullet point" />
            <div className="town">San Luis Obispo</div>
            <div className="info">
              <div className="shuttle-lot">20 minutes from shuttle lot</div>
              <div className="blurb">Larger college town with a delightful riverwalk running through town. It is less touristy than the beach towns and offers the widest array of dining options. (should be free off all the college hooligans in July)</div>
              <div className="accordion">&nbsp;<i className="fa fa-caret-right"></i>&nbsp;RECOMMENDATIONS</div>
            </div>
          </div>
          </div>
        <div className="travel-col iframe-container">
          <iframe class="responsive-iframe" src="https://www.google.com/maps/d/embed?mid=1z5UcYpc_Be-fVbqVHDH7CmKRF7PVyicV&hl=en"></iframe>
        </div>
      </div>
      <div className="section-header">
        <img className="olive-branch" src="https://res.cloudinary.com/amandaeric/image/upload/f_auto/site-assets/olive-branch.png" alt="Olive Branch Image" />
        <div className="section-title">Trains</div>
      </div>
      <div className="travel-row">
        <div className="trains-autos">
          {/* Trains */}
          <div className="travel-section">
            {/* <img className="bullet-icon" src="https://res.cloudinary.com/amandaeric/image/upload/f_auto/site-assets/bullet-point.png" alt="Star icon as bullet point" /> */}
            <div className="info">
              <div className="airport">San Luis Obispo Amtrack Station</div>
              <div className="driving-time">If a scenic train ride is what you seek, you can board the Pacific Surfliner from Downtown LA, Burbank, or Santa Barbara up to SLO. This will add cost and time to your journey, but offers delightful views of the coast.</div>
            </div>
          </div>
        </div>
        {/* <div className="travel-col iframe-container"></div> */}
        </div>
        <div className="section-header">
          <img className="olive-branch" src="https://res.cloudinary.com/amandaeric/image/upload/f_auto/site-assets/olive-branch.png" alt="Olive Branch Image" />
          <div className="section-title">Automobiles</div>
        <div className="travel-row ">
        <div className="trains-autos">
        
          {/* Rental Cars */}
          <div className="travel-section">
            {/* <img className="bullet-icon" src="https://res.cloudinary.com/amandaeric/image/upload/f_auto/site-assets/bullet-point.png" alt="Star icon as bullet point" /> */}
            <div className="info">
              <div className="airport">Rental Cars</div>
              <div className="driving-time">We recommend renting a car for the weekend as public transportation in California leaves a bit to be desired (still waiting on that high speed rail....) and while there are many places to explore within 50 miles of Arroyo Grande, everything is still very spread out.</div>
              <div className="driving-time">If you are traveling from Los Angeles, beware of the vaunted LA traffic as it can add considerable time to your drive especially around the 101/405 interchange, Ventura, and Santa Barbara area. Also, your GPS may try to take you on the 154 after Santa Barbara which definitely the scenic route but does not usually save time over staying on the 101.</div>
            </div>
          </div>
           {/* Rideshare */}
           <div className="travel-section">
            {/* <img className="bullet-icon" src="https://res.cloudinary.com/amandaeric/image/upload/f_auto/site-assets/bullet-point.png" alt="Star icon as bullet point" /> */}
            <div className="info">
              <div className="airport">Rideshare</div>
              <div className="driving-time">Uber and Lyft are readily available in Pismo Beach, San Luis Obisbo, and Arroyo Grande however if you are staying off the beaten trail, it may take longer than usual to get one.</div>
            </div>
          </div>
        </div>
        {/* <div className="travel-col iframe-container"></div> */}
        </div>
      </div>
    </main>
  );
};

export default Lodging;
