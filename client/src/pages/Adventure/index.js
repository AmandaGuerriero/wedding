import React from 'react';
import './style.css';
import Collapsible from 'react-collapsible';

const Adventure = () => {
  return (
    <main>
      <div className="adventure-note" id="top">We know this is a bit of a destination wedding for most of our guests, but we wanted to share a region of California that we love so much with everyone else. If time allows, we encourage you to explore the region that has brought us so much joy over the numerous trips we’ve taken up there.</div>
      <div className="adventure-note">Below is an extensive list of the things to see, do, eat, and drink that we hope will be helpful for you in planning your own Central Coast adventure! If you have questions or need advice on anything, we are more than happy to help, so please feel free to reach out to us directly at <a className="hyperlink" href="mailto:amandaeric2022@gmail.com">amandaeric2022@gmail.com</a></div>
      <div className="anchor-links"><a className="hyperlink" href="#big-sur">Big Sur</a>&nbsp; | &nbsp;<a className="hyperlink" href="#paso-robles">Paso Robles</a>&nbsp; | &nbsp;<a className="hyperlink" href="#slo">San Luis Obispo</a>&nbsp; | &nbsp;<a className="hyperlink" href="#sb">Santa Barbara</a>&nbsp; | &nbsp;<a href="#ventura" className="hyperlink">Ventura</a></div>
      {/* Big Sur */}
      <div className="adventure-section-header" id="big-sur">
        <img className="adventure-olive-branch" src="https://res.cloudinary.com/amandaeric/image/upload/f_auto/site-assets/olive-branch.png" alt="Olive Branch" />
        <div className="adventure-section-title">Big Sur</div>
      </div>
      <div>
        <div className="adventure-picture-row">
          <img className="adventure-image" src="https://res.cloudinary.com/amandaeric/image/upload/f_auto/adventure/BIG-SUr/Coast" alt="Big Sur" />
          <img className="adventure-image" src="https://res.cloudinary.com/amandaeric/image/upload/f_auto/adventure/BIG-SUr/Restless" alt="Big Sur" />
          <img className="adventure-image" src="https://res.cloudinary.com/amandaeric/image/upload/f_auto/adventure/BIG-SUr/GolfCourse" alt="Big Sur" />
          <img className="adventure-image" src="https://res.cloudinary.com/amandaeric/image/upload/f_auto/adventure/BIG-SUr/LoneTree" alt="Big Sur" />
        </div>
      </div>
      <div className="adventure-row">
        <div className="adventure-col adventure-text">
          {/* Big Sur */}
          <div className="adventure-section">
            <div className="adventure-summary">Monterey, Carmel-by-the-Sea, Pebble Beach, Highway 1</div>
            <div className="adventure-info">
              <div className="adventure-description">The northern region of the Central Coast is one of the most picturesque areas of California, if not the entire US. If you can spare the time and have not been before, we cannot recommend it enough.</div>
                {/* SEE */}
                <Collapsible trigger="↓ SEE" triggerWhenOpen="➞ SEE" >
                <div className="adventure-options-links">
                  <ul className="adventure-entry">
                    <div className="adventure-header">
                      <div>•</div>
                      <div className="adventure-name">17-MILE DRIVE&nbsp;&nbsp;|</div><div className="adventure-town">MONTEREY</div>
                    </div>
                      <div className="adventure-detail">Very famous drive around the Pebble Beach peninsula with numerous beautiful ocean views and while it is only, you guessed it, 17 miles, it takes at least an hour and a half to drive. Restless Sea (Mile 4) and Lone Cyprus (Mile 12) are our favorites.</div>
                  </ul>
                  <ul className="adventure-entry">
                    <div className="adventure-header">
                      <div>•</div>
                      <div className="adventure-name">HIGHWAY 1</div>
                    </div>
                      <div className="adventure-detail">Amanda has driven it 6+ times, Eric has driven it once and run it once, and we would do it again tomorrow given the chance. It takes 4+ hours to drive and is almost impossible to turn around on so you’ll want to stop at pretty much every vista point. It is one of the most stunningly beautiful places we’ve ever been and is a bucket-list destination.</div>
                  </ul>
                  <ul className="adventure-entry">
                    <div className="adventure-header">
                      <div>•</div>
                      <div className="adventure-name">ELEPHANT SEALS&nbsp;&nbsp;|</div><div className="adventure-town">SAN SIMEON</div>
                    </div>
                      <div className="adventure-detail">If you’re driving Highway 1, this is a must stop so that you can see the hundreds of elephant seals doing their thing.</div>
                  </ul>
                  <ul className="adventure-entry">
                    <div className="adventure-header">
                      <div>•</div>
                      <div className="adventure-name">OTTERS&nbsp;&nbsp;|</div><div className="adventure-town">MONTEREY</div>
                    </div>
                      <div className="adventure-detail">Who doesn’t want to watch adorable creatures roll around in the water?! You can usually find them between Cannery Row and the wharf.</div>
                  </ul>
                  <ul className="adventure-entry">
                    <div className="adventure-header">
                      <div>•</div>
                      <div className="adventure-name">HEARST CASTLE&nbsp;&nbsp;|</div><div className="adventure-town">SAN SIMEON</div>
                    </div>
                      <div className="adventure-detail">From the guy who inspired Citizen Kane, this estate is full of excess grandeur and while it is certainly beautiful, you many want to research what it is all about before making the journey there. There were many exotic animals imported to live there, however only the zebras survived and can still sometimes be spotted in the hills.</div>
                  </ul>
                </div>
                </Collapsible>
                {/* DO */}
                <Collapsible trigger="↓ DO" triggerWhenOpen="➞ DO" >
                <div className="adventure-options-links">
                  <ul className="adventure-entry">
                    <div className="adventure-header">
                      <div>•</div>
                      <div className="adventure-name">GOLF&nbsp;&nbsp;|</div><div className="adventure-town">PEBBLE BEACH</div>
                    </div>
                      <div className="adventure-detail">We’ve never tried to golf at any of these famous courses, but they all look beautiful (and expensive) Pebble Beach, Poppy Hills, Links at Spanish Bay, and Pacific Grove Golf Links are some options.</div>
                  </ul>
                  <ul className="adventure-entry">
                    <div className="adventure-header">
                      <div>•</div>
                      <div className="adventure-name">AQUARIUM&nbsp;&nbsp;|</div><div className="adventure-town">MONTEREY</div>
                    </div>
                      <div className="adventure-detail">We’ve haven’t been yet, but it’s supposed to be one of the better aquariums in the country.</div>
                  </ul>
                  <ul className="adventure-entry">
                    <div className="adventure-header">
                      <div>•</div>
                      <div className="adventure-name">WHALE WATCHING&nbsp;&nbsp;|</div><div className="adventure-town">MONTEREY</div>
                    </div>
                      <div className="adventure-detail">Monterey is apparently one of the best places to see whales in the country and the summer months are especially good for blue and humpback whales. Amanda has been in July and saw many whales.</div>
                  </ul>
                </div>
                </Collapsible>
                {/* EAT */}
                <Collapsible trigger="↓ EAT" triggerWhenOpen="➞ EAT" >
                <div className="adventure-options-links">
                  <ul className="adventure-entry">
                    <div className="adventure-header">
                      <div>•</div>
                      <div className="adventure-name">PANGEA&nbsp;&nbsp;|</div><div className="adventure-town">CARMEL</div>
                    </div>
                      <div className="adventure-detail">Very yummy Asian-fusion place we went to a couple years ago and absolutely loved.</div>
                  </ul>
                  <ul className="adventure-entry">
                    <div className="adventure-header">
                      <div>•</div>
                      <div className="adventure-name">KATY’S PLACE&nbsp;&nbsp;|</div><div className="adventure-town">CARMEL</div>
                    </div>
                      <div className="adventure-detail">They have every kind of French Toast imaginable and they’re all amazing. Kitty and Dave went there on their honeymoon in 1983, Eric went there after a marathon in 2014, Amanda went there with her Mom and Aunt Diane over Easter of 2017, and Eric and Amanda went there after the US Open in 2019 so it’s a perennial favorite (and cash only so you know it’s good!)</div>
                  </ul>
                  <ul className="adventure-entry">
                    <div className="adventure-header">
                      <div>•</div>
                      <div className="adventure-name">SARDINE FACTORY&nbsp;&nbsp;|</div><div className="adventure-town">MONTEREY</div>
                    </div>
                      <div className="adventure-detail">Well known and very delicious seafood place we ate at a couple years ago.</div>
                  </ul>
                </div>
                </Collapsible>
                {/* DRINK */}
                <Collapsible trigger="↓ DRINK" triggerWhenOpen="➞ DRINK" >
              <div className="adventure-options-links">
                <ul className="adventure-entry">
                  <div className="adventure-header">
                    <div>•</div>
                    <div className="adventure-name">FIELD WORK BREWING&nbsp;&nbsp;|</div><div className="adventure-town">MONTEREY</div>
                  </div>
                    <div className="adventure-detail">Went here a number of times during Eric’s work trip a couple years ago and really enjoyed their beers.</div>
                </ul>
                <ul className="adventure-entry">
                  <div className="adventure-header">
                    <div>•</div>
                    <div className="adventure-name">CARMEL CRAFT BREWING&nbsp;&nbsp;|</div><div className="adventure-town">CARMEL</div>
                  </div>
                    <div className="adventure-detail">Haven’t actually been, but it looks cool.</div>
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
        <div className="lodging-map-mobile"><a href="https://www.google.com/maps/d/u/0/viewer?mid=10fOYjk8xAIbeCnrEUTtnrRkLBTIxOt8B&ll=36.43550574117006%2C-121.87890555000001&z=11" target="_blank" rel="noopener noreferrer">View recommendations on a map</a></div>
        <div className="adventure-col adventure-iframe-container">
        <div className="map-link">If you are having trouble with the map, click <a href="https://www.google.com/maps/d/u/0/viewer?mid=10fOYjk8xAIbeCnrEUTtnrRkLBTIxOt8B&hl=en&ll=36.14983451003921%2C-121.55899029999999&z=9" target="_blank">here.</a></div>
          <iframe className="adventure-responsive-iframe" title="Big Sur Map" src="https://www.google.com/maps/d/embed?mid=10fOYjk8xAIbeCnrEUTtnrRkLBTIxOt8B&hl=en"></iframe>
        </div>
      </div>
      <div className="back-to-top"><a className="hyperlink" href="#top">Back to Top</a></div>
      {/* Paso Robles */}
      <div className="adventure-section-header" id="paso-robles">
        <img className="adventure-olive-branch" src="https://res.cloudinary.com/amandaeric/image/upload/f_auto/site-assets/olive-branch.png" alt="Olive Branch" />
        <div className="adventure-section-title">Paso Robles</div>
      </div>
      <div>
        <div className="adventure-picture-row">
          <img className="adventure-image" src="https://res.cloudinary.com/amandaeric/image/upload/f_auto/adventure/PASO/Hills" alt="Paso Robles" />
          <img className="adventure-image" src="https://res.cloudinary.com/amandaeric/image/upload/f_auto/adventure/PASO/Pasoport" alt="Paso Robles" />
          <img className="adventure-image" src="https://res.cloudinary.com/amandaeric/image/upload/f_auto/adventure/PASO/Mitchella" alt="Paso Robles" />
          <img className="adventure-image" src="https://res.cloudinary.com/amandaeric/image/upload/f_auto/adventure/PASO/Fish-Gaucho" alt="Paso Robles" />
        </div>
      </div>
      <div className="adventure-row">
        <div className="adventure-col adventure-text">
          {/* Paso Robles */}
          <div className="adventure-section">
            <div className="adventure-summary">Paso Robles, Templeton, and Atascadero</div>
            <div className="adventure-info">
              <div className="adventure-description">While this area is very pretty and there probably are some good outdoor activities you can seek out, most of our recommendations here revolve around food and drink.</div>
                {/* EAT */}
                <Collapsible trigger="↓ EAT" triggerWhenOpen="➞ EAT" >
                <div className="adventure-options-links">
                  <ul className="adventure-entry">
                    <div className="adventure-header">
                      <div>•</div>
                      <div className="adventure-name">FISH GAUCHO&nbsp;&nbsp;|</div><div className="adventure-town">Paso Robles</div>
                    </div>
                      <div className="adventure-detail">Incredible seafood place in downtown Paso.</div>
                  </ul>
                  <ul className="adventure-entry">
                    <div className="adventure-header">
                      <div>•</div>
                      <div className="adventure-name">TASTE&nbsp;&nbsp;|</div><div className="adventure-town">Paso Robles</div>
                    </div>
                      <div className="adventure-detail">If you can’t decide and just want a little of everything, this is the place for you! It specializes in small plates ranging from burgers to brussels to mac n’ cheese, so you can order 2, 3, or 4 of the small bites you want. We have had food from here many times and love it every time. Has a 2nd location in SLO.</div>
                  </ul>
                  <ul className="adventure-entry">
                    <div className="adventure-header">
                      <div>•</div>
                      <div className="adventure-name">TIN CITY&nbsp;&nbsp;|</div><div className="adventure-town">Paso Robles</div>
                    </div>
                      <div className="adventure-detail">A few miles south of downtown Paso, this area has a little bit of everything. With breweries, restaurants, distilleries, wineries, and ice cream shops, Tin City is a good place to spend an entire afternoon or just an hour or two after a day of wine tasting.</div>
                  </ul>
                </div>
                </Collapsible>
                {/* WINERY */}
                <Collapsible trigger="↓ WINERIES" triggerWhenOpen="➞ WINERIES" >
                <div className="adventure-options-links">
                  <div className="drinking-note">Paso is a huge AVA with over 100 different wineries where most tastings range from $15-30. Below is a selection of our favorites.</div>
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
                      <div className="adventure-detail">Stillwaters boasts very good olive oil and solid wine that, while it might not be the best in the region, is more than made up for by the friendly service and lovely outdoor area. If you get Ed for your tasting, you are in for a treat.</div>
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
                      <div className="adventure-detail">Very sustainable and sheik building that houses a good amount of varietals at reasonable prices.</div>
                  </ul>
                  <ul className="adventure-entry">
                    <div className="adventure-header">
                      <div>•</div>
                      <div className="adventure-name">FOUR LANTERNS</div>
                    </div>
                      <div className="adventure-detail">Family owned winery with very good wine and a relaxing outdoor space.</div>
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
                <Collapsible trigger="↓ BREWERIES" triggerWhenOpen="➞ BREWERIES" >
                <div className="adventure-options-links">
                  <ul className="adventure-entry">
                    <div className="adventure-header">
                      <div>•</div>
                      <div className="adventure-name">FIRESTONE</div>
                    </div>
                      <div className="adventure-detail">A staple of the California beer scene, the main brewing facility is located in Paso and features an enormous tasting room and restaurant.</div>
                  </ul>
                  {/* <ul className="adventure-entry">
                    <div className="adventure-header">
                      <div>•</div>
                      <div className="adventure-name">TENT CITY</div>
                    </div>
                  </ul> */}
                  {/* <ul className="adventure-entry">
                    <div className="adventure-header">
                      <div>•</div>
                      <div className="adventure-name">DEAD OAK</div>
                    </div>
                  </ul> */}
                </div>
                </Collapsible>
              </div>
              <div className="lodging-map-mobile"><a href="https://www.google.com/maps/d/u/0/viewer?mid=14GJoAqBHQv4BPbGikOa74sK5yWhaqLA1&ll=35.60582105686205%2C-120.65979145&z=12" target="_blank" rel="noopener noreferrer">View recommendations on a map</a></div>
            </div>
          </div>
        <div className="adventure-col adventure-iframe-container">
          <div className="map-link">If you are having trouble with the map, click <a href="https://www.google.com/maps/d/u/0/viewer?mid=14GJoAqBHQv4BPbGikOa74sK5yWhaqLA1&hl=en&ll=35.568973351881496%2C-120.66500794999999&z=12" target="_blank">here.</a></div>
          <iframe className="adventure-responsive-iframe" title="Paso Robles Map" src="https://www.google.com/maps/d/embed?mid=14GJoAqBHQv4BPbGikOa74sK5yWhaqLA1&hl=en"></iframe>
        </div>
      </div>
      <div className="back-to-top"><a className="hyperlink" href="#top">Back to Top</a></div>
      {/* San Luis Obispo */}
      <div className="adventure-section-header" id="slo">
        <img className="adventure-olive-branch" src="https://res.cloudinary.com/amandaeric/image/upload/f_auto/site-assets/olive-branch.png" alt="Olive Branch" />
        <div className="adventure-section-title">San Luis Obispo</div>
      </div>
      <div>
        <div className="adventure-picture-row">
          <img className="adventure-image" src="https://res.cloudinary.com/amandaeric/image/upload/f_auto/adventure/SLO/Wolff-Winery" alt="SLO" />
          <img className="adventure-image" src="https://res.cloudinary.com/amandaeric/image/upload/f_auto/adventure/SLO/Pismo" alt="SLO" />
          <img className="adventure-image" src="https://res.cloudinary.com/amandaeric/image/upload/f_auto/adventure/SLO/MorroBay" alt="SLO" />
          <img className="adventure-image" src="https://res.cloudinary.com/amandaeric/image/upload/f_auto/adventure/SLO/SLO-riverwalk" alt="SLO" />
        </div>
      </div>
      <div className="adventure-row">
        <div className="adventure-col adventure-text">
          {/* SLO */}
          <div className="adventure-section">
            <div className="adventure-summary">SLO, Edna Valley, Pismo Beach, Avila Beach, and Morro Bay</div>
            <div className="adventure-info">
              <div className="adventure-description">The region surrounding our venue includes a number of small towns and each has their own unique recreational options.</div>
                {/* SEE */}
                <Collapsible trigger="↓ SEE" triggerWhenOpen="➞ SEE" >
                <div className="adventure-options-links">
                  <ul className="adventure-entry">
                    <div className="adventure-header">
                      <div>•</div>
                      <div className="adventure-name">SECRET GARDEN&nbsp;&nbsp;|</div><div className="adventure-town">SLO</div>
                    </div>
                      <div className="adventure-detail">This is a cool little spice/tea shop along the river in SLO.</div>
                  </ul>
                  <ul className="adventure-entry">
                    <div className="adventure-header">
                      <div>•</div>
                      <div className="adventure-name">MORRO ROCK&nbsp;&nbsp;|</div><div className="adventure-town">MORRO BAY</div>
                    </div>
                      <div className="adventure-detail">The defining feature of Morro Bay, this enormous rock is quite a sight to behold.</div>
                  </ul>
                  <ul className="adventure-entry">
                    <div className="adventure-header">
                      <div>•</div>
                      <div className="adventure-name">SLO RIVERWALK&nbsp;&nbsp;|</div><div className="adventure-town">SLO</div>
                    </div>
                      <div className="adventure-detail">While it’s not quite the Naperville Riverwalk, this little path runs right along the river in the middle of town and is fun to walk along if you’re in the area.</div>
                  </ul>
                  <ul className="adventure-entry">
                    <div className="adventure-header">
                      <div>•</div>
                      <div className="adventure-name">AVILA SEA CAVES/SMUGGLERS CAVE&nbsp;&nbsp;|</div><div className="adventure-town">AVILA BEACH</div>
                    </div>
                      <div className="adventure-detail">Area with a couple of easy walking trails with views along with some sea caves - some of which are easier to get to than others. It is also close to Pirates Cove Beach, which beware, is a clothing optional beach.</div>
                  </ul>
                  <ul className="adventure-entry">
                    <div className="adventure-header">
                      <div>•</div>
                      <div className="adventure-name">ELFIN FOREST&nbsp;&nbsp;|</div><div className="adventure-town">MORRO BAY</div>
                    </div>
                      <div className="adventure-detail">It only takes about 30 minutes to walk around this fascinating landscape which also boasts nice views of Morro Rock and the Pacific.</div>
                  </ul>
                </div>
                </Collapsible>
                {/* DO */}
                <Collapsible trigger="↓ DO" triggerWhenOpen="➞ DO" >
                <div className="adventure-options-links">
                  <ul className="adventure-entry">
                    <div className="adventure-header">
                      <div>•</div>
                      <div className="adventure-name">KAYAKING&nbsp;&nbsp;|</div><div className="adventure-town">MORRO BAY</div>
                    </div>
                      <div className="adventure-detail">In the shadow of Morro Rock, the bay is quite calm and allows you to kayak around seals and otters. You can also paddle out to Morro Bay State Park which is a great place for a picnic or just to relax on the beach.</div>
                  </ul>
                  <ul className="adventure-entry">
                    <div className="adventure-header">
                      <div>•</div>
                      <div className="adventure-name">ATV ON SAND DUNES&nbsp;&nbsp;|</div><div className="adventure-town">PISMO BEACH</div>
                    </div>
                      <div className="adventure-detail">For those seeking a bit more high octane fun, you can rent ATVs and drive over the vast sand dunes along the coast.</div>
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
                      <div className="adventure-name">HIKE THE BIG FALLS TRAIL&nbsp;&nbsp;|</div><div className="adventure-town">Arroyo Grande</div>
                    </div>
                      <div className="adventure-detail">An intriguing moderate hike very close to the venue that we hope to do ourselves sometime soon.</div>
                  </ul>
                  <ul className="adventure-entry">
                    <div className="adventure-header">
                      <div>•</div>
                      <div className="adventure-name">HIKE IN MONTANA DE ORO STATE PARK&nbsp;&nbsp;|</div><div className="adventure-town">MORRO BAY</div>
                    </div>
                      <div className="adventure-detail">We kept calling this "Little Sur" as it has stunning coastal views similar to that of Big Sur. There is no shortage of hiking trails, but even if you just wanted to drive the park, it is still very much worth a visit!</div>
                  </ul>
                </div>
                </Collapsible>
                {/* EAT */}
                <Collapsible trigger="↓ EAT" triggerWhenOpen="➞ EAT" >
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
                      <div className="adventure-detail">If you can’t decide and just want a little of everything, this is the place for you! It specializes in small plates ranging from sliders to brussels to mac n’ cheese, and they’re all quite tasty. We have had food from here many times and love it every time. Has a 2nd location in Paso.</div>
                  </ul>
                  <ul className="adventure-entry">
                    <div className="adventure-header">
                      <div>•</div>
                      <div className="adventure-name">1865 CRAFT&nbsp;&nbsp;|</div><div className="adventure-town">SLO</div>
                    </div>
                      <div className="adventure-detail">We had a very yummy Valentines Day dinner and drinks at this gastropub a couple years back.</div>
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
                      <div className="adventure-detail">Delicious, dive of a diner full of silly cat-themed decor.</div>
                  </ul>
                  <ul className="adventure-entry">
                    <div className="adventure-header">
                      <div>•</div>
                      <div className="adventure-name">MASON BAR&nbsp;&nbsp;|</div><div className="adventure-town">ARROYO GRANDE</div>
                    </div>
                      <div className="adventure-detail">We will be holding the after party here, but recommend checking it out for a regular dinner as well. The Brussels sprouts are some of the best we've ever had and the rest of the food is amazing as well!</div>
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
                      <div className="adventure-name">BLUE MOON OVER AVILA&nbsp;&nbsp;|</div><div className="adventure-town">AVILA BEACH</div>
                    </div>
                      <div className="adventure-detail">Delightful French-inspired restaurant along the boardwalk in Avila.</div>
                  </ul>
                  <ul className="adventure-entry">
                    <div className="adventure-header">
                      <div>•</div>
                      <div className="adventure-name">OLD WEST CINNAMON ROLLS&nbsp;&nbsp;|</div><div className="adventure-town">AVILA BEACH</div>
                    </div>
                      <div className="adventure-detail">Amazing cinnamon rolls.</div>
                  </ul>
                </div>
                </Collapsible>
                {/* Brewereis */}
                <Collapsible trigger="↓ BREWERIES" triggerWhenOpen="➞ BREWERIES" >
                <div className="adventure-options-links">
                <div className="drinking-note">None of these breweries are head and shoulders above the rest but they are all very solid.</div>
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
                <Collapsible trigger="↓ WINERIES" triggerWhenOpen="➞ WINERIES" >
                <div className="adventure-options-links">
                  <div className="drinking-note">Edna Valley is a much smaller AVA than Paso (only about 30 wineries) and while the quality of the wine may be a bit lower, we’ve found its a more friendly atmosphere. Expect to pay $15-25 per tasting and below are our favorites.</div>
                  <ul className="adventure-entry">
                    <div className="adventure-header">
                      <div>•</div>
                      <div className="adventure-name">CLAIBORNE & CHURCHILL</div>
                    </div>
                      <div className="adventure-detail">Claiborne & Churchill is our favorite winery of the area and was our first wine club together. It is owned by a husband and wife who met at the University of Michigan and boasts good dry whites along with solid reds (Syrah, Pinot Noir, & Grenache).</div>
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
              <div className="lodging-map-mobile"><a href="https://www.google.com/maps/d/u/0/viewer?mid=1YWNYd1V0-P47Y7q_lzI4stIoBVEg14c8&ll=35.24459578575364%2C-120.72926775&z=11" target="_blank" rel="noopener noreferrer">View recommendations on a map</a></div>
            </div>
          </div>
        <div className="adventure-col adventure-iframe-container">
          <div className="map-link">If you are having trouble with the map, click <a href="https://www.google.com/maps/d/u/0/viewer?mid=1YWNYd1V0-P47Y7q_lzI4stIoBVEg14c8&ll=35.20092294207814%2C-120.70043849999999&z=11" target="_blank">here.</a></div>
          <iframe className="adventure-responsive-iframe" title="SLO Map" src="https://www.google.com/maps/d/embed?mid=1YWNYd1V0-P47Y7q_lzI4stIoBVEg14c8" target="_blank" rel="noopener noreferrer"></iframe>
        </div>
      </div>
      <div className="back-to-top"><a className="hyperlink" href="#top">Back to Top</a></div>
      {/* Santa Barbara County */}
      <div className="adventure-section-header" id="sb">
        <img className="adventure-olive-branch" src="https://res.cloudinary.com/amandaeric/image/upload/f_auto/site-assets/olive-branch.png" alt="Olive Branch" />
        <div className="adventure-section-title">Santa Barbara</div>
      </div>
      <div>
        <div className="adventure-picture-row">
          <img className="adventure-image" src="https://res.cloudinary.com/amandaeric/image/upload/f_auto/adventure/SB/Solvang-wide" alt="Santa Barbara" />
          <img className="adventure-image" src="https://res.cloudinary.com/amandaeric/image/upload/f_auto/adventure/SB/Abelskiver" alt="Santa Barbara" />
          <img className="adventure-image" src="https://res.cloudinary.com/amandaeric/image/upload/f_auto/adventure/SB/Solvang-Clouds" alt="Santa Barbara" />
          <img className="adventure-image" src="https://res.cloudinary.com/amandaeric/image/upload/f_auto/adventure/SB/Solvang-Windmill" alt="Santa Barbara" />
        </div>
      </div>
      <div className="adventure-row">
        <div className="adventure-col adventure-text">
          {/* Santa Barbara */}
          <div className="adventure-section">
            <div className="adventure-summary">Los Olivos, Solvang, Orcutt, Santa Ynez and Santa Barbara</div>
            <div className="adventure-info">
              <div className="adventure-description">This area includes 2 AVAs and quite a wide variety of different towns.</div>
                {/* SEE */}
                <Collapsible trigger="↓ SEE" triggerWhenOpen="➞ SEE" >
                <div className="adventure-options-links">
                  <ul className="adventure-entry">
                    <div className="adventure-header">
                      <div>•</div>
                      <div className="adventure-name">SANTA BARBARA</div>
                    </div>
                      <div className="adventure-detail">Most people have heard of Santa Barbara and we really haven’t spent too much time there so we don’t have any recommendations but there is a ton of stuff to do, eat, and drink there and worth a visit if you’ve never been.</div>
                  </ul>
                  <ul className="adventure-entry">
                    <div className="adventure-header">
                      <div>•</div>
                      <div className="adventure-name">SOLVANG</div>
                    </div>
                      <div className="adventure-detail">Why wouldn’t there be a Danish-style town in the middle of California? Complete with windmills, restaurants, a lot of wine tasting rooms, and other assorted Danish stuff, Solvang is a really fun little town to spend either a couple hours in.</div>
                  </ul>
                  <ul className="adventure-entry">
                    <div className="adventure-header">
                      <div>•</div>
                      <div className="adventure-name">LOS OLIVOS</div>
                    </div>
                      <div className="adventure-detail">The town of Los Olivos is basically two streets full of restaurants and wine tasting rooms right on the outskirts of the Santa Ynez AVA.</div>
                  </ul>
                </div>
                </Collapsible>
                {/* DO */}
                <Collapsible trigger="↓ DO" triggerWhenOpen="➞ DO" >
                <div className="adventure-options-links">
                  <ul className="adventure-entry">
                    <div className="adventure-header">
                      <div>•</div>
                      <div className="adventure-name">LAKE CACHUMA&nbsp;&nbsp;|</div><div className="adventure-town">SANTA YNEZ</div>
                    </div>
                      <div className="adventure-detail">Lake Cachuma is a half an hour away from Santa Barbara and offers camping, boating, and fishing options.</div>
                  </ul>
                  <ul className="adventure-entry">
                    <div className="adventure-header">
                      <div>•</div>
                      <div className="adventure-name">HIKING</div>
                    </div>
                      <div className="adventure-detail">We haven’t done any of them, but according to the internet there are a ton of hiking options around Santa Barbara that look to offer amazing ocean views.</div>
                  </ul>
                </div>
                </Collapsible>
                {/* EAT */}
                <Collapsible trigger="↓ EAT" triggerWhenOpen="➞ EAT" >
                <div className="adventure-options-links">
                  <ul className="adventure-entry">
                    <div className="adventure-header">
                      <div>•</div>
                      <div className="adventure-name">ANDERSON'S SPLIT PEA SOUP&nbsp;&nbsp;|</div><div className="adventure-town">BUELLTON</div>
                    </div>
                      <div className="adventure-detail">Buellton is famous for being the home to Anderson’s Split Pea Soup. It's pretty good soup but probably only worth the stop if you either really like pea soup or are looking for a very ridiculous place to stop.</div>
                  </ul>
                  <ul className="adventure-entry">
                    <div className="adventure-header">
                      <div>•</div>
                      <div className="adventure-name">ÆBLESKIVERS&nbsp;&nbsp;|</div><div className="adventure-town">SOLVANG</div>
                    </div>
                      <div className="adventure-detail">This danish pastry is a tasty mix between a donut hole and pancake and can be found in Solvang. The Red Viking and Solvang Brewing company both make very solid Æbleskivers.</div>
                  </ul>
                  <ul className="adventure-entry">
                    <div className="adventure-header">
                      <div>•</div>
                      <div className="adventure-name">OLIVE OIL TASTING&nbsp;&nbsp;|</div><div className="adventure-town">LOS OLIVOS</div>
                    </div>
                      <div className="adventure-detail">Olive Oil Farms does good olive oil and balsamic tasting in Los Olivos while Rancho Olivos is located just outside town and features a pudgy corgi.</div>
                  </ul>
                  <ul className="adventure-entry">
                    <div className="adventure-header">
                      <div>•</div>
                      <div className="adventure-name">CHEF RICK'S ULTIMATE FINE FOODS&nbsp;&nbsp;|</div><div className="adventure-town">ORCUTT</div>
                    </div>
                      <div className="adventure-detail">Despite the bizarre name, we ate here once and thought it was pretty good.</div>
                  </ul>
                </div>
                </Collapsible>
                {/* Brewereis */}
                <Collapsible trigger="↓ BREWERIES" triggerWhenOpen="➞ BREWERIES" >
                <div className="adventure-options-links">
                <div className="drinking-note">There are 6-7 breweries in Santa Barbara that we have not been to yet, but are sure some of them are worth checking out.</div>
                  <ul className="adventure-entry">
                    <div className="adventure-header">
                      <div>•</div>
                      <div className="adventure-name">CAPTAIN FATTY'S&nbsp;&nbsp;|</div><div className="adventure-town">GOLETA & SANTA BARBARA</div>
                    </div>
                  </ul>
                  <ul className="adventure-entry">
                    <div className="adventure-header">
                      <div>•</div>
                      <div className="adventure-name">SOLVANG BREWING&nbsp;&nbsp;|</div><div className="adventure-town">SOLVANG</div>
                    </div>
                  </ul>
                </div>
                </Collapsible>
                {/* WINERY */}
                <Collapsible trigger="↓ WINERIES" triggerWhenOpen="➞ WINERIES" >
                <div className="adventure-options-links">
                  <div className="drinking-note">The Santa Maria AVA is very small but worth the journey as it has a couple of gems in it.</div>
                  <ul className="adventure-entry">
                    <div className="adventure-header">
                      <div>•</div>
                      <div className="adventure-name">CAMBRIA</div>
                    </div>
                      <div className="adventure-detail">Cambria is probably one of our favorite wineries so we very highly recommend the trip out there.</div>
                  </ul>
                  <ul className="adventure-entry">
                    <div className="adventure-header">
                      <div>•</div>
                      <div className="adventure-name">PRESQU'ILE</div>
                    </div>
                      <div className="adventure-detail">The name and place are a little pretentious but the tasting room and views are spectacular. Their wine was also pretty solid.</div>
                  </ul>
                  <ul className="adventure-entry">
                    <div className="adventure-header">
                      <div>•</div>
                      <div className="adventure-name">FOXEN</div>
                    </div>
                      <div className="adventure-detail">Tasting room was nothing special but the wine was solid.</div>
                  </ul>
                  <ul className="adventure-entry">
                    <div className="adventure-header">
                      <div>•</div>
                      <div className="adventure-name">COTTONWOOD CANYON</div>
                    </div>
                      <div className="adventure-detail">Tasting room was nothing special but the wine was solid.</div>
                  </ul>
                  <div className="drinking-note">The Santa Ynez AVA is probably in between Edna Valley and Paso in terms of price and quality of wine. We’ve gone to a few wineries here and haven’t been blown away by any of the experiences, but the wine is very good.</div>
                  <ul className="adventure-entry">
                    <div className="adventure-header">
                      <div>•</div>
                      <div className="adventure-name">SHOESTRING</div>
                    </div>
                  </ul>
                  <ul className="adventure-entry">
                    <div className="adventure-header">
                      <div>•</div>
                      <div className="adventure-name">LINCOURT</div>
                    </div>
                  </ul>
                  <ul className="adventure-entry">
                    <div className="adventure-header">
                      <div>•</div>
                      <div className="adventure-name">SUNSTONE</div>
                    </div>
                  </ul>
                  <ul className="adventure-entry">
                    <div className="adventure-header">
                      <div>•</div>
                      <div className="adventure-name">BUTTONWOOD</div>
                    </div>
                  </ul>
                </div>
                </Collapsible>
              </div>
              <div className="lodging-map-mobile"><a href="https://www.google.com/maps/d/u/0/viewer?mid=1lLgrCHh9hUS6eeHtKnHL8aHq6glkL9Ed&ll=34.420832100000005%2C-119.6982057&z=17" target="_blank" rel="noopener noreferrer">View recommendations on a map</a></div>
            </div>
          </div>
        <div className="adventure-col adventure-iframe-container">
          <div className="map-link">If you are having trouble with the map, click <a href="https://www.google.com/maps/d/u/0/viewer?mid=1lLgrCHh9hUS6eeHtKnHL8aHq6glkL9Ed&ll=34.66160111634897%2C-120.14395355&z=10" target="_blank">here.</a></div>
          <iframe className="adventure-responsive-iframe" title="Santa Barbara Map" src="https://www.google.com/maps/d/embed?mid=1lLgrCHh9hUS6eeHtKnHL8aHq6glkL9Ed"></iframe>
        </div>
      </div>
      <div className="back-to-top"><a className="hyperlink" href="#top">Back to Top</a></div>
      {/* Ventura County */}
      <div className="adventure-section-header" id="ventura">
        <img className="adventure-olive-branch" src="https://res.cloudinary.com/amandaeric/image/upload/f_auto/site-assets/olive-branch.png" alt="Olive Branch" />
        <div className="adventure-section-title">Ventura County</div>
      </div>
      <div>
        <div className="adventure-picture-row">
          <img className="adventure-image" src="https://res.cloudinary.com/amandaeric/image/upload/f_auto/adventure/VENTURA/Channel" alt="Ventura" />
          <img className="adventure-image" src="https://res.cloudinary.com/amandaeric/image/upload/f_auto/adventure/VENTURA/Fox" alt="Ventura" />
          <img className="adventure-image" src="https://res.cloudinary.com/amandaeric/image/upload/f_auto/adventure/VENTURA/Beer" alt="Ventura" />
          <img className="adventure-image" src="https://res.cloudinary.com/amandaeric/image/upload/f_auto/adventure/VENTURA/PacificNoru" alt="Ventura" />
        </div>
      </div>
      <div className="adventure-row">
        <div className="adventure-col adventure-text">
          <div className="adventure-section">
            <div className="adventure-summary">Oxnard, Ventura, Camarillo, and Channel Islands</div>
            <div className="adventure-info">
              <div className="adventure-description">This is at the very southern end of the Central Coast but we couldn’t leave it out because it does have a couple of really fun places to go/eat.</div>
                {/* SEE */}
                <Collapsible trigger="↓ SEE" triggerWhenOpen="➞ SEE" >
                <div className="adventure-options-links">
                  <ul className="adventure-entry">
                    <div className="adventure-header">
                      <div>•</div>
                      <div className="adventure-name">CHANNEL ISLANDS</div>
                    </div>
                      <div className="adventure-detail">If you are spending a good amount of time in the area we highly recommend spending a day on one of the channel islands. There are numerous kayaking or scuba trips around the islands or you can just spend a couple hours on one of the islands hiking around. We did a day trip to Santa Cruz island and just hiked around for 6 hours and thoroughly enjoyed ourselves. You can also go to Santa Rosa and Anacapa, but keep in mind only Santa Rosa and Santa Cruz are home to island foxes which are just adorable.</div>
                  </ul>
                </div>
                </Collapsible>
                {/* DO */}
                <Collapsible trigger="↓ DO" triggerWhenOpen="➞ DO" >
                <div className="adventure-options-links">
                <ul className="adventure-entry">
                    <div className="adventure-header">
                      <div>•</div>
                      <div className="adventure-name">GOLF N' STUFF</div>
                    </div>
                      <div className="adventure-detail">As the name suggests, this has mutliple mini-golf adventures and an arcade.</div>
                  </ul>
                </div>
                </Collapsible>
                {/* EAT */}
                <Collapsible trigger="↓ EAT" triggerWhenOpen="➞ EAT" >
                <div className="adventure-options-links">
                  <ul className="adventure-entry">
                    <div className="adventure-header">
                      <div>•</div>
                      <div className="adventure-name">RUMFISH Y VINO&nbsp;&nbsp;|</div><div className="adventure-town">VENTURA</div>
                    </div>
                      <div className="adventure-detail">We have dined here at least 5 times on our way to and from SLO and love the food each time.</div>
                  </ul>
                  <ul className="adventure-entry">
                    <div className="adventure-header">
                      <div>•</div>
                      <div className="adventure-name">PACIFIC&nbsp;&nbsp;|</div><div className="adventure-town">VENTURA</div>
                    </div>
                      <div className="adventure-detail">We have only gone here once so far but were blown away by the food.</div>
                  </ul>
                </div>
                </Collapsible>
                {/* Brewereis */}
                <Collapsible trigger="↓ BREWERIES" triggerWhenOpen="➞ BREWERIES" >
                <div className="adventure-options-links">
                  <div className="drinking-note">There are a number of breweries in the area but here are a few of our favorites.</div>
                  <ul className="adventure-entry">
                    <div className="adventure-header">
                      <div>•</div>
                      <div className="adventure-name">TOPA TOPA&nbsp;&nbsp;|</div><div className="adventure-town">VENTURA</div>
                    </div>
                  </ul>
                  <ul className="adventure-entry">
                    <div className="adventure-header">
                      <div>•</div>
                      <div className="adventure-name">INSTITUTION&nbsp;&nbsp;|</div><div className="adventure-town">CAMARILLO</div>
                    </div>
                  </ul>
                  <ul className="adventure-entry">
                    <div className="adventure-header">
                      <div>•</div>
                      <div className="adventure-name">MADEWEST&nbsp;&nbsp;|</div><div className="adventure-town">VENTURA</div>
                    </div>
                  </ul>
                </div>
                </Collapsible>
              </div>
              <div className="lodging-map-mobile"><a href="https://www.google.com/maps/d/u/0/viewer?mid=1o4VyfiVhzzx3Tnrsjk7hbVpG37Iku6lr&ll=34.12952402809401%2C-119.48143359999999&z=10" target="_blank" rel="noopener noreferrer">View recommendations on a map</a></div>
            </div>
          </div>
        <div className="adventure-col adventure-iframe-container">
          <div className="map-link">If you are having trouble with the map, click <a href="https://www.google.com/maps/d/u/0/viewer?mid=1o4VyfiVhzzx3Tnrsjk7hbVpG37Iku6lr&hl=en&ll=34.12952402809403%2C-119.48143359999999&z=10" target="_blank">here.</a></div>
            <iframe className="adventure-responsive-iframe" title="Ventura Map" src="https://www.google.com/maps/d/embed?mid=1o4VyfiVhzzx3Tnrsjk7hbVpG37Iku6lr&hl=en"></iframe>
          </div>
      </div>
      <div className="back-to-top"><a className="hyperlink" href="#top">Back to Top</a></div>
    </main>
  );
};

export default Adventure;
