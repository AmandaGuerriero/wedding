import React from 'react';
import './style.css';
import Collapsible from 'react-collapsible';

const Adventure = () => {
  return (
    <main>
      <div className="adventure-note">We know this is a bit of a destination wedding for most of our guests, but we really wanted to be able to share a region of California that we love so much with everyone else. If time allows, we encourage you to take some time to explore the region that has brought us so much joy over the numerous trips we’ve taken up there.</div>
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
            <div className="adventure-summary">Monterey, Carmel-by-the-Sea, Pebble Beach, Highway 1</div>
            <div className="adventure-info">
              <div className="adventure-description">The northern region of the Central Coast is one of one most picturesque areas of California, if not the entire US, and if you can spare the time and have not been before, we cannot recommend it enough.</div>
                {/* SEE */}
                <Collapsible trigger="SEE" triggerWhenOpen="SEE" className="accordion fa fa-caret-right">
                <div className="adventure-options-links">
                  <ul className="adventure-entry">
                    <div className="adventure-header">
                      <div>•</div>
                      <div className="adventure-name">17-MILE DRIVE</div>
                    </div>
                      <div className="adventure-detail">Very famous drive around the Pebble Beach peninsula with numerous beautiful ocean views and while it is only, you guessed it, 17 miles, it takes a lot at least an hour and a half to drive. Restless Sea (Mile 4) and Lone Cyprus (Mile 12) are our favorites.</div>
                  </ul>
                  <ul className="adventure-entry">
                    <div className="adventure-header">
                      <div>•</div>
                      <div className="adventure-name">HIGHWAY 1</div>
                    </div>
                      <div className="adventure-detail">Amanda has driven it 6+ times and Eric has driven it once and run it once, and we would do it again tomorrow given the chance. It takes a long time to drive and is almost impossible to turn around on so you’ll want to stop at pretty much every vista point. It is one of the most stunningly beautiful places we’ve ever been and is a bucket-list type item.</div>
                  </ul>
                  <ul className="adventure-entry">
                    <div className="adventure-header">
                      <div>•</div>
                      <div className="adventure-name">ELEPHANT SEALS</div>
                    </div>
                      <div className="adventure-detail">If you’re driving Highway 1, this is a must stop so that you can see the hundreds of elephant seals do their thing.</div>
                  </ul>
                  <ul className="adventure-entry">
                    <div className="adventure-header">
                      <div>•</div>
                      <div className="adventure-name">OTTERS OF MONTEREY BAY</div>
                    </div>
                      <div className="adventure-detail">Who doesn’t want to watch adorable creatures roll around in the water?! You can usually find them between Cannery Row and the wharf.</div>
                  </ul>
                  <ul className="adventure-entry">
                    <div className="adventure-header">
                      <div>•</div>
                      <div className="adventure-name">HEARST CASTLE</div>
                    </div>
                      <div className="adventure-detail">From the guy who inspired Citizen Kane, this estate is full of excess grandeur and while it is certainly beautiful, you many want to research what it is all about before making the journey there. There were many exotic animals imported to live there, however only the zebras survived and can still sometimes be spotted in the hills today.</div>
                  </ul>
                </div>
                </Collapsible>
                {/* DO */}
                <Collapsible trigger="DO" triggerWhenOpen="DO" className="accordion fa fa-caret-right">
                <div className="adventure-options-links">
                  <ul className="adventure-entry">
                    <div className="adventure-header">
                      <div>•</div>
                      <div className="adventure-name">GOLF: PEBBLE BEACH, POPPY HILLS, LINKS AT SPANISH BAY, PACIFIC GROVE GOLF LINKS</div>
                    </div>
                      <div className="adventure-detail">We’ve never tried to golf at any of these famous courses, but they all look beautiful (just very expensive)!</div>
                  </ul>
                  <ul className="adventure-entry">
                    <div className="adventure-header">
                      <div>•</div>
                      <div className="adventure-name">MONTEREY BAY AQUARIUM</div>
                    </div>
                      <div className="adventure-detail">We’ve haven’t been yet but it’s supposed to be one of the better aquariums in the country.</div>
                  </ul>
                  <ul className="adventure-entry">
                    <div className="adventure-header">
                      <div>•</div>
                      <div className="adventure-name">WHALE WATCHING</div>
                    </div>
                      <div className="adventure-detail">Monterey is apparently one of the best places to see whales in the country and the summer months are especially good for blue and humpback whales. Amanda has been in July and saw many whales.</div>
                  </ul>
                </div>
                </Collapsible>
                {/* EAT */}
                <Collapsible trigger="EAT" triggerWhenOpen="EAT" className="accordion fa fa-caret-right">
                <div className="adventure-options-links">
                  <ul className="adventure-entry">
                    <div className="adventure-header">
                      <div>•</div>
                      <div className="adventure-name">PANGEA (CARMEL)</div>
                    </div>
                      <div className="adventure-detail">Very yummy Asian-fusion place we went to a couple years ago and absolutely loved.</div>
                  </ul>
                  <ul className="adventure-entry">
                    <div className="adventure-header">
                      <div>•</div>
                      <div className="adventure-name">KATY’S PLACE (CARMEL)</div>
                    </div>
                      <div className="adventure-detail">They have every kind of French Toast imaginable and they’re all amazing. Kitty and Dave went there on their honeymoon in 1983, Eric went there after a marathon in 2014, Amanda went there with her Mom and Aunt Diane over Easter of 2017, and Eric and Amanda went there after the US Open in 2019 so it’s a perennial favorite (and cash only so you know it’s good!)</div>
                  </ul>
                  <ul className="adventure-entry">
                    <div className="adventure-header">
                      <div>•</div>
                      <div className="adventure-name">SARDINE FACTORY (MONTEREY)</div>
                    </div>
                      <div className="adventure-detail">Well known and very delicious seafood place we ate at a couple years ago.</div>
                  </ul>
                </div>
                </Collapsible>
                {/* DRINK */}
                <Collapsible trigger="DRINK" triggerWhenOpen="DRINK" className="accordion fa fa-caret-right">
              <div className="adventure-options-links">
                <ul className="adventure-entry">
                  <div className="adventure-header">
                    <div>•</div>
                    <div className="adventure-name">FIELD WORK BREWING (MONTEREY)</div>
                  </div>
                    <div className="adventure-detail">Went here a number of times during Eric’s work trip a couple years ago and really enjoyed their beers.</div>
                </ul>
                <ul className="adventure-entry">
                  <div className="adventure-header">
                    <div>•</div>
                    <div className="adventure-name">CARMEL CRAFT BREWING (CARMEL)</div>
                  </div>
                    <div className="adventure-detail">Haven’t actually been but it looks cool</div>
                </ul>
                <ul className="adventure-entry">
                  <div className="adventure-header">
                    <div>•</div>
                    <div className="adventure-name">WINERIES</div>
                  </div>
                    <div className="adventure-detail">Although we have no specific recommendations, there are a ton of tasting rooms in Carmel and some in Monterey as well.</div>
                </ul>
              </div>
              </Collapsible>
              </div>
            </div>
          </div>
        <div className="lodging-map-mobile"><a href="https://www.google.com/maps/d/viewer?mid=1z5UcYpc_Be-fVbqVHDH7CmKRF7PVyicV&hl=en&ll=35.12503049999998%2C-120.57630149999999&z=11">View Activities on a map</a></div>
        <div className="adventure-col adventure-iframe-container">
          <iframe className="adventure-responsive-iframe" src="https://www.google.com/maps/d/embed?mid=1z5UcYpc_Be-fVbqVHDH7CmKRF7PVyicV&hl=en"></iframe>
        </div>
      </div>
      <div className="adventure-section-header">
        <img className="adventure-olive-branch" src="https://res.cloudinary.com/amandaeric/image/upload/f_auto/site-assets/olive-branch.png" alt="Olive Branch Image" />
        <div className="adventure-section-title">Paso Robles</div>
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
          {/* Paso Robles */}
          <div className="adventure-section">
            <div className="adventure-summary">Monterey, Carmel-by-the-Sea, Pebble Beach, Highway 1</div>
            <div className="adventure-info">
              <div className="adventure-description">The northern region of the Central Coast is one of one most picturesque areas of California, if not the entire US, and if you can spare the time and have not been before, we cannot recommend it enough.</div>
                {/* SEE */}
                <Collapsible trigger="SEE" triggerWhenOpen="SEE" className="accordion fa fa-caret-right">
                <div className="adventure-options-links">
                  <ul className="adventure-entry">
                    <div className="adventure-header">
                      <div>•</div>
                      <div className="adventure-name">17-MILE DRIVE</div>
                    </div>
                      <div className="adventure-detail">Very famous drive around the Pebble Beach peninsula with numerous beautiful ocean views and while it is only, you guessed it, 17 miles, it takes a lot at least an hour and a half to drive. Restless Sea (Mile 4) and Lone Cyprus (Mile 12) are our favorites.</div>
                  </ul>
                  <ul className="adventure-entry">
                    <div className="adventure-header">
                      <div>•</div>
                      <div className="adventure-name">HIGHWAY 1</div>
                    </div>
                      <div className="adventure-detail">Amanda has driven it 6+ times and Eric has driven it once and run it once, and we would do it again tomorrow given the chance. It takes a long time to drive and is almost impossible to turn around on so you’ll want to stop at pretty much every vista point. It is one of the most stunningly beautiful places we’ve ever been and is a bucket-list type item.</div>
                  </ul>
                  <ul className="adventure-entry">
                    <div className="adventure-header">
                      <div>•</div>
                      <div className="adventure-name">ELEPHANT SEALS</div>
                    </div>
                      <div className="adventure-detail">If you’re driving Highway 1, this is a must stop so that you can see the hundreds of elephant seals do their thing.</div>
                  </ul>
                  <ul className="adventure-entry">
                    <div className="adventure-header">
                      <div>•</div>
                      <div className="adventure-name">OTTERS OF MONTEREY BAY</div>
                    </div>
                      <div className="adventure-detail">Who doesn’t want to watch adorable creatures roll around in the water?! You can usually find them between Cannery Row and the wharf.</div>
                  </ul>
                  <ul className="adventure-entry">
                    <div className="adventure-header">
                      <div>•</div>
                      <div className="adventure-name">HEARST CASTLE</div>
                    </div>
                      <div className="adventure-detail">From the guy who inspired Citizen Kane, this estate is full of excess grandeur and while it is certainly beautiful, you many want to research what it is all about before making the journey there. There were many exotic animals imported to live there, however only the zebras survived and can still sometimes be spotted in the hills today.</div>
                  </ul>
                </div>
                </Collapsible>
                {/* DO */}
                <Collapsible trigger="DO" triggerWhenOpen="DO" className="accordion fa fa-caret-right">
                <div className="adventure-options-links">
                  <ul className="adventure-entry">
                    <div className="adventure-header">
                      <div>•</div>
                      <div className="adventure-name">GOLF: PEBBLE BEACH, POPPY HILLS, LINKS AT SPANISH BAY, PACIFIC GROVE GOLF LINKS</div>
                    </div>
                      <div className="adventure-detail">We’ve never tried to golf at any of these famous courses, but they all look beautiful (just very expensive)!</div>
                  </ul>
                  <ul className="adventure-entry">
                    <div className="adventure-header">
                      <div>•</div>
                      <div className="adventure-name">MONTEREY BAY AQUARIUM</div>
                    </div>
                      <div className="adventure-detail">We’ve haven’t been yet but it’s supposed to be one of the better aquariums in the country.</div>
                  </ul>
                  <ul className="adventure-entry">
                    <div className="adventure-header">
                      <div>•</div>
                      <div className="adventure-name">WHALE WATCHING</div>
                    </div>
                      <div className="adventure-detail">Monterey is apparently one of the best places to see whales in the country and the summer months are especially good for blue and humpback whales. Amanda has been in July and saw many whales.</div>
                  </ul>
                </div>
                </Collapsible>
                {/* EAT */}
                <Collapsible trigger="EAT" triggerWhenOpen="EAT" className="accordion fa fa-caret-right">
                <div className="adventure-options-links">
                  <ul className="adventure-entry">
                    <div className="adventure-header">
                      <div>•</div>
                      <div className="adventure-name">PANGEA (CARMEL)</div>
                    </div>
                      <div className="adventure-detail">Very yummy Asian-fusion place we went to a couple years ago and absolutely loved.</div>
                  </ul>
                  <ul className="adventure-entry">
                    <div className="adventure-header">
                      <div>•</div>
                      <div className="adventure-name">KATY’S PLACE (CARMEL)</div>
                    </div>
                      <div className="adventure-detail">They have every kind of French Toast imaginable and they’re all amazing. Kitty and Dave went there on their honeymoon in 1983, Eric went there after a marathon in 2014, Amanda went there with her Mom and Aunt Diane over Easter of 2017, and Eric and Amanda went there after the US Open in 2019 so it’s a perennial favorite (and cash only so you know it’s good!)</div>
                  </ul>
                  <ul className="adventure-entry">
                    <div className="adventure-header">
                      <div>•</div>
                      <div className="adventure-name">SARDINE FACTORY (MONTEREY)</div>
                    </div>
                      <div className="adventure-detail">Well known and very delicious seafood place we ate at a couple years ago.</div>
                  </ul>
                </div>
                </Collapsible>
                {/* DRINK */}
                <Collapsible trigger="DRINK" triggerWhenOpen="DRINK" className="accordion fa fa-caret-right">
              <div className="adventure-options-links">
                <ul className="adventure-entry">
                  <div className="adventure-header">
                    <div>•</div>
                    <div className="adventure-name">FIELD WORK BREWING (MONTEREY)</div>
                  </div>
                    <div className="adventure-detail">Went here a number of times during Eric’s work trip a couple years ago and really enjoyed their beers.</div>
                </ul>
                <ul className="adventure-entry">
                  <div className="adventure-header">
                    <div>•</div>
                    <div className="adventure-name">CARMEL CRAFT BREWING (CARMEL)</div>
                  </div>
                    <div className="adventure-detail">Haven’t actually been but it looks cool</div>
                </ul>
                <ul className="adventure-entry">
                  <div className="adventure-header">
                    <div>•</div>
                    <div className="adventure-name">WINERIES</div>
                  </div>
                    <div className="adventure-detail">Although we have no specific recommendations, there are a ton of tasting rooms in Carmel and some in Monterey as well.</div>
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
