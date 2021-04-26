import React from 'react';
import './style.css';
import Accordion  from '../../components/Accordion/index';
import AccordionItem  from '../../components/AccordionItem/index';

const Lodging = () => {
  return (
    <main>
      <div className="lodging-note">We recommend booking your accomodations sometime this year to ensure the best price and selection. Hotels tend to bea little more expensive so if you are traveling with other friends/family we encourage you to look at Airbnb/VRBO houses.</div>
      <div className="lodging-section-header">
        <img className="lodging-olive-branch" src="https://res.cloudinary.com/amandaeric/image/upload/f_auto/site-assets/olive-branch.png" alt="Olive Branch Image" />
        <div className="lodging-section-title">Hotels</div>
      </div>
      <div className="lodging-row">
        <div className="lodging-col lodging-text">
          {/* Arroyo Grande */}
          <div className="lodging-section">
            <img className="lodging-bullet-icon" src="https://res.cloudinary.com/amandaeric/image/upload/f_auto/site-assets/bullet-point.png" alt="Star icon as bullet point" />
            <div className="lodging-town">ARROYO GRANDE</div>
            <div className="lodging-info">
              <div className="lodging-shuttle-lot">1 minute from shuttle lot</div>
              <div className="lodging-blurb">A tiny, quaint downtown area with a couple of bars and restaurants including Mason Bar where we will be holding an after party for those who wishto attend. Is a little more “townie” than touristy.</div>
              {/* <Accordion defaultIndex="1" onItemClick={console.log}>
                <AccordionItem label="A" index="1">
                  Lorem ipsum
                </AccordionItem>
                <AccordionItem label="B" index="2">
                  Dolor sit amet
                </AccordionItem>
              </Accordion> */}
              <div className="accordion">&nbsp;<i className="fa fa-caret-right"></i>&nbsp;RECOMMENDATIONS</div>
            </div>
          </div>
         {/* Pismo Beach */}
         <div className="lodging-section">
            <img className="lodging-bullet-icon" src="https://res.cloudinary.com/amandaeric/image/upload/f_auto/site-assets/bullet-point.png" alt="Star icon as bullet point" />
            <div className="lodging-town">PISMO BEACH</div>
            <div className="lodging-info">
              <div className="lodging-shuttle-lot">10 minutes from shuttle lot</div>
              <div className="lodging-blurb">A part swanky, part grungy/touristy beach town atop cliffs that overlook the ocean. There is a pier and a decent amount of dining options that attract a large variety of guests. </div>
              <div className="accordion">&nbsp;<i className="fa fa-caret-right"></i>&nbsp;RECOMMENDATIONS</div>
              <div class="panel">
                <p>Lorem ipsum...</p>
              </div>
            </div>
          </div>
        {/* Avila Beach */}
        <div className="lodging-section">
            <img className="lodging-bullet-icon" src="https://res.cloudinary.com/amandaeric/image/upload/f_auto/site-assets/bullet-point.png" alt="Star icon as bullet point" />
            <div className="lodging-town">AVILA BEACH</div>
            <div className="lodging-info">
              <div className="lodging-shuttle-lot">10 minutes from shuttle lot</div>
              <div className="lodging-blurb">Very small beach town in a little cove that is a little quieter than Pismo in terms of bars and restaurants but it is right on the ocean so it draws a decent daytime beach crowd.</div>
              <div className="accordion">&nbsp;<i className="fa fa-caret-right"></i>&nbsp;RECOMMENDATIONS</div>
            </div>
          </div>
        {/* San Luis Obispo */}
        <div className="lodging-section">
            <img className="lodging-bullet-icon" src="https://res.cloudinary.com/amandaeric/image/upload/f_auto/site-assets/bullet-point.png" alt="Star icon as bullet point" />
            <div className="lodging-town">SAN LUIS OBISPO</div>
            <div className="lodging-info">
              <div className="lodging-shuttle-lot">20 minutes from shuttle lot</div>
              <div className="lodging-blurb">Larger college town with a delightful riverwalk running through town. It is less touristy than the beach towns and offers the widest array of dining options. (should be free off all the college hooligans in July)</div>
              <div className="accordion">&nbsp;<i className="fa fa-caret-right"></i>&nbsp;RECOMMENDATIONS</div>
            </div>
          </div>
          </div>
        <div className="lodging-col lodging-iframe-container">
          <iframe className="lodging-responsive-iframe" src="https://www.google.com/maps/d/embed?mid=1z5UcYpc_Be-fVbqVHDH7CmKRF7PVyicV&hl=en"></iframe>
        </div>
      </div>
      <div className="lodging-section-header">
        <img className="lodging-olive-branch" src="https://res.cloudinary.com/amandaeric/image/upload/f_auto/site-assets/olive-branch.png" alt="Olive Branch Image" />
        <div className="lodging-section-title">Air Bnbs</div>
      </div>
      <div className="lodging-row">
        <div className="lodging-options">
          {/* AirBnbs */}
          <div className="lodging-section-bnb">
            <img className="lodging-bullet-icon" src="https://res.cloudinary.com/amandaeric/image/upload/f_auto/site-assets/bullet-point.png" alt="Star icon as bullet point" />
            <div className="lodging-paragraph-1">There is a pretty wide array of Airbnb selections in the area and we’ve found that they tend to be more affordable options than hotels especially if you are sharing it friends/family. We put together a list on Airbnb and VRBO of some of our recommendations.</div>
          </div>
          <div className="lodging-info-bnb">
              <div className="lodging-links">
                <div className="lodging-link"><a href="https://www.airbnb.com/wishlists/899337396?s=67&unique_share_id=53508b47-2ab9-463d-a8d0-d8d770c03425">AIRBNB LIST</a></div>
                <div className="lodging-link"><a href="https://www.vrbo.com/tripboard/i/0b3d7027-b7ac-48dd-be2d-6c1e23748718?client=web&oc=flMXw9RpFzWkSnN46s6g3">VRBO LIST</a></div>
              </div>
              <div className="lodging-paragraph">**Note that some Airbnbs haven’t opened up their availability for next summer yet so if you don’t see anywhere you are ready to commit to today, there might be more might open up later in the year.</div>
            </div>
        </div>
        </div>
    </main>
  );
};

export default Lodging;
