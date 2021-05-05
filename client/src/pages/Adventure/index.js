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
        </div>
      </div>
      <div className="adventure-row">
        <div className="adventure-col adventure-text">
          {/* Arroyo Grande */}
          <div className="adventure-section">
            <img className="adventure-bullet-icon" src="https://res.cloudinary.com/amandaeric/image/upload/f_auto/site-assets/bullet-point.png" alt="Star icon as bullet point" />
            <div className="adventure-town">ARROYO GRANDE</div>
            <div className="adventure-info">
              <div className="adventure-shuttle-lot">1 minute from shuttle lot</div>
              <div className="adventure-blurb">A tiny downtown with a couple of bars and restaurants including Mason Bar where we will be holding an after party for those who wish to attend. It is a little more “townie” than touristy.</div>
              <Collapsible trigger="RECOMMENDATIONS" triggerWhenOpen="RECOMMENDATIONS" className="accordion fa fa-caret-right">
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
         {/* Pismo Beach */}
         <div className="adventure-section">
            <img className="adventure-bullet-icon" src="https://res.cloudinary.com/amandaeric/image/upload/f_auto/site-assets/bullet-point.png" alt="Star icon as bullet point" />
            <div className="adventure-town">PISMO BEACH</div>
            <div className="adventure-info">
              <div className="adventure-shuttle-lot">10 minutes from shuttle lot</div>
              <div className="adventure-blurb">A combination of swanky, grungy, and touristy, Pismo is located atop cliffs that overlook the ocean. There is a pier along with numerous dining options and while it certainly attracts a large variety of guests, the view is pretty spectacular.</div>
              <Collapsible trigger="RECOMMENDATIONS" triggerWhenOpen="RECOMMENDATIONS" className="accordion fa fa-caret-right">
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
            </div>
          </div>
        {/* Avila Beach */}
        <div className="adventure-section">
            <img className="adventure-bullet-icon" src="https://res.cloudinary.com/amandaeric/image/upload/f_auto/site-assets/bullet-point.png" alt="Star icon as bullet point" />
            <div className="adventure-town">AVILA BEACH</div>
            <div className="adventure-info">
              <div className="adventure-shuttle-lot">20 minutes from shuttle lot</div>
              <div className="adventure-blurb">A small beach town located in a little cove that is quieter and more upscale than Pismo in terms of bars and restaurants, but it is still right on the ocean, so it draws a decent daytime beach crowd.</div>
              <Collapsible trigger="RECOMMENDATIONS" triggerWhenOpen="RECOMMENDATIONS" className="accordion fa fa-caret-right">
              <div className="adventure-options-links">
              <ul className="hotel-entry">
                  <div className="hotel-header">
                  <div>•</div>
                  <a href="https://www.avilavillageinn.com/" target="_blank" className="hotel-name-link">AVILA VILLAGE INN</a>
                    <div className="hotel-rating">9.0 ★</div> 
                    <div className="hotel-price">$400-500/night</div>
                    </div>
                    <div className="hotel-info">We stayed here once and thought it was really lovely. It’s not walking distance from anything, but it is still pretty centrally located overall.</div>
                </ul>
                <ul className="hotel-entry">
                  <div className="hotel-header">
                  <div>•</div>
                  <a href="https://www.avilalafonda.com/" target="_blank" className="hotel-name-link">AVILA LA FONDA</a>
                    <div className="hotel-rating">9.6 ★</div> 
                    <div className="hotel-price">$450+/night</div>
                    </div>
                    <div className="hotel-info">Boutique hotel located right in Avila beach that looks really nice.</div>
                </ul>
                <ul className="hotel-entry">
                  <div className="hotel-header">
                  <div>•</div>
                  <a href="https://www.hotelsavilabeach.com/rooms" target="_blank" className="hotel-name-link">INN AT AVILA</a>
                    <div className="hotel-rating">N/A</div> 
                    <div className="hotel-price">$390-510/night</div>
                    </div>
                    <div className="hotel-info">Boutique hotel located right in Avila beach that looks really nice.</div>
                </ul>
              </div>
              </Collapsible>
            </div>
          </div>
        {/* Santa Maria */}
        <div className="adventure-section">
            <img className="adventure-bullet-icon" src="https://res.cloudinary.com/amandaeric/image/upload/f_auto/site-assets/bullet-point.png" alt="Star icon as bullet point" />
            <div className="adventure-town">SANTA MARIA</div>
            <div className="adventure-info">
              <div className="adventure-shuttle-lot">20 minutes from shuttle lot</div>
              <div className="adventure-blurb">With much more of a suburbia feel, Santa Maria is located more inland than the rest of the options. While it does not boast much to do in the town itself, it does have the cheapest adventure, is close to Orcutt which has some cool bars/restaurants, and is adjacent to the Santa Maria AVA.</div>
              <Collapsible trigger="RECOMMENDATIONS" triggerWhenOpen="RECOMMENDATIONS" className="accordion fa fa-caret-right">
              <div className="adventure-options-links">
              <ul className="hotel-entry">
                  <div className="hotel-header">
                  <div>•</div>
                  <a href="https://www.hilton.com/en/hotels/smxsmhx-hampton-suites-santa-maria/" target="_blank" className="hotel-name-link">HAMPTON INN</a>
                    <div className="hotel-rating">9.2 ★</div> 
                    <div className="hotel-price">$190/night</div>
                    </div>
                    <div className="hotel-info">Economical option right off the 101 in Santa Maria.</div>
                </ul>
                <ul className="hotel-entry">
                  <div className="hotel-header">
                  <div>•</div>
                  <a href="https://www.marriott.com/hotels/travel/smxfi-fairfield-inn-and-suites-santa-maria/" target="_blank" className="hotel-name-link">FAIRFIELD INN</a>
                    <div className="hotel-rating">8.6 ★</div> 
                    <div className="hotel-price">$170/night</div>
                    </div>
                    <div className="hotel-info">Economical option right off the 101 in Santa Maria.</div>
                </ul>
                <ul className="hotel-entry">
                  <div className="hotel-header">
                  <div>•</div>
                  <a href="https://www.santamariainn.com/" target="_blank" className="hotel-name-link">HISTORIC SANTA MARIA</a>
                    <div className="hotel-rating">8.0 ★</div> 
                    <div className="hotel-price">$150/night</div>
                    </div>
                    <div className="hotel-info">This is an old hotel right in ‘downtown’ Santa Maria. We stayed there once and while it was certainly passed its heyday, it was fine.</div>
                </ul>
              </div>
              </Collapsible>
            </div>
          </div>
          {/* San Luis Obispo */}
        <div className="adventure-section">
            <img className="adventure-bullet-icon" src="https://res.cloudinary.com/amandaeric/image/upload/f_auto/site-assets/bullet-point.png" alt="Star icon as bullet point" />
            <div className="adventure-town">SAN LUIS OBISPO</div>
            <div className="adventure-info">
              <div className="adventure-shuttle-lot">20 minutes from shuttle lot</div>
              <div className="adventure-blurb">SLO is a college town with a delightful river walk running through it. While it is less touristy than the beach towns, it offers the widest array of dining options and should be free off all the college hooligans from Cal Poly in July.</div>
              <Collapsible trigger="RECOMMENDATIONS" triggerWhenOpen="RECOMMENDATIONS" className="accordion fa fa-caret-right">
              <div className="adventure-options-links">
              <ul className="hotel-entry">
                  <div className="hotel-header">
                  <div>•</div>
                  <a href="https://www.petitsoleilslo.com/" target="_blank" className="hotel-name-link">PETIT SOLEIL</a>
                    <div className="hotel-rating">N/A</div> 
                    <div className="hotel-price">$260-320/night</div>
                    </div>
                    <div className="hotel-info">European style B&B within easy walking distance of downtown. Looks very quaint but got decent reviews.</div>
                </ul>
              <ul className="hotel-entry">
                  <div className="hotel-header">
                  <div>•</div>
                  <a href="https://www.wyndhamhotels.com/laquinta/san-luis-obispo-california/la-quinta-inn-and-suites-san-luis-obispo-downtown/overview" target="_blank" className="hotel-name-link">LA QUINTA</a>
                    <div className="hotel-rating">9.0 ★</div> 
                    <div className="hotel-price">$270/night</div>
                    </div>
                    <div className="hotel-info">We stayed here a couple years back because we saw it had been newly renovated and we thought was pretty nice for a La Quinta. While it is a mile walk from downtown, it is located right next to 1865 Craft House which has yummy food and drink. We are trying to see if they have any special wedding rates so if you are thinking you want to stay here, check back for more details.</div>
                </ul>
                <ul className="hotel-entry">
                  <div className="hotel-header">
                  <div>•</div>
                  <a href="https://www.thebutlerhotel.com/" target="_blank" className="hotel-name-link">BUTLER HOTEL</a>
                    <div className="hotel-rating">N/A</div> 
                    <div className="hotel-price">$279/night</div>
                    </div>
                    <div className="hotel-info">This is a very small, but intriguingly trendy option in SLO that we stumbled across (it’s not on hotels.com). While it's not in the main downtown area, it is still easy walking distance most of the bars and restaurants.</div>
                </ul>
                <ul className="hotel-entry">
                  <div className="hotel-header">
                  <div>•</div>
                  <a href="https://www.thekinneyslo.com/" target="_blank" className="hotel-name-link">THE KINNEY</a>
                    <div className="hotel-rating">8.8 ★</div> 
                    <div className="hotel-price">$280/night</div>
                    </div>
                    <div className="hotel-info">Another economical, yet trendy hotel a mile down the street from downtown SLO.</div>
                </ul>
                <ul className="hotel-entry">
                  <div className="hotel-header">
                    <div>•</div>
                    <a href="https://www.madonnainn.com/" target="_blank" className="hotel-name-link">MADONNA INN</a>
                    <div className="hotel-rating">9.0 ★</div> 
                    <div className="hotel-price">$300-450/night</div>
                  </div>
                    <div className="hotel-info">If you are looking for a grand adventure with your adventure, then look no further than the Madonna Inn. The Madonna will be one of the more unique stays of your entire life as every room has an outrageous theme and the bar/dining room are decorated in a way that’s best to left to experience on your own. From personal experience, we would recommend the Rock Bottom, Irish Hills, or Gypsy Rock rooms however the Cabin Still, Caveman, Yahoo, Swiss Belle, or Yosemite Rock have always piqued our interest. We also highly recommend their spa.</div>
                </ul>
                <ul className="hotel-entry">
                  <div className="hotel-header">
                  <div>•</div>
                  <a href="https://www.marriott.com/hotels/travel/sbpcy-courtyard-san-luis-obispo/" target="_blank" className="hotel-name-link">COURTYARD BY MARRIOT</a>
                    <div className="hotel-rating">8.8 ★</div> 
                    <div className="hotel-price">$320/night</div>
                    </div>
                    <div className="hotel-info">If you have Starwood points, this is a Marriott option. It is well outside of downtown SLO and outside of the Taco Temple, it is not walking distance from anything.</div>
                </ul>
                <ul className="hotel-entry">
                  <div className="hotel-header">
                  <div>•</div>
                  <a href="https://www.gardenstreetinn.com/" target="_blank" className="hotel-name-link">GARDEN STREET INN</a>
                    <div className="hotel-rating">9.2 ★</div> 
                    <div className="hotel-price">$350/night</div>
                    </div>
                    <div className="hotel-info">Upscale bed and breakfast located right in downtown SLO.</div>
                </ul>
                <ul className="hotel-entry">
                  <div className="hotel-header">
                  <div>•</div>
                  <a href="https://sanluiscreeklodge.com/" target="_blank" className="hotel-name-link">SAN LUIS CREEK</a>
                    <div className="hotel-rating">9.4 ★</div> 
                    <div className="hotel-price">$380-410/night</div>
                    </div>
                    <div className="hotel-info">Very small boutique hotel right just outside downtown SLO</div>
                </ul>
                <ul className="hotel-entry">
                  <div className="hotel-header">
                  <div>•</div>
                  <a href="https://www.hotelcerro.com/slo-accommodation/" target="_blank" className="hotel-name-link">HOTEL CERO</a>
                    <div className="hotel-rating">9.2 ★</div> 
                    <div className="hotel-price">$430/night</div>
                    </div>
                    <div className="hotel-info">Nice boutique hotel right in downtown SLO</div>
                </ul>
                <ul className="hotel-entry">
                  <div className="hotel-header">
                  <div>•</div>
                  <a href="https://www.slobrewlofts.com/" target="_blank" className="hotel-name-link">SLO BREW LOFTS</a>
                    <div className="hotel-rating">9.2 ★</div> 
                    <div className="hotel-price">$650-850/night - 2br/3br</div>
                    </div>
                    <div className="hotel-info">We have always been curious about these as they look really nice and are located right in the middle of downtown SLO, but we've never had the chance to stay there. They are best suited for a groups that want to stay together and are right above a brewery which is always a plus.</div>
                </ul>
              </div>
              </Collapsible>
            </div>
            <div className="adventure-map-mobile"><a href="https://www.google.com/maps/d/viewer?mid=1z5UcYpc_Be-fVbqVHDH7CmKRF7PVyicV&hl=en&ll=35.12503049999998%2C-120.57630149999999&z=11">View Hotels on a map</a></div>
          </div>
          </div>
        <div className="adventure-col adventure-iframe-container">
          <iframe className="adventure-responsive-iframe" src="https://www.google.com/maps/d/embed?mid=1z5UcYpc_Be-fVbqVHDH7CmKRF7PVyicV&hl=en"></iframe>
        </div>
      </div>
      <div className="adventure-section-header">
        <img className="adventure-olive-branch" src="https://res.cloudinary.com/amandaeric/image/upload/f_auto/site-assets/olive-branch.png" alt="Olive Branch Image" />
        <div className="adventure-section-title">Air Bnbs</div>
      </div>
      <div className="adventure-row">
        <div className="adventure-options">
          {/* AirBnbs */}
          <div className="adventure-section-bnb">
            <img className="adventure-bullet-icon" src="https://res.cloudinary.com/amandaeric/image/upload/f_auto/site-assets/bullet-point.png" alt="Star icon as bullet point" />
            <div className="adventure-paragraph-1">There is a pretty wide array of Airbnb selections in the area and we’ve found that they tend to be more affordable options than hotels especially if you are sharing it friends/family. We put together a list on Airbnb and VRBO of some of our recommendations.</div>
          </div>
          <div className="adventure-info-bnb">
              <div className="adventure-links">
                <div className="adventure-link"><a href="https://www.airbnb.com/wishlists/899337396?s=67&unique_share_id=53508b47-2ab9-463d-a8d0-d8d770c03425" target="_blank">AIRBNB LIST</a></div>
                <div className="adventure-link"><a href="https://www.vrbo.com/tripboard/i/0b3d7027-b7ac-48dd-be2d-6c1e23748718?client=web&oc=flMXw9RpFzWkSnN46s6g3" target="_blank">VRBO LIST</a></div>
              </div>
              <div className="adventure-paragraph">**Note that some Airbnbs haven’t opened up their availability for next summer yet so if you don’t see anywhere you are ready to commit to today, there might be more might open up later in the year.</div>
            </div>
        </div>
        </div>
    </main>
  );
};

export default Adventure;
