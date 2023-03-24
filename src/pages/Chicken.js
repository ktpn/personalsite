import "../App.css";
import React, { useState, useEffect } from "react";



export const Chicken = () => {

        const [days, setDays] = useState(0);
      
        useEffect(() => {
          const targetDate = new Date("February 11, 2023");
          const today = new Date();
          const timeDiff = today.getTime() - targetDate.getTime();
          const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
          setDays(daysDiff);
        }, []);

    return (
        <div classname="App">
            <div class="chicken">
                <div class="chickenstuff">
                    <h1>CAN'T STOP CHICKEN YOU OUT</h1>
                    <p>This is our venture of raising chickens <br></br>
                    and also building a chicken coop</p>
                    <p>Most facts are AI generated thanks to ChatGPT</p>

                    <h2 class="chickentitle">Chicken Age Tracker</h2>
                                <div class="centertable">
                                <table>
                                    <tr>
                                        <th>15 Chicks</th>
                                        <th>Age (days)</th>
                                        <th>Weeks</th>
                                    </tr>
                                    <tr>
                                        <td>First 3 Random</td>
                                        <td>{days}</td>
                                        <td>{((days)/7).toFixed(2)}</td>
                                    </tr>
                                    <tr>
                                        <td>4 Silkes</td>
                                        <td>{days - 11}</td>
                                        <td>{((days - 11)/7).toFixed(2)}</td>
                                    </tr>
                                    <tr>
                                        <td>Polish</td>
                                        <td>{days - 11}</td>
                                        <td>{((days - 11)/7).toFixed(2)}</td>
                                    </tr>
                                    <tr>
                                        <td>Sultan</td>
                                        <td>{days - 11}</td>
                                        <td>{((days - 11)/7).toFixed(2)}</td>
                                    </tr>
                                    <tr>
                                        <td>Easter Egger</td>
                                        <td>{days - 11}</td>
                                        <td>{((days - 11)/7).toFixed(2)}</td>
                                    </tr>
                                    <tr>
                                        <td>Rhode Island Red</td>
                                        <td>{days - 18}</td>
                                        <td>{((days - 18)/7).toFixed(2)}</td>
                                    </tr>
                                    <tr>
                                        <td>Cuckoo Maran</td>
                                        <td>{days - 18}</td>
                                        <td>{((days - 18)/7).toFixed(2)}</td>
                                    </tr>
                                    <tr>
                                        <td>Silver-Laced Wyandotte</td>
                                        <td>{days - 18}</td>
                                        <td>{((days - 18)/7).toFixed(2)}</td>
                                    </tr>
                                    <tr>
                                        <td>Black Jersey Giant</td>
                                        <td>{days - 18}</td>
                                        <td>{((days - 18)/7).toFixed(2)}</td>
                                    </tr>
                                    <tr>
                                        <td>Buff Brahma</td>
                                        <td>{days - 18}</td>
                                        <td>{((days - 18)/7).toFixed(2)}</td>
                                    </tr>
                                </table>
                                </div>
                
                    <div>
                        <h2 class="chickentitle">IT'S A FOWL!!!</h2>
                        <div class="chickenimg">
                            <a href="https://i.imgur.com/dMl3M8s.jpg" target="_blank" rel="noreferrer">
                                <img src="https://i.imgur.com/dMl3M8s.jpg" alt="Chicks in white paper bag" width="100%"></img>
                            </a>
                            <div class="chickenimgtext">
                                <p>From a straight run, we adopted 5 one week old chicks</p>
                            </div>
                        </div>
                            <div class="chickentext">
                                <p class="boldleft">02.11.2023</p>
                                <p class="left">Early in the morning we went to the market with the intention of getting 3 chicks, but once we saw them and how cute they were, we could not stop at 3 chicks and managed to get 2 more buddies for the flock.
                                    We were told they were about a week old but they look like a couple days old and we did not ask what breed they are.</p>
                                <div class="facts">
                                    <p class="left">A "Straight run" of chickens is a mixed group of newly hatched chicks that have not been sexed or sorted by gender. This means that the group will include both male and female chicks, with no way to know in advance which ones will grow up to be roosters and which will be hens.</p>
                                    <p class="left">Straight run chickens are not separated by gender at the time of hatching because it's difficult to distinguish between males and females, also more cost-effective and efficient for hatcheries to produce and sell unsorted chicks. Hatcheries typically produce large numbers of chicks at one time, and it would be time-consuming and expensive to sort and sex each individual bird.</p>
                                </div>
                                <p class="left">Before we brought them home we purchased: 
                                    <ul>
                                        <li>Medicated feed</li>
                                        <li>XL storage bin</li>
                                        <li>Heating lamp</li>
                                        <li>Space heater</li>
                                        <li>Pine wood bedding</li>
                                        <li>Digital thermometer</li>
                                        <li>Feeder</li>
                                        <li>Waterer</li>
                                        <li>Wireless security camera</li>
                                    </ul>
                                    So they would be comfortable when they arrived home.
                                </p>
                            </div>
                            <div class="chickenimg">
                                <a href="https://i.imgur.com/L9TTc0x.jpg" target="_blank" rel="noreferrer">
                                    <img src="https://i.imgur.com/L9TTc0x.jpg" alt="Chicks huddle in cardboard box with bedding" width="100%"></img>
                                </a>
                            <div class="chickenimgtext">
                                <p>In temporary transfer/playpen, everyone trying to get along.</p>
                            </div>
                        </div>
                            <h2 class="chickentitle">Chicken Nuggets &#128035; &#128036; &#128037;</h2>
                            <div class="chickenimg">
                                <a href="https://i.imgur.com/laiO55U.jpg" target="_blank" rel="noreferrer">
                                    <img src="https://i.imgur.com/laiO55U.jpg" alt="Chicks on a brown towel" width="100%"></img>
                                </a>
                                <div class="chickenimgtext">
                                    <p>The flock on the bed with a towel just in case.</p>
                                </div>
                            </div>
                                <div class="chickentext">
                                    <p class="boldleft">02.12.2023</p>
                                    <p class="left">I did not realized that something so small can poop so often. But the flock really like the feed and was gobbling it up. Also they are really messy eaters.</p>
                                    <div class="facts">
                                        <p class="left">Chicks have a unique digestive system designed to extract nutrients from food efficiently. They have a high metabolic rate and rapid growth rate, which means they need to eat frequently and excrete waste often. Their small size also means their digestive system processes food quickly, resulting in frequent bowel movements. So, chicks poop a lot because it's a natural part of their efficient digestive process and growth cycle.</p>
                                    </div>
                                </div>

                                <h2 class="chickentitle">Valentine's Day</h2>
                                <div class="chickenimg">
                                    <a href="https://i.imgur.com/Z7fOvqS.jpg" target="_blank" rel="noreferrer">
                                        <img src="https://i.imgur.com/Z7fOvqS.jpg" alt="Chick on light color speckled kitchen counter" width="100%"></img>
                                    </a>
                                    <div class="chickenimgtext">
                                        <p>"I can't stop chicken you out!"</p>
                                    </div>
                                </div>
                                <div class="chickentext">
                                    <p class="boldleft">02.14.2023</p>
                                    <p class="left">They are growing so fast! Their feathers are coming along nicely but they still look so fluffy.</p>
                                    <div class="facts">
                                        <p class="left">In some cultures, chickens have been used as symbols of love and courtship. For example, in some parts of rural China, young men give hens and roosters to their sweethearts as a sign of their affection, with the belief that the birds will mate and produce offspring, symbolizing the couple's love and the growth of their relationship. Additionally, some people believe that eating chicken on Valentine's Day can bring good luck and strengthen romantic relationships.</p>
                                    </div>
                                </div>

                                <h2 class="chickentitle">Family Photo</h2>
                                <div class="chickenimg">
                                    <a href="https://i.imgur.com/tcZle1b.jpg" target="_blank" rel="noreferrer">
                                        <img src="https://i.imgur.com/tcZle1b.jpg" alt="Five chicks in the grass" width="100%"></img>
                                    </a>
                                    <div class="chickenimgtext">
                                        <p>The Flock</p>
                                    </div>
                                </div>
                                <div class="chickentext">
                                    <p class="boldleft">02.15.2023</p>
                                    <p class="left">We had a little bit of nice weather, so we took the flock outside for some vitamin D. But we can't stay out too long the chicks need to be in very warm conditions for several weeks. </p>
                                    <div class="facts">
                                        <p class="left">The ideal temperature for chicks depends on their age. For the first week of their life, chicks require a temperature of around 95-100°F (35-38°C) in the brooder area. After the first week, the temperature can be lowered by approximately 5°F (3°C) each week until the chicks are fully feathered and can regulate their own body temperature, which usually occurs at around 6-8 weeks of age.</p>
                                    </div>
                                </div>

                                <div>
                                    <h2 class="chickentitle">Design an egg-cellent coop</h2>
                                    <div class="chickenimg">
                                        <a href="https://i.imgur.com/X4M3tzJ.png" target="_blank" rel="noreferrer">
                                            <img src="https://i.imgur.com/X4M3tzJ.png" alt="Quick 3D model of a chicken coop" width="100%"></img>
                                        </a>
                                            <div class="chickenimgtext">
                                                <p>"The Eggloo"</p>
                                            </div>
                                    </div>
                                    <div class="chickentext">
                                        <p class="boldleft">02.16.2023</p>
                                        <p class="left">Not knowing how long it will take to build, I started to model and design "The Eggloo". As the flock are growing at a fast pace I wanted to have all the time I need to design and build a coop for them to lay eggs.</p>
                                        <div class="facts">
                                            <p class="left">Chickens need a coop for several reasons:
                                                <ol>
                                                    <li>Shelter: A coop provides shelter and protection from the elements such as rain, snow, wind, and extreme temperatures.</li>
                                                    <li>Safety: A coop provides a safe and secure place for chickens to sleep and roost at night, away from predators such as foxes, raccoons, and hawks.</li>
                                                    <li>Nesting: A coop provides a safe and comfortable space for hens to lay their eggs, which helps prevent eggs from being damaged or stolen by predators.</li>
                                                    <li>Health: A coop helps prevent the spread of diseases and parasites by providing a clean and dry living space for the chickens.</li>
                                                    <li>Regulation: In many areas, there are zoning and health regulations that require chickens to be housed in a designated area, such as a coop, for public health and safety reasons.</li>
                                                </ol>
                                                Overall, a coop is an essential part of keeping chickens safe, healthy, and happy, and it provides them with a comfortable and secure place to call home.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h2 class="chickentitle">Build it and the eggs will come</h2>
                                    <div class="chickenimg">
                                        <a href="https://i.imgur.com/XHQgYaj.jpg" target="_blank" rel="noreferrer">
                                            <img src="https://i.imgur.com/XHQgYaj.jpg" alt="Truck bed with wood boards and studs" width="100%"></img>
                                        </a>
                                            <div class="chickenimgtext">
                                                <p>The first of many trips to Lowe's.</p>
                                            </div>
                                    </div>
                                    <div class="chickentext">
                                        <p class="boldleft">02.18.2023</p>
                                        <p class="left">
                                            So we went to Lowe's and started buying the materials needed to build the chicken coop.
                                            Knowing the basic idea of what kind of chicken coop we wanted we started off by purchasing
                                            several wood panals, 2x4s and a couple wood screws to begin the build.
                                            <br></br>
                                            <br></br>
                                            Note, I do not have any prior experience in framing a structure or building a large structure so most of my information and knowledge will be from YouTube.

                                        </p>
                                        <div class="facts">
                                            <p class="left">
                                                In ancient Rome, chickens were sometimes kept in small mobile coops called "arcas". These coops were designed to be moved around the garden or yard so that the chickens could feed on insects and weeds, while also fertilizing the soil. This practice of using mobile coops for chickens is still popular today and is known as "chicken tractor" or "mobile coop" farming.
                                            </p>
                                            <div class="chickenimg">
                                                <a href="https://i.imgur.com/Ay91duw.jpg" target="_blank" rel="noreferrer">
                                                    <img src="https://i.imgur.com/Ay91duw.jpg" alt="Assortment of chicks in wood chip bedding in the corner" width="100%"></img>
                                                </a>
                                                <div class="chickenimgtext">
                                                    <p>Updated flock picture</p>
                                                </div>
                                            </div>
                                            
                                            
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h2 class="chickentitle">Working around the cluck</h2>
                                    <div class="chickenimg">
                                        <a href="https://i.imgur.com/zy9tjaf.jpg" target="_blank" rel="noreferrer">
                                            <img src="https://i.imgur.com/zy9tjaf.jpg" alt="wood structure with legs and larger cut out on top a fence panel" width="100%"></img>
                                        </a>
                                    <div class="chickenimgtext">
                                    <p>The base and the walls with the door opening.</p>
                                    </div>
                                    </div>
                                    <div class="chickentext">
                                    <p class="boldleft">02.20.2023</p>
                                    <p class="left">
                                        Managed to build the base with legs and attached some wood panels to make up the floor and the walls of the chicken coop.
                                        I was able to cut all the wood with just a circular saw.
                                        The legs of the coop is just 1ft off the ground and the dimensions of the coop box is 4ft x 4ft x 4ft without the legs. I went with this dimension to reduce the amount of cutting.
                                        One thing to remember is to always measure twice before cutting, even measure three times to be sure.
                                        One of my favortite tools to use is the <a href="https://www.lowes.com/pd/Swanson-Tool-Company-SpeedLite-8-in-Square/3009613">Swanson speed square</a>, I do highly recommend it especially for measuring 2x4s. 
                                    </p>
                                    <div class="facts">
                                    <p class="left">A speed square, also known as a rafter square or triangle square, is a measuring tool used by carpenters and other tradespeople to make quick and accurate measurements and cuts. It is typically made of metal or plastic and is shaped like a right-angled triangle with a lip or heel along one edge.
                                        Some of the common uses of a speed square include:
                                        <ol>
                                            <li>Marking and measuring angles: The speed square's angled edge allows carpenters to easily mark and measure angles of 90, 45, and 30 degrees.</li>
                                            <li>Determining roof pitch: Roofers use a speed square to determine the pitch or slope of a roof.</li>
                                            <li>Making square cuts: The lip or heel of the speed square can be used as a guide for making straight, square cuts with a circular saw or hand saw.</li>
                                            <li>Measuring and marking lumber: The speed square can be used to measure and mark lumber for cutting or notching.</li>
                                        </ol>
                                        Overall, a speed square is a versatile and handy tool that can be used for a wide range of measuring and cutting tasks in construction and woodworking projects.
                                    </p>
                                    <div class="chickenimg">
                                        <a href="https://i.imgur.com/uxhozp9.jpg" target="_blank" rel="noreferrer">
                                            <img src="https://i.imgur.com/uxhozp9.jpg" alt="orange speed square" width="100%"></img>
                                        </a>
                                    <div class="chickenimgtext">
                                    <p>Swanson Speed Square</p>
                                    </div>
                                    </div>
                                    </div>
                                    </div>
                                </div>
                                <div>
                                    <h2 class="chickentitle">The Plot Chickens</h2>
                                    <div class="chickenimg">
                                        <a href="https://i.imgur.com/lHm4Lbt.jpg" target="_blank" rel="noreferrer">
                                            <img src="https://i.imgur.com/lHm4Lbt.jpg" alt="An assortment of seven chicks with bedding in a box" width="100%"></img>
                                        </a>
                                        <div class="chickenimgtext">
                                            <p>Added 7 more chicks to the flock, lots of fluffy butts</p>
                                        </div>
                                    </div>
                                    <div class="chickentext">
                                        <p class="boldleft">02.22.2023</p>
                                        <p class="left">
                                            The previous weekend we drove by a place that had chicks for sale, so we returned to the store when they got their weekly shipment of chicks.
                                            They had a wide selection of breeds to pick from and we decided to add 7 more chicks to our flock.
                                            We picked out 4 Silkies, 2 from the Crested Special bin and 1 from the Easter Eggers.
                                        </p>
                                    <div class="chickenimg">
                                        <a href="https://i.imgur.com/C8uezzF.jpg" target="_blank" rel="noreferrer">
                                            <img src="https://i.imgur.com/C8uezzF.jpg" alt="Silkie selection with price" width="100%"></img>
                                        </a>
                                            <div class="chickenimgtext">
                                                <p>Potential Silkie breeds we might have</p>
                                            </div>
                                    </div>
                                    <div class="chickenimg">
                                        <a href="https://i.imgur.com/tu5ECq6.jpg" target="_blank" rel="noreferrer">
                                            <img src="https://i.imgur.com/tu5ECq6.jpg" alt="Crested Specials selection with price" width="100%"></img>
                                        </a>
                                            <div class="chickenimgtext">
                                                <p>Crested Special breeds we might have, hoping for the Sultan and a Polish.</p>
                                            </div>
                                    </div>
                                    <div class="chickenimg">
                                        <a href="https://i.imgur.com/LCtXL97.jpg" target="_blank" rel="noreferrer">
                                            <img src="https://i.imgur.com/LCtXL97.jpg" alt="Easter Egger sign with price" width="100%"></img>
                                        </a>
                                            <div class="chickenimgtext">
                                                <p>Easter Egger, hoping for blue eggs</p>
                                            </div>
                                    </div>
                                    <div class="chickenimg">
                                        <a href="https://i.imgur.com/g7oIPMo.jpg" target="_blank" rel="noreferrer">
                                            <img src="https://i.imgur.com/g7oIPMo.jpg" alt="Chick selection sheet" width="100%"></img>
                                        </a>
                                            <div class="chickenimgtext">
                                                <p>Our order sheet.</p>
                                            </div>
                                    </div>
                                    <div class="chickentext">
                                            <p class="left">
                                                We also purchased a water supplement for our chicks to help support their digestive health and provide them with important nutrients.
                                                We went with <a href="https://www.mannapro.com/poultry/supplements-care/hydro-hen">Manna Pro Hydro-Hen 3-in-1 Probiotics + Electrolytes + Acidifiers</a> as it seem to provide everything we are looking for.
                                                <br></br>
                                                <br></br>
                                                Manna Pro is well known brand and this product has great reviews, easy to use with measuring cup provided, and not so expensive.
                                                Also this is not a paid sponsorship, but if Manna Pro wanted to sponsor us or send us some free products to try we would be very egg-cited to!
                                            </p>
                                    </div>
                                    <div class="chickenimg">
                                        <a href="https://i.imgur.com/9cdBSsZ.jpg" target="_blank" rel="noreferrer">
                                            <img src="https://i.imgur.com/9cdBSsZ.jpg" alt="Manna Pro Hydro-hen supplement" width="100%"></img>
                                        </a>
                                            <div class="chickenimgtext">
                                                <p>Drinking water supplement for our chicks</p>
                                            </div>
                                    </div>

                                    <div class="chickentext">
                                            <p class="left">
                                                Making the roof for the chicken coop was bit of a complicated task. So we decided on a single slant style roof as it seemed like an easier type of roof to build.
                                                Cutting out the rafters and figuring what roof pitch to use was a daunting task but after many cuts, I managed to get the rafters to fit correctly and get the roof panel installed!
                                                Also added more legs for the chicken coop to make it more secure.
                                                <br></br>
                                                <br></br>
                                                Next step is to cut out and install panels to cover up the openings below the roof and selecting the type of material for the roofing.
                                                Also start working on the nesting boxes, I think we will add nesting boxes to both sides of the chicken coop so our chickens will have an abundant of nesting box selection and to future-proof our coop if we later decide to add more chickens. &#128020; &#128020; &#128020; 
                                            </p>
                                    </div>
                                    <div class="chickenimg">
                                        <a href="https://i.imgur.com/3TNnogm.jpg" target="_blank" rel="noreferrer">
                                            <img src="https://i.imgur.com/3TNnogm.jpg" alt="Chicken coop frontal view with single slant roof all unpainted and unfinished, with chicken door cut out" width="100%"></img>
                                        </a>
                                            <div class="chickenimgtext">
                                                <p>Made rafters and added the roof panel. Also cut out the chicken door.</p>
                                            </div>
                                    </div>
                                    </div>
                                </div>
                                <div>
                                        <h2 class="chickentitle">Fowl Play</h2>
                                        <div class="chickenimg">
                                            <a href="https://i.imgur.com/eEVoyd3.jpg" target="_blank" rel="noreferrer">
                                                <img src="https://i.imgur.com/eEVoyd3.jpg" alt="Chicks in the corner with red light in bedding" width="100%"></img>
                                            </a>
                                            <div class="chickenimgtext">
                                                <p>Some of the new chicks cuddling up in the corner.</p>
                                            </div>
                                        </div>
                                        <div class="chickentext">
                                            <p class="boldleft">02.24.2023</p>
                                            <p class="left">
                                                We tried to introduce the new chicks with our older chicks by separating them during the day and adding them together at night.
                                                But after two days, two of the older chicks seem to be more agressive to the newer chicks. Also note, the chicks are just a two week age difference and this seems like a big difference since they grow so fast.
                                                <br></br>
                                                <br></br>
                                                The two older chicks would sometimes trample and peck/pick-on the new chicks causing the new chicks to peep a lot, so we decided to give the two older chicks away to minimize the stress on our flock.
                                                We gave away the two older chicks to a local farmer looking to add to their farm. After the two agressors were gone the whole flock was much quietier and a lot less fussier than before.
                                                Now our total flock consists of 10 chicks.
                                            </p>
                                            <div class="facts">
                                                <p class="left">
                                                    Introducing new chicks to older chicks can be a delicate process, as it is important to prevent aggression and ensure the safety and well-being of all the birds. Here are some steps to follow when introducing new chicks to older chicks:
                                                    <ol>
                                                        <li>Quarantine: Before introducing new chicks to the flock, it is important to quarantine them for at least a week to monitor their health and ensure they are not carrying any diseases that could spread to the existing flock.</li>
                                                        <li>Gradual introduction: Rather than introducing the new chicks to the entire flock at once, gradually introduce them to a smaller group of older chicks, ideally ones that are around the same size and age. This can be done by placing the new chicks in a separate area within the coop, where they can see and hear the older chicks, but are separated by a barrier or fence.</li>
                                                        <li>Supervision: It is important to closely monitor the interactions between the new and old chicks during the initial introduction period. Be prepared to intervene if any aggression or bullying occurs, and separate any chicks that are being overly aggressive towards the new arrivals.</li>
                                                        <li>Provide enough space: Make sure the coop and run are large enough to accommodate all the birds comfortably. Providing enough space can help prevent overcrowding and reduce the risk of aggression.</li>
                                                        <li>Provide distractions: To help reduce aggression and boredom, provide plenty of distractions in the form of perches, toys, and hiding places for the birds.</li>
                                                        <li>Consider age differences: Depending on the age difference between the new and old chicks, it may be best to keep them separated until they are closer in size and strength.</li>
                                                    </ol>
                                                    In summary, introducing new chicks to older chicks requires careful planning, gradual introduction, close supervision, and adequate space and distractions for the birds. By following these steps, you can help ensure a successful integration and a harmonious flock.
                                                </p>
                                            </div>
                                            <div class="chickenimg">
                                                <a href="https://i.imgur.com/zaAQLnm.jpg" target="_blank" rel="noreferrer">
                                                    <img src="https://i.imgur.com/zaAQLnm.jpg" alt="Unpainted wooden chicken coop with nesting boxes added to both sides" width="100%"></img>
                                                </a>
                                                <div class="chickenimgtext">
                                                    <p>Nesting boxes installed.</p>
                                                </div>
                                            </div>
                                            <div class="chickenimg">
                                                <a href="https://i.imgur.com/aqO68V3.jpg" target="_blank" rel="noreferrer">
                                                    <img src="https://i.imgur.com/aqO68V3.jpg" alt="Unpainted wooden chicken coop with nesting boxes added to both sides view from the rear" width="100%"></img>
                                                </a>
                                                <div class="chickenimgtext">
                                                    <p>Nesting boxes installed. Rear view.</p>
                                                </div>
                                            </div>
                                            <div class="chickentext">
                                            <p class="left">
                                                Installed the nesting boxes to both sides of the coop, these will be contain 3 nesting boxes per each side with approximate dimensions of 12 inch x 12 inch x 12 inch or nesting space as recommended through several Google Searches.
                                                <br></br>
                                                <br></br>
                                                Along with looking up information for nesting boxes, we found out one nesting box will be good for 4 to 6 hens and the hens will determine which nesting box will be favored and will mostly lay in that box.
                                                The hinges for the roofing of the nesting boxes have not come in yet so right now they just sit on the nesting boxes.
                                                <br></br>
                                                <br></br>
                                                Next step is to finalize on a roofing type/material and start with painting and sealing coop.
                                            </p>
                                            </div>
                                            <div class="chickenimg">
                                                <a href="https://i.imgur.com/C9Vozyy.jpg" target="_blank" rel="noreferrer">
                                                    <img src="https://i.imgur.com/C9Vozyy.jpg" alt="Chick with pasty butt sleeping" width="100%"></img>
                                                </a>
                                                <div class="chickenimgtext">
                                                    <p>A Silkie with Pasty Butt spotted.</p>
                                                </div>
                                            </div>
                                            <div class="chickentext">
                                                <p class="left">
                                                    Noticed a Silkie with pasty butt.
                                                    What we did was with warm water soften the dropping and feathers affected to loosen up the dried poop limiting the area that would get wet so the chick would not get cold.
                                                    Then removed the poop and dry the area with a paper towel or toilet paper by lighly tapping or wiping.
                                                    We did this under a heater fan so the chick would not get so cold.
                                                    <br></br>
                                                    <br></br>
                                                    The Silkies seem to have pasty butt more commonly due to their more fluffy/feathered butts.
                                                    So we will have to check them more often.
                                                </p>
                                                <div class="facts">
                                                    <p class="left">
                                                        Chick pasty butt is a common condition in newly hatched chicks where their droppings get stuck to their feathers around their vent area, creating a blockage. This can be harmful to chicks as it can prevent them from defecating and can lead to dehydration or infection. Here are some reasons why chicks may develop pasty butt and how to fix it:
                                                        <ol>
                                                            <li>Diet: The main cause of pasty butt is a poor diet, especially in the first few days after hatching. If the chick's diet lacks the necessary nutrients, their droppings can become sticky and lead to blockage. Ensure that the chicks are eating a high-quality chick starter feed that meets their nutritional needs.</li>
                                                            <li>Stress: Chicks can get stressed easily, which can affect their digestive system and cause pasty butt. Stress can be caused by various factors such as cold temperature, overcrowding, or being handled too frequently. Keep the brooder warm, provide enough space for the chicks to move around, and handle them gently.</li>
                                                            <li>Hygiene: Cleanliness is crucial to prevent pasty butt. Make sure to keep the brooder clean and dry, and change the bedding regularly.</li>
                                                        </ol>
                                                        To fix pasty butt, you will need to gently remove the dried droppings from the chick's vent area. Here's how:
                                                        <ol>
                                                            <li>Prepare a shallow bowl of warm water and dip the chick's bottom into the water for a few seconds.</li>
                                                            <li>Gently massage the dried droppings until they start to loosen.</li>
                                                            <li>Use a soft cloth or paper towel to wipe away the droppings.</li>
                                                            <li>Dry the chick's bottom with a clean towel and apply a small amount of petroleum jelly or coconut oil to the area to prevent further blockage.</li>
                                                        </ol>
                                                        It's important to check the chicks regularly and remove any dried droppings promptly to prevent pasty butt from recurring.
                                                    </p>
                                                </div>
                                                <div class="chickenimg">
                                                    <a href="https://i.imgur.com/ws5e5Gy.jpg" target="_blank" rel="noreferrer">
                                                        <img src="https://i.imgur.com/ws5e5Gy.jpg" alt="Two Silkies asleep under red light" width="100%"></img>
                                                    </a>
                                                    <div class="chickenimgtext">
                                                        <p>Clean and sleepy butt.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                                <div>
                                        <h2 class="chickentitle">Painting</h2>
                                        <div class="chickenimg">
                                            <a href="https://i.imgur.com/WdbTlbR.jpg" target="_blank" rel="noreferrer">
                                                <img src="https://i.imgur.com/WdbTlbR.jpg" alt="Chicken coop first layer of white paint" width="100%"></img>
                                            </a>
                                            <div class="chickenimgtext">
                                                <p>First layer of paint.</p>
                                            </div>
                                        </div>
                                        <div class="chickentext">
                                            <p class="boldleft">02.25.2023</p>
                                            <p class="left">
                                                Began painting the coop, we used Kilz 2 All-purpose paint as it great primer/sealer and mildew resistant also it was a inexpensive option.
                                                We will need to paint at least two layers to make the paint look even and we also plan on painting the inside of the coop to prevent mildew and mold.

                                            </p>
                                        </div>
                                </div>
                                <div>
                                        <h2 class="chickentitle">Roof on the coop-da-ville</h2>
                                        <div class="chickenimg">
                                            <a href="https://i.imgur.com/27OjNZ9.jpg" target="_blank" rel="noreferrer">
                                                <img src="https://i.imgur.com/27OjNZ9.jpg" alt="White chicken coop with roof installed" width="100%"></img>
                                            </a>
                                            <div class="chickenimgtext">
                                                <p>Roof installed.</p>
                                            </div>
                                        </div>
                                        <div class="chickenimg">
                                            <a href="https://i.imgur.com/8qdKf3i.jpg" target="_blank" rel="noreferrer">
                                                <img src="https://i.imgur.com/8qdKf3i.jpg" alt="White chicken coop with roof installed. Rear view." width="100%"></img>
                                            </a>
                                            <div class="chickenimgtext">
                                                <p>Roof installed. Rear view.</p>
                                            </div>
                                        </div>
                                        <div class="chickentext">
                                            <p class="boldleft">02.28.2023</p>
                                            <p class="left">
                                                For the roofing material, we went with the Tuftex SeaCoaster tan PVC plastic roof panels as they were inexpensive and very easy to install.
                                                Also finished adding second coat of paint on the coop and made the chicken door.
                                                The chicken door we will probably have on a string to easily open and close it. Maybe later on we will look into installing a automatic chicken door so that we won't have to wake up early to let the chickens out.
                                            </p>
                                            <div class="facts">
                                                <p class="left">
                                                    Chickens require some time outside each day for exercise, fresh air, and access to sunlight. As a general rule, chickens should have access to the outdoors for at least a few hours each day, preferably during daylight hours.
                                                    <br></br>
                                                    <br></br>
                                                    The exact amount of time that chickens need to spend outside each day can depend on a variety of factors, such as the breed of chicken, the climate in which they live, and the size of their outdoor enclosure. Some experts recommend allowing chickens to spend as much time as possible outside, while others suggest a minimum of 2-4 hours per day.
                                                    <br></br>
                                                    <br></br>
                                                    It's important to note that chickens also need access to a safe and secure indoor area, such as a coop or shelter, where they can roost, nest, and protect themselves from predators. The outdoor area should be protected by fencing or netting to prevent predators from accessing the birds.
                                                    <br></br>
                                                    <br></br>
                                                    Overall, providing your chickens with access to the outdoors for a few hours each day, along with a safe and secure indoor area, can help ensure that they remain healthy and happy.
                                                </p>
                                            </div>
                                        </div>
                                        <div class="chickenimg">
                                            <a href="https://i.imgur.com/Q9ea4os.jpg" target="_blank" rel="noreferrer">
                                                <img src="https://i.imgur.com/Q9ea4os.jpg" alt="3D printed chicken mail flag in black" width="100%"></img>
                                            </a>
                                            <div class="chickenimgtext">
                                                <p>3D printed a chicken mail flag. To let everyone know all the chicks we have.</p>
                                            </div>
                                        </div>
                                </div>
                                <div>
                                        <h2 class="chickentitle">More Chicken Nuggets</h2>
                                        <div class="chickenimg">
                                            <a href="https://i.imgur.com/6ix8ZqC.jpg" target="_blank" rel="noreferrer">
                                                <img src="https://i.imgur.com/6ix8ZqC.jpg" alt="Sign for Rhode Island Red with many chicks" width="100%"></img>
                                            </a>
                                            <div class="chickenimgtext">
                                                <p>Rhode Island Reds</p>
                                            </div>
                                        </div>
                                        <div class="chickenimg">
                                            <a href="https://i.imgur.com/tnO0ZgJ.jpg" target="_blank" rel="noreferrer">
                                                <img src="https://i.imgur.com/tnO0ZgJ.jpg" alt="Sign for Silver-Laced Wyandotte with many chicks" width="100%"></img>
                                            </a>
                                            <div class="chickenimgtext">
                                                <p>Silver-Laced Wyandottes</p>
                                            </div>
                                        </div>
                                        <div class="chickenimg">
                                            <a href="https://i.imgur.com/qkBchCa.jpgg" target="_blank" rel="noreferrer">
                                                <img src="https://i.imgur.com/qkBchCa.jpgg" alt="Sign for Cuckoo Marans with many chicks" width="100%"></img>
                                            </a>
                                            <div class="chickenimgtext">
                                                <p>Cuckoo Marans</p>
                                            </div>
                                        </div>
                                        <div class="chickenimg">
                                            <a href="https://i.imgur.com/8naRR7Q.jpg" target="_blank" rel="noreferrer">
                                                <img src="https://i.imgur.com/8naRR7Q.jpg" alt="Sign for Black Jersey Giants with many chicks" width="100%"></img>
                                            </a>
                                            <div class="chickenimgtext">
                                                <p>Black Jersey Giants</p>
                                            </div>
                                        </div>
                                        <div class="chickenimg">
                                            <a href="https://i.imgur.com/vxQBMMN.jpg" target="_blank" rel="noreferrer">
                                                <img src="https://i.imgur.com/vxQBMMN.jpg" alt="Sign for Buff Brahmas with many chicks" width="100%"></img>
                                            </a>
                                            <div class="chickenimgtext">
                                                <p>Buff Brahmas</p>
                                            </div>
                                        </div>
                                        <div class="chickentext">
                                            <p class="boldleft">03.01.2023</p>
                                            <p class="left">
                                                So we went back to the chick store cause they got a new shipment of chicks today of different breeds this week and we wanted to see what they had.
                                                After checking out all the breeds, we ended up leaving with 5 baby chicks. One of each breed, Rhode Island Red, Silver-Laced Wyandotte, Cuckoo Maran, Black Jersey Giant, and Buff Brahma.
                                                We also got a large pet play-pen so the chicks would have more space to roam around.
                                                In total our flock consists of 15 chicks and we think that is enough for now.
                                                <br></br>
                                                <br></br>
                                                <ul className="center unbullet">
                                                    <b><u>Our flock as of 03.01.2023</u></b>
                                                    <br></br>
                                                    <br></br>
                                                    <li>3 Unknown breeds</li>
                                                    <li>4 Silkies</li>
                                                    <li>1 Sultan</li>
                                                    <li>1 Polish</li>
                                                    <li>1 Easter Egger</li>
                                                    <li>1 Rhode Island Red</li>
                                                    <li>1 Cuckoo Maran</li>
                                                    <li>1 Black Jersey Giant</li>
                                                    <li>1 Silver-Laced Wyandotte</li>
                                                    <li>1 Buff Brahma</li>
                                                </ul>
                                                <br></br>
                                                <br></br>
                                            </p>
                                            <div class="facts">
                                                <p class="left">
                                                There are hundreds of different breeds of chickens, with varying physical characteristics, temperaments, and egg-laying abilities. The exact number of breeds can vary depending on the source, as there are many regional and local varieties that may not be recognized on a global scale.
                                                <br></br>
                                                <br></br>
                                                According to the American Poultry Association (APA), there are currently recognized 500 breeds and varieties of chickens worldwide, with 500 more in development. The APA recognizes breeds based on standard characteristics such as feather color, body shape, comb style, and other physical traits.
                                                <br></br>
                                                <br></br>
                                                Determining the rarest breed of chicken can be challenging, as rarity can be subjective and can vary based on geographical location. However, some breeds that are considered rare include the Ayam Cemani, a breed from Indonesia known for its black feathers and black internal organs, and the Blue Java, a breed from the Philippines known for its blue-grey feathers and gentle disposition. Other rare breeds include the Swedish Flower Hen, the Belgian Bearded d'Uccle, and the Yokohama.
                                                <br></br>
                                                <br></br>
                                                It's important to note that many rare breeds of chickens are also endangered, with some facing the risk of extinction due to a variety of factors, including habitat loss, predation, and changes in farming practices. Therefore, it's important to support efforts to conserve and protect rare and endangered breeds of chickens, as well as to promote sustainable and humane farming practices.
                                                </p>
                                            </div>
                                        </div>
                                        <div class="chickenimg">
                                            <a href="https://i.imgur.com/xG0D40I.jpg" target="_blank" rel="noreferrer">
                                                <img src="https://i.imgur.com/xG0D40I.jpg" alt="Assortment of chicks in playpen with feeders and waterer" width="100%"></img>
                                            </a>
                                            <div class="chickenimgtext">
                                                <p>Our Flock of Fifteen! &#128037;</p>
                                            </div>
                                        </div>
                                </div>
                                <div>
                                        <h2 class="chickentitle">Working around the cluck</h2>
                                        <div class="chickenimg">
                                            <a href="https://i.imgur.com/6s7DvAm.jpg" target="_blank" rel="noreferrer">
                                                <img src="https://i.imgur.com/6s7DvAm.jpg" alt="White chicken coop with ramp and new drop down vent" width="100%"></img>
                                            </a>
                                            <div class="chickenimgtext">
                                                <p>Added hinges, drop down vent, roof flashing, and a ramp.</p>
                                            </div>
                                        </div>
                                        <div class="chickenimg">
                                            <a href="https://imgur.com/bP7LIuB" target="_blank" rel="noreferrer">
                                                <img src="https://i.imgur.com/bP7LIuB.jpg" alt="Inside nesting box with dividers" width="100%" />
                                            </a>
                                            <div class="chickenimgtext">
                                                <p>Added nesting box dividers with placement holders. Black holder is 3D printed.</p>
                                            </div>
                                        </div>
                                        <div class="chickentext">
                                            <p class="boldleft">03.05.2023</p>
                                            <p class="left">
                                                Hinges arrived and got to installing them on the nesting boxes and the large door in the back.
                                                Also made a cut out vent with a screen and added the same hinges to it. We also adding roof flashing to prevent water from entering from the sides and made a small ramp from spare fencing pieces.
                                                Getting ideas for the dividers of the nesting boxes was daunting but I came up with a design that would hold it in place while maximize the chicken nesting space.
                                                I used some spare pieces of wood to hold the front of the dividers and 3D printed the back support for it.
                                            </p>
                                            <div class="facts">
                                                <p class="left">
                                                    Dividers are commonly used in chicken nesting boxes for several reasons:
                                                    <ol>
                                                        <li>
                                                            To keep the hens in their own designated nesting box: Dividers help to prevent hens from laying eggs in the same box or disrupting another hen while it's laying an egg. This can lead to egg breakage and other problems, and can also cause stress for the hens.
                                                        </li>
                                                        <li>
                                                            To provide privacy: Hens need a quiet and private place to lay their eggs. Dividers help to create a secluded space where hens can lay their eggs without disturbance from other hens or other external factors.
                                                        </li>
                                                        <li>
                                                            To prevent egg damage: Dividers help to keep the eggs in place and prevent them from rolling around or getting damaged. When hens lay their eggs, they can be quite rough with them, and without dividers, the eggs may break or crack.
                                                        </li>
                                                        <li>
                                                            To make cleaning easier: Dividers make it easier to clean the nesting boxes, as they help to keep the eggs in one place, making it less likely that they will be accidentally knocked over during cleaning.
                                                        </li>
                                                    </ol>
                                                    Overall, dividers are an essential part of chicken nesting boxes as they help to create a comfortable and safe environment for hens to lay their eggs.
                                                </p>
                                            </div>
                                        </div>
                                </div>
                                <div>
                                        <h2 class="chickentitle">Add-ons to the coop</h2>
                                        <div class="chickenimg">
                                            <a href="https://i.imgur.com/zgC2YbN.jpg" target="_blank" rel="noreferrer">
                                                <img src="https://i.imgur.com/zgC2YbN.jpg" alt="White chicken coop with two windows and two vents" width="100%"></img>
                                            </a>
                                            <div class="chickenimgtext">
                                                <p>Gave the coop some add-ons.</p>
                                            </div>
                                        </div>
                                        <div class="chickenimg">
                                            <a href="https://i.imgur.com/ZYihoIo.jpg" target="_blank" rel="noreferrer">
                                                <img src="https://i.imgur.com/ZYihoIo.jpg" alt="Back side of a chicken coop unpainted frame with a small window" width="100%"></img>
                                            </a>
                                            <div class="chickenimgtext">
                                                <p>Back door frame and window.</p>
                                            </div>
                                        </div>
                                        <div class="chickentext">
                                            <p class="boldleft">03.18.2023</p>
                                            <p class="left">We decided to change the style of the nesting boxes from a roof lift up style to a side drop down door style.</p>
                                            <p class="left">We went with this change to reduce the stress on the chickens due to when you come up from above over the chickens they think they are in danger. With the drop down door style the chicken are more at ease when you open the nesting boxes.</p>
                                            <p class="left">Also with the static roof for the nesting boxes you can seal it and greatly reduce any water leaks. Also added flashing to the nesting boxes to greater reduce the amount of any leaks.</p>
                                            <p class="left">Increased the amount of ventilation by adding more vents to the front. Added some windows so the chickens can have some light and so we can see what chicken business they are up to in the coop without distrubing them.</p>
                                            <p class="left">Added a window to the backdoor and a frame around it. The backdoor frame and the nesting box frames will need to be painted soon.</p>
                                            <div class="facts">
                                                <p class="left">Chickens have a natural instinct to perceive aerial predators, such as hawks and eagles, as a potential threat. Therefore, when something comes from above them, it can trigger this instinctive response, causing them to feel scared or threatened.</p>
                                                <p class="left">On the other hand, when something approaches them from the side, it does not trigger this instinctive response as strongly because it is not the typical angle of attack of a predator. Chickens are more accustomed to being approached from the side by other chickens or humans, so they are generally more comfortable with this approach.</p>
                                                <p class="left">This is why it's important to approach chickens from the side or at their level, especially if you are trying to handle or interact with them. By doing so, you can help to minimize their stress levels and create a more positive and comfortable environment for them.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="chickenimg">
                                            <a href="https://i.imgur.com/xocn4d1.jpg" target="_blank" rel="noreferrer">
                                                <img src="https://i.imgur.com/xocn4d1.jpg" alt="Multiple chickens inside a coop feeding" width="100%"></img>
                                            </a>
                                            <div class="chickenimgtext">
                                                <p>Chick enjoying the coop. The little ones were only out for a few hours.</p>
                                            </div>
                                        </div>
                                        <div>
                                        <h2 class="chickentitle">Chicken Run</h2>
                                        <div class="chickenimg">
                                            <a href="https://i.imgur.com/034TlKw.jpg" target="_blank" rel="noreferrer">
                                                <img src="https://i.imgur.com/034TlKw.jpg" alt="White chicken coop with a chicken run" width="100%"></img>
                                            </a>
                                            <div class="chickenimgtext">
                                                <p>Started making a chicken run</p>
                                            </div>
                                        </div>
                                        <div class="chickentext">
                                            <p class="boldleft">03.21.2023</p>
                                            <p class="left">Started making a chicken run out of some old fencing panels. Not too sure how we want to build the chicken run but we wanted a chicken run so the chickens can safely go in and out of the coop and give them some extra room to exercise.</p>
                                            <p class="left">Also purchased some sand and diatomaceous earth and plan on adding some under coop so the chickens can have a dust bath.</p>
                                            <div class="facts">
                                                <p class="left">A chicken run is an enclosed outdoor area designed to provide a safe and secure space for chickens to move around, exercise, and access fresh air, sunlight, and natural foraging opportunities. Here are a few reasons why a chicken run is essential for chickens:
                                                    <ol>
                                                        <li>Protection from predators: Chickens are vulnerable to a variety of predators, including foxes, raccoons, coyotes, and birds of prey. A chicken run provides a physical barrier between the chickens and potential predators, keeping them safe and secure.</li>
                                                        <li>Exercise: Chickens need regular exercise to maintain their health and wellbeing. A chicken run allows them to move around freely and engage in natural behaviors like scratching, pecking, and dust bathing.</li>
                                                        <li>Foraging opportunities: Chickens are natural foragers and enjoy pecking and scratching at the ground in search of insects, seeds, and other food sources. A chicken run can be designed to include natural elements like grass, dirt, and rocks, providing chickens with a variety of foraging opportunities.</li>
                                                        <li>Disease prevention: A chicken run helps prevent the spread of disease by limiting contact between chickens and potential disease carriers like wild birds, rodents, and other animals.</li>
                                                    </ol>
                                                    Overall, a chicken run provides a safe and healthy outdoor environment for chickens to thrive and live happy lives.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <h2 class="chickentitle">One Grit Wonder</h2>
                                        <div class="chickenimg">
                                            <a href="https://i.imgur.com/RNGcqyA.jpg" target="_blank" rel="noreferrer">
                                                <img src="https://i.imgur.com/RNGcqyA.jpg" alt="Manna Pro Chick Grit 5 lb bag" width="100%"></img>
                                            </a>
                                            <div class="chickenimgtext">
                                                <p>Manna Pro Chick Grit</p>
                                            </div>
                                        </div>
                                        <div class="chickentext">
                                            <p class="boldleft">03.22.2023</p>
                                            <p class="left">We started noticing one of our silkies having a hard time defecating. So with some google research and advice from experienced chicken owners they recommended that we get some grit and add it to the chick feed.</p>
                                            <p class="left">So we purchased <a href="https://www.mannapro.com/poultry/supplements-care/chick-grit-probiotics">Manna Pro's Chick Grit with ProBiotics</a>. If anyone from Manna Pro would like to sponsor us and our chicks please feel free to reach out to us! &#128516;</p>
                                            <p class="left"></p>
                                            <div class="facts">
                                                <p class="left">Grit is an important dietary supplement for chickens because it helps them digest their food. Chickens don't have teeth, so they rely on grit to grind up and break down their food in their gizzard, a muscular organ in their digestive system.</p>
                                                <p class="left">Grit is typically made up of small, hard particles like sand, small stones, or crushed oyster shells, and it stays in the gizzard where it helps break down food by grinding and crushing it. Here are a few reasons why grit is important for chickens:
                                                    <ol>
                                                        <li>Improved digestion: Without grit, chickens can't break down and digest their food properly, which can lead to poor health and nutrient deficiencies.</li>
                                                        <li>Better egg production: A healthy digestive system is essential for good egg production. If chickens can't digest their food properly, they may not be able to produce as many eggs, or their eggs may be smaller and lower in quality.</li>
                                                        <li>Prevents crop impaction: Crop impaction is a condition where food gets stuck in a chicken's crop, a small pouch in their esophagus. Grit helps prevent crop impaction by breaking down and grinding up food before it enters the crop.</li>
                                                        <li>Promotes natural behavior: Chickens naturally peck and scratch at the ground, and they may ingest small rocks or sand while doing so. Providing them with grit supplements helps satisfy their natural behavior and ensures they have access to the right kind of grit to aid digestion.</li>
                                                    </ol>
                                                    Overall, grit is an essential dietary supplement for chickens that helps promote healthy digestion, egg production, and natural behavior. Chickens should have access to grit at all times, either through a separate grit feeder or by scattering it on the ground.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                <div>
                                        <h2 class="chickentitle">Extras</h2>
                                        <div class="chickenimg">
                                            <a href="https://i.imgur.com/WPFSVJg.jpg" target="_blank" rel="noreferrer">
                                                <img src="https://i.imgur.com/WPFSVJg.jpg" alt="Easter Egger chick in hand" width="100%"></img>
                                            </a>
                                            <div class="chickenimgtext">
                                                <p>'April' our Easter Egger</p>
                                            </div>
                                        </div>
                                        <div class="chickenimg">
                                            <a href="https://i.imgur.com/8flZ78B.jpg" target="_blank" rel="noreferrer">
                                                <img src="https://i.imgur.com/8flZ78B.jpg" alt="Easter Egger chick in hand at two weeks old" width="100%"></img>
                                            </a>
                                            <div class="chickenimgtext">
                                                <p>'April' our Easter Egger after two weeks</p>
                                            </div>
                                        </div>
                                        <div class="chickenimg">
                                            <a href="https://i.imgur.com/MPNokZK.jpg" target="_blank" rel="noreferrer">
                                                <img src="https://i.imgur.com/MPNokZK.jpg" alt="Easter Egger chick in hand with tail feather" width="100%"></img>
                                            </a>
                                            <div class="chickenimgtext">
                                                <p>April's tail</p>
                                            </div>
                                        </div>
                                </div>


                                




                


                                {/* <div>
                                        <h2 class="chickentitle">Title</h2>
                                        <div class="chickenimg">
                                            <a href="" target="_blank" rel="noreferrer">
                                                <img src="" alt="Alt text" width="100%"></img>
                                            </a>
                                            <div class="chickenimgtext">
                                                <p>Comment</p>
                                            </div>
                                        </div>
                                        <div class="chickentext">
                                            <p class="boldleft">Date</p>
                                            <p class="left">Description</p>
                                            <div class="facts">
                                                <p class="left">Chicken Facts</p>
                                            </div>
                                        </div>
                                    </div> */}
                        </div>
        </div>
            </div>
        </div>
    );
};
