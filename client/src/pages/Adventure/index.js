import React from 'react';
import './style.css';
import Collapsible from 'react-collapsible';

const Adventure = () => {
  return (
    <main>
      <div className="adventure-note">We know this is a bit of a destination wedding for most of our guests, but we really wanted to be able to share a region of California that we love so much with everyone else. If time allows, we encourage you to take some time to explore the region that has brought us so much joy over the numerous trips we’ve taken up there.</div>
      <div className="adventure-note">Below is an extensive list of the things to see, do, eat, and drink that we hope will be helpful for you in planning your own Central Coast adventure!</div>
      {/* Big Sur */}
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
      {/* Paso Robles */}
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
            <div className="adventure-summary">Paso Robles, Templeton, and Atascadero</div>
            <div className="adventure-info">
              <div className="adventure-description">While this area is very pretty and there probably are some good outdoor activities you can seek out, most of our recommendations here revolve around food and drink.</div>
                {/* SEE */}
                <Collapsible trigger="SEE" triggerWhenOpen="SEE" className="accordion fa fa-caret-right">
                <div className="adventure-options-links">
                  <ul className="adventure-entry">
                    <div className="adventure-header">
                      <div>•</div>
                      <div className="adventure-name">FISH GAUCHO</div>
                    </div>
                      <div className="adventure-detail">Incredible seafood place in downtown Paso.</div>
                  </ul>
                  <ul className="adventure-entry">
                    <div className="adventure-header">
                      <div>•</div>
                      <div className="adventure-name">TASTE</div>
                    </div>
                      <div className="adventure-detail">If you can’t decide and just want a little of everything, this is the place for you! It specializes in small plates ranging from burgers to brussels to mac n’ cheese, so you can order 2, 3, or 4 of the small bites you want. We have had food from here many times and love it every time. Has a 2nd location in SLO.</div>
                  </ul>
                  <ul className="adventure-entry">
                    <div className="adventure-header">
                      <div>•</div>
                      <div className="adventure-name">TIN CITY</div>
                    </div>
                      <div className="adventure-detail">A few miles south of downtown Paso, this area has a little bit of everything. With breweries, restaurants, distilleries, wineries, and ice cream shops, Tin City is a good place to spend an afternoon or just wind down after a day of wine tasting.</div>
                  </ul>
                </div>
                </Collapsible>
                {/* WINERY */}
                <Collapsible trigger="WINERIES" triggerWhenOpen="WINERIES" className="accordion fa fa-caret-right">
                <div className="adventure-options-links">
                  <div className="drinking-note">Paso is a huge AVA with over 100 different wineries where most tastings ranging from $15-30. Below are a selection of our favorites.</div>
                  <ul className="adventure-entry">
                    <div className="adventure-header">
                      <div>•</div>
                      <div className="adventure-name">BIANCHI</div>
                    </div>
                      <div className="adventure-detail">Probably our current favorite winery, Bianchi offers a lovely outdoor setting overlooking a large koi pond and their wine is both delicious and affordable.</div>
                  </ul>
                  <ul className="adventure-entry">
                    <div className="adventure-header">
                      <div>•</div>
                      <div className="adventure-name">STILL WATERS</div>
                    </div>
                      <div className="adventure-detail">Stillwaters boasts very good olive and solid wine that, while it might be the best in the region, is more than made up for by the friendly service and lovely outdoor area.</div>
                  </ul>
                  <ul className="adventure-entry">
                    <div className="adventure-header">
                      <div>•</div>
                      <div className="adventure-name">TOOTH & NAIL</div>
                    </div>
                      <div className="adventure-detail">This is a castle with a moat to match. The wine is a little pricey but still pretty good. You’re really paying for the medieval experience (minus the jousting and turkey legs) but its worth it.</div>
                  </ul>
                  <ul className="adventure-entry">
                    <div className="adventure-header">
                      <div>•</div>
                      <div className="adventure-name">BROKEN EARTH</div>
                    </div>
                      <div className="adventure-detail">You won’t find a place with a wider array of varietals. They also have brick oven pizza, are close to downtown Paso, and are open until 6PM.</div>
                  </ul>
                  <ul className="adventure-entry">
                    <div className="adventure-header">
                      <div>•</div>
                      <div className="adventure-name">CALIZA</div>
                    </div>
                      <div className="adventure-detail">Probably some of the best wines we’ve had in the region, but the price certainly reflects the quality.</div>
                  </ul>
                  <ul className="adventure-entry">
                    <div className="adventure-header">
                      <div>•</div>
                      <div className="adventure-name">SHALE OAK</div>
                    </div>
                      <div className="adventure-detail">Very sustainable and sheik building that houses a good amount of varietals at a reasonable price.</div>
                  </ul>
                  <ul className="adventure-entry">
                    <div className="adventure-header">
                      <div>•</div>
                      <div className="adventure-name">FOUR LANTERNS</div>
                    </div>
                      <div className="adventure-detail">Family owned winery with very good wine.</div>
                  </ul>
                  <ul className="adventure-entry">
                    <div className="adventure-header">
                      <div>•</div>
                      <div className="adventure-name">END OF THE DAY</div>
                    </div>
                      <div className="adventure-detail">Derivative of Caliza that offers very solid wine at a more reasonable price (and is located in Tin City).</div>
                  </ul>
                </div>
                </Collapsible>
                {/* Brewereis */}
                <Collapsible trigger="BREWERIES" triggerWhenOpen="BREWERIES" className="accordion fa fa-caret-right">
                <div className="adventure-options-links">
                  <ul className="adventure-entry">
                    <div className="adventure-header">
                      <div>•</div>
                      <div className="adventure-name">FIRESTONE</div>
                    </div>
                      <div className="adventure-detail">A staple of the California beer scene, the main brewing facility is located in Paso and features an enormous tasting room/restaurant.</div>
                  </ul>
                  <ul className="adventure-entry">
                    <div className="adventure-header">
                      <div>•</div>
                      <div className="adventure-name">TENT CITY</div>
                    </div>
                  </ul>
                  <ul className="adventure-entry">
                    <div className="adventure-header">
                      <div>•</div>
                      <div className="adventure-name">DEAD OAK</div>
                    </div>
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
      {/* San Luis Obispo */}
      <div className="adventure-section-header">
        <img className="adventure-olive-branch" src="https://res.cloudinary.com/amandaeric/image/upload/f_auto/site-assets/olive-branch.png" alt="Olive Branch Image" />
        <div className="adventure-section-title">San Luis Obispo</div>
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
          {/* SLO */}
          <div className="adventure-section">
            <div className="adventure-summary">SLO, Edna Valley, Pismo Beach, Avila Beach, and Morro Bay</div>
            <div className="adventure-info">
              <div className="adventure-description">The region surrounding our venue includes a number of small towns that each has their own unique recreational options.</div>
                {/* SEE */}
                <Collapsible trigger="SEE" triggerWhenOpen="SEE" className="accordion fa fa-caret-right">
                <div className="adventure-options-links">
                  <ul className="adventure-entry">
                    <div className="adventure-header">
                      <div>•</div>
                      <div className="adventure-name">SECRET GARDEN</div>
                    </div>
                      <div className="adventure-detail">This is a cool little spice/tea shop right along the river in SLO.</div>
                  </ul>
                  <ul className="adventure-entry">
                    <div className="adventure-header">
                      <div>•</div>
                      <div className="adventure-name">MORRO ROCK</div>
                    </div>
                      <div className="adventure-detail">The defining feature of Morro Bay, this enormous rock is quite a sight to behold.</div>
                  </ul>
                  <ul className="adventure-entry">
                    <div className="adventure-header">
                      <div>•</div>
                      <div className="adventure-name">SLO RIVERWALK</div>
                    </div>
                      <div className="adventure-detail">While it’s not quite the Naperville Riverwalk, this little path runs right along the river in the middle of town and is fun to walk along if you’re in the area.</div>
                  </ul>
                  <ul className="adventure-entry">
                    <div className="adventure-header">
                      <div>•</div>
                      <div className="adventure-name">AVILA SEA CAVES/SMUGGLERS CAVE (AVILA)</div>
                    </div>
                      <div className="adventure-detail">This area right outside Avila beach has a couple of nice walking trails with views along with some sea caves - some of which are easier to get to than others. It is also close to Pirates Cove Beach, which beware, is a clothing optional beach.</div>
                  </ul>
                  <ul className="adventure-entry">
                    <div className="adventure-header">
                      <div>•</div>
                      <div className="adventure-name">ELFIN FOREST (Morro Bay)</div>
                    </div>
                      <div className="adventure-detail">TBD</div>
                  </ul>
                </div>
                </Collapsible>
                {/* DO */}
                <Collapsible trigger="DO" triggerWhenOpen="DO" className="accordion fa fa-caret-right">
                <div className="adventure-options-links">
                  <ul className="adventure-entry">
                    <div className="adventure-header">
                      <div>•</div>
                      <div className="adventure-name">KAYAKING | MORRO BAY</div>
                    </div>
                      <div className="adventure-detail">In the shadow of Morro Rock, the bay is quite calm and allows you to kayak around seals and otters. You can also paddle out to Morro Bay State Park which is a great place for a picnic or just to relax on the beach.</div>
                  </ul>
                  <ul className="adventure-entry">
                    <div className="adventure-header">
                      <div>•</div>
                      <div className="adventure-name">ATV ON DUNES IN PISMO</div>
                    </div>
                      <div className="adventure-detail">For those seeking a bit more high octane fun, you can rent ATVs and drive over the large sand dunes along the water.</div>
                  </ul>
                  <ul className="adventure-entry">
                    <div className="adventure-header">
                      <div>•</div>
                      <div className="adventure-name">GOLF</div>
                    </div>
                      <div className="adventure-detail">While we’ve never actually golfed in the area, there are a number of options. My former boss had very good things to say about the Morro Bay Golf Course, but we don’t know much about the Avila Beach Golf Resort, Monarch Dunes, Cypress Ridge, and Blacklake which are also close by. </div>
                  </ul>
                  <ul className="adventure-entry">
                    <div className="adventure-header">
                      <div>•</div>
                      <div className="adventure-name">HIKE THE BIG FALLS TRAIL | Arroyo Grande</div>
                    </div>
                      <div className="adventure-detail">TBD</div>
                  </ul>
                  <ul className="adventure-entry">
                    <div className="adventure-header">
                      <div>•</div>
                      <div className="adventure-name">HIKE IN MONTANA DE ORO STATE PARK MORRO BAY</div>
                    </div>
                      <div className="adventure-detail">TBD</div>
                  </ul>
                </div>
                </Collapsible>
                {/* EAT */}
                <Collapsible trigger="EAT" triggerWhenOpen="EAT" className="accordion fa fa-caret-right">
                <div className="adventure-options-links">
                  <ul className="adventure-entry">
                    <div className="adventure-header">
                      <div>•</div>
                      <div className="adventure-name">LUNA RED&nbsp;&nbsp;|</div><div className="adventure-town">SLO</div>
                    </div>
                      <div className="adventure-detail">Very delicious tapas place in downtown SLO.</div>
                  </ul>
                  <ul className="adventure-entry">
                    <div className="adventure-header">
                      <div>•</div>
                      <div className="adventure-name">TASTE&nbsp;&nbsp;|</div><div className="adventure-town">SLO</div>
                    </div>
                      <div className="adventure-detail">If you can’t decide and just want a little of everything, this is the place for you! It specializes in small plates ranging from burgers to brussels to mac n’ cheese, so you can order 2, 3, or 4 of the small bites you want. We have had food from here many times and love it every time. Has a 2nd location in Paso.</div>
                  </ul>
                  <ul className="adventure-entry">
                    <div className="adventure-header">
                      <div>•</div>
                      <div className="adventure-name">1865 CRAFT&nbsp;&nbsp;|</div><div className="adventure-town">SLO</div>
                    </div>
                      <div className="adventure-detail">We had a very yummy Valentines Day dinner and drinks at this pretty gastropub a couple years back.</div>
                  </ul>
                  <ul className="adventure-entry">
                    <div className="adventure-header">
                      <div>•</div>
                      <div className="adventure-name">NOVO LOUNGE&nbsp;&nbsp;|</div><div className="adventure-town">SLO</div>
                    </div>
                      <div className="adventure-detail">Novo has a really nice outdoor patio in the back along the river in SLO and while we’ve only been here a couple times for a delicious brunch, their dinner menu looks really good too.</div>
                  </ul>
                  <ul className="adventure-entry">
                    <div className="adventure-header">
                      <div>•</div>
                      <div className="adventure-name">FAT CAT CAFE&nbsp;&nbsp;|</div><div className="adventure-town">AVILA BEACH</div>
                    </div>
                      <div className="adventure-detail">Deliciously dive diner full of silly cat-themed decor.</div>
                  </ul>
                  <ul className="adventure-entry">
                    <div className="adventure-header">
                      <div>•</div>
                      <div className="adventure-name">MASON BAR&nbsp;&nbsp;|</div><div className="adventure-town">ARROYO GRANDE</div>
                    </div>
                      <div className="adventure-detail">We will most likely be holding our after party here following the wedding, but recommend checking it out for a regular dinner as well. The brussel sprouts are some of the best we’ve ever had.</div>
                  </ul>
                  <ul className="adventure-entry">
                    <div className="adventure-header">
                      <div>•</div>
                      <div className="adventure-name">COWBOY COOKIE AND CREAM |</div><div className="adventure-town">SLO</div>
                    </div>
                      <div className="adventure-detail">As you might imagine, they have good cookies and ice cream.</div>
                  </ul>
                  <ul className="adventure-entry">
                    <div className="adventure-header">
                      <div>•</div>
                      <div className="adventure-name">BLUE MOON OVER AVILA&nbsp;&nbsp;|</div><div className="adventure-town">SLO</div>
                    </div>
                      <div className="adventure-detail">TBD</div>
                  </ul>
                </div>
                </Collapsible>
                {/* Brewereis */}
                <Collapsible trigger="BREWERIES" triggerWhenOpen="BREWERIES" className="accordion fa fa-caret-right">
                <div className="adventure-options-links">
                  <ul className="adventure-entry">
                    <div className="adventure-header">
                      <div>•</div>
                      <div className="adventure-name">BANG THE DRUM&nbsp;&nbsp;|</div><div className="adventure-town">SLO</div>
                    </div>
                  </ul>
                  <ul className="adventure-entry">
                    <div className="adventure-header">
                      <div>•</div>
                      <div className="adventure-name">LIBERTINE&nbsp;&nbsp;|</div><div className="adventure-town">SLO or AVILA</div>
                    </div>
                  </ul>
                  <ul className="adventure-entry">
                    <div className="adventure-header">
                      <div>•</div>
                      <div className="adventure-name">CENTRAL COAST BREWING&nbsp;&nbsp;|</div><div className="adventure-town">SLO</div>
                    </div>
                  </ul>
                  <ul className="adventure-entry">
                    <div className="adventure-header">
                      <div>•</div>
                      <div className="adventure-name">HUMDINGER&nbsp;&nbsp;|</div><div className="adventure-town">ARROYO GRANDE</div>
                    </div>
                  </ul>
                  <ul className="adventure-entry">
                    <div className="adventure-header">
                      <div>•</div>
                      <div className="adventure-name">OAK & OTTER&nbsp;&nbsp;|</div><div className="adventure-town">SLO</div>
                    </div>
                  </ul>
                  <ul className="adventure-entry">
                    <div className="adventure-header">
                      <div>•</div>
                      <div className="adventure-name">THIS DOES NOT EXIST&nbsp;&nbsp;|</div><div className="adventure-town">SLO</div>
                    </div>
                  </ul>
                </div>
                </Collapsible>
                {/* WINERY */}
                <Collapsible trigger="WINERIES" triggerWhenOpen="WINERIES" className="accordion fa fa-caret-right">
                <div className="adventure-options-links">
                  <div className="drinking-note">Edna Valley is a much smaller AVA than Paso (only about 30 wineries) and while the quality of the wine may be a bit lower, we’ve found its a more friendly atmosphere. Expect to pay $15-25 per tasting and below are our favorites.</div>
                  <ul className="adventure-entry">
                    <div className="adventure-header">
                      <div>•</div>
                      <div className="adventure-name">CLAIBORNE & CHURCHILL</div>
                    </div>
                      <div className="adventure-detail">Claiborne & Churchill is our favorite winery of the area and was our first wine club together. It owned by a husband and wife who met at the University of Michigan and boasts good dry whites along with solid reds (Syrah, Pinot Noir, & Grenache).</div>
                  </ul>
                  <ul className="adventure-entry">
                    <div className="adventure-header">
                      <div>•</div>
                      <div className="adventure-name">KYNSI</div>
                    </div>
                      <div className="adventure-detail">On the higher end price-wise, Kynsi is mostly known for their good Pinots and has a delightful outdoor tasting area.</div>
                  </ul>
                  <ul className="adventure-entry">
                    <div className="adventure-header">
                      <div>•</div>
                      <div className="adventure-name">CHAMISAL</div>
                    </div>
                      <div className="adventure-detail">Probably the most well-known winery of the area, Chamisol is a little stuffy but does have some good wine.</div>
                  </ul>
                  <ul className="adventure-entry">
                    <div className="adventure-header">
                      <div>•</div>
                      <div className="adventure-name">SAUCELITO CANYON</div>
                    </div>
                      <div className="adventure-detail">Very approachable winery with friendly staff and good Zinfandels.</div>
                  </ul>
                  <ul className="adventure-entry">
                    <div className="adventure-header">
                      <div>•</div>
                      <div className="adventure-name">WOLFF</div>
                    </div>
                      <div className="adventure-detail">Very large selection of varietals and sweeping views of Edna Valley. The wine is good but not great.</div>
                  </ul>
                  <ul className="adventure-entry">
                    <div className="adventure-header">
                      <div>•</div>
                      <div className="adventure-name">EDNA VALLEY</div>
                    </div>
                      <div className="adventure-detail">Edna Valley probably has the widest distribution in the area and a beautiful new newest tasting room, but their wine is just OK.</div>
                  </ul>
                  <ul className="adventure-entry">
                    <div className="adventure-header">
                      <div>•</div>
                      <div className="adventure-name">TOLOSA</div>
                    </div>
                      <div className="adventure-detail">Tolosa has a beautiful patio and some of their higher end wines are fantastic, but their regular tasting menu is a tad overpriced for their more standard wines.</div>
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
