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
                                        <th>18 Chicks</th>
                                        <th>Age (days)</th>
                                        <th>Weeks</th>
                                        <th>Months</th>
                                    </tr>
                                    <tr>
                                        <td>First 3 Random</td>
                                        <td>{days}</td>
                                        <td>{((days)/7).toFixed(2)}</td>
                                        <td>{((days)/30).toFixed(2)}</td>
                                    </tr>
                                    <tr>
                                        <td>4 Silkes</td>
                                        <td>{days - 11}</td>
                                        <td>{((days - 11)/7).toFixed(2)}</td>
                                        <td>{((days - 11)/30).toFixed(2)}</td>
                                    </tr>
                                    <tr>
                                        <td>Polish</td>
                                        <td>{days - 11}</td>
                                        <td>{((days - 11)/7).toFixed(2)}</td>
                                        <td>{((days - 11)/30).toFixed(2)}</td>
                                    </tr>
                                    <tr>
                                        <td>Sultan</td>
                                        <td>{days - 11}</td>
                                        <td>{((days - 11)/7).toFixed(2)}</td>
                                        <td>{((days - 11)/30).toFixed(2)}</td>
                                    </tr>
                                    <tr>
                                        <td>Easter Egger</td>
                                        <td>{days - 11}</td>
                                        <td>{((days - 11)/7).toFixed(2)}</td>
                                        <td>{((days - 11)/30).toFixed(2)}</td>
                                    </tr>
                                    <tr>
                                        <td>Rhode Island Red</td>
                                        <td>{days - 18}</td>
                                        <td>{((days - 18)/7).toFixed(2)}</td>
                                        <td>{((days - 18)/30).toFixed(2)}</td>
                                    </tr>
                                    <tr>
                                        <td>Cuckoo Maran</td>
                                        <td>{days - 18}</td>
                                        <td>{((days - 18)/7).toFixed(2)}</td>
                                        <td>{((days - 18)/30).toFixed(2)}</td>
                                    </tr>
                                    <tr>
                                        <td>Silver-Laced Wyandotte</td>
                                        <td>{days - 18}</td>
                                        <td>{((days - 18)/7).toFixed(2)}</td>
                                        <td>{((days - 18)/30).toFixed(2)}</td>
                                    </tr>
                                    <tr>
                                        <td>Black Jersey Giant</td>
                                        <td>{days - 18}</td>
                                        <td>{((days - 18)/7).toFixed(2)}</td>
                                        <td>{((days - 18)/30).toFixed(2)}</td>
                                    </tr>
                                    <tr>
                                        <td>Buff Brahma</td>
                                        <td>{days - 18}</td>
                                        <td>{((days - 18)/7).toFixed(2)}</td>
                                        <td>{((days - 18)/30).toFixed(2)}</td>
                                    </tr>
                                    <tr>
                                        <td>Buff Orpington</td>
                                        <td>{days - 45}</td>
                                        <td>{((days - 45)/7).toFixed(2)}</td>
                                        <td>{((days - 45)/30).toFixed(2)}</td>
                                    </tr>
                                    <tr>
                                        <td>Lavender Orpingtons</td>
                                        <td>{days - 45}</td>
                                        <td>{((days - 45)/7).toFixed(2)}</td>
                                        <td>{((days - 45)/30).toFixed(2)}</td>
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
                                        <h2 class="chickentitle">Mor-Orpingtons</h2>
                                        <div class="chickenimg">
                                            <a href="https://i.imgur.com/nZnR6F0.jpg" target="_blank" rel="noreferrer">
                                                <img src="https://i.imgur.com/nZnR6F0.jpg" alt="2 yellow chicks and 2 light grey chicks" width="100%"></img>
                                            </a>
                                            <div class="chickenimgtext">
                                                <p>4 new chicks, 2 Buff Orpingtons and 2 Lavender Orpingtons</p>
                                            </div>
                                        </div>
                                        <div class="chickentext">
                                            <p class="boldleft">03.29.2023</p>
                                            <p class="left">We decided we wanted to get our last set of chickens and they be a special breed of chicks and I really wanted to get the Lavender Orpingtons, they look great with a very distinguish lavender color and also because they are a considered a rare breed.</p>
                                            <p class="left">So the morning when the chick store opens I called to ask when they would receive their chicks and they said someone just left to pick them up and will be back in about 30-45 minutes.</p>
                                            <p class="left">I then get ready and drive to the store just in time and when I got there, there was already a line about 12 people deep.</p>
                                            <p class="left">It seems like there is a large demand for chicken but this might be do the increased prices of eggs and with our nearby major city limit that recently allowing backyard chickens.</p>
                                            <p class="left">I had to wait about 20 minutes before it was my turn and I went straight to the Lavender Orpingtons and looked around and saw they had Buff Orpingtons too so I had to get some.</p>
                                            <p class="left">I've heard a lot of great things about the Buff Orpingtons and they looked so cute and fluffy. Also while I was there I got a big bag of chick starter feed from a local manufacturer, <a href="https://bigvfeeds.com/">Big V Feeds</a>, as our chick feed was getting low.</p>
                                            <div class="facts">
                                                <p class="left">Lavender Orpingtons are a popular breed of chicken known for their calm temperament, large size, and attractive appearance. They are friendly birds that are generally easy to handle, making them a good choice for backyard chicken enthusiasts, particularly those with families or children.</p>
                                                <p class="left">In terms of egg production, Lavender Orpingtons are considered moderate to good layers, producing between 150-200 eggs per year. However, they are not as productive as some other breeds, such as Leghorns or Rhode Island Reds.</p>
                                                <p class="left">Overall, if you're looking for a chicken breed that is friendly, attractive, and produces a good number of eggs, then Lavender Orpingtons are definitely worth considering. However, if egg production is your top priority, you may want to consider a different breed.</p>
                                            </div>
                                        </div>
                                        <div class="chickenimg">
                                            <a href="https://i.imgur.com/SntFhM9.jpg" target="_blank" rel="noreferrer">
                                                <img src="https://i.imgur.com/SntFhM9.jpg" alt="Lavender Orpington and Black Copper Maran chicks for sale" width="100%"></img>
                                            </a>
                                            <div class="chickenimgtext">
                                                <p>Lavender Orpingtons are expensive but almost all gone!</p>
                                            </div>
                                        </div>
                                        <div class="chickenimg">
                                            <a href="https://i.imgur.com/SdaAjTn.jpg" target="_blank" rel="noreferrer">
                                                <img src="https://i.imgur.com/SdaAjTn.jpg" alt="Buff Orpingtons chicks for sale" width="100%"></img>
                                            </a>
                                            <div class="chickenimgtext">
                                                <p>Buff Orpingtons are so cute and fluffy</p>
                                            </div>
                                        </div>
                                        <div class="chickenimg">
                                            <a href="https://i.imgur.com/eN9qHN8.jpg" target="_blank" rel="noreferrer">
                                                <img src="https://i.imgur.com/eN9qHN8.jpg" alt="Big V Feed's Starter Grower Feed 50lbs" width="100%"></img>
                                            </a>
                                            <div class="chickenimgtext">
                                                <p>Big V Feed's Starter Grower Feed. Heard great things from them.</p>
                                            </div>
                                        </div>
                                        <div class="chickenimg">
                                            <a href="https://i.imgur.com/DHW6u9s.jpg" target="_blank" rel="noreferrer">
                                                <img src="https://i.imgur.com/DHW6u9s.jpg" alt="Selection list of chicks" width="100%"></img>
                                            </a>
                                            <div class="chickenimgtext">
                                                <p>Got the receipt</p>
                                            </div>
                                        </div>
                                        <div class="chickenimg">
                                            <a href="https://i.imgur.com/lq1Q8bw.jpg" target="_blank" rel="noreferrer">
                                                <img src="https://i.imgur.com/lq1Q8bw.jpg" alt="2 chicks eating and another chick inside the feeder" width="100%"></img>
                                            </a>
                                            <div class="chickenimgtext">
                                                <p>In the playpen eating and one of the Lavender Orpingtons somehow got inside the feeder &#128514;</p>
                                            </div>
                                        </div>
                                        <div class="chickenimg">
                                            <a href="https://i.imgur.com/liltZCH.jpg" target="_blank" rel="noreferrer">
                                                <img src="https://i.imgur.com/liltZCH.jpg" alt="Chicks eating and drinking water" width="100%"></img>
                                            </a>
                                            <div class="chickenimgtext">
                                                <p>She was able to get out and went straight to the water.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <h2 class="chickentitle">Tuffy</h2>
                                        <div class="chickenimg">
                                            <a href="https://i.imgur.com/1dg26MK.jpg" target="_blank" rel="noreferrer">
                                                <img src="https://i.imgur.com/1dg26MK.jpg" alt="Four baby chicks outside in a fenced in area" width="100%"></img>
                                            </a>
                                            <div class="chickenimgtext">
                                                <p>Couple of chicks enjoying the outdoors. Tuffy is on the far left with the black spot on her head.</p>
                                            </div>
                                        </div>
                                        <div class="chickentext">
                                            <p class="boldleft">04.01.2023</p>
                                            <p class="left">We had another warm one so we decided to let all of the chicks outside, it got up to 85F. Also we thought it would be a great time to let the new chicks meet everyone.</p>
                                            <p class="left">They seemed a bit overwhelmed but was curious of everyone and everything around them. They did get picked on a bit by Peach, the Polish chicken, she seemed to try to establish her pecking order.</p>
                                            <p class="left">After it got cooler we rounded up the new chicks and brought them back inside. Once we got them inside there was one particular chick not moving too much so I check her and noticed some white milky poop on her butt. So I cleaned her up and put her back in the pen.</p>
                                            <p class="left">Back in the pen she did move a bit and just sat down so I did not think too much of it. A couple hours later we check on her and has the same type of poop on her, so we clean her up and gave her a warm bath. But even after the bath she was still the same, not really moving too much as the other chicks.</p>
                                            <p class="left">So then we isolated her just incase she caught something that the other chicks could get. About another hour later we find the same type of poop on her and go to clean it and then she stopped breathing.</p>
                                            <p class="left">We are not too sure what it was that got her, might have been stress, temperture changes or something she ate outside. But it just happened so fast and lucky the other chicks and everyone else were ok. We think maybe the new chicks have not been on the medicated feed long enough for their bodies to build up their immunity to protect them from what it is suppose to. So our flock now is at 18.</p>
                                            <div class="facts">
                                                <p class="left">The duration of medicated feed for baby chicks can vary depending on several factors such as the type of medication and the health status of the chicks. Medicated feed is usually given to baby chicks to prevent the incidence of coccidiosis, which is a common and potentially fatal disease in young poultry.</p>
                                                <p class="left">Most medicated feeds contain a low dose of medication such as amprolium or sulfaquinoxaline that helps to prevent coccidiosis. The medication is not harmful to the chicks, but it is important to follow the manufacturer's instructions and not exceed the recommended duration of use.</p>
                                                <p class="left">In general, medicated feed is usually given to baby chicks for the first four to six weeks of their lives. After this period, it is generally safe to switch to a non-medicated feed. However, it's important to consult with your veterinarian or poultry expert to determine the appropriate duration of medicated feed for your particular situation.</p>
                                                <p class="left">It's also important to note that medicated feed should not be used as a substitute for good hygiene and sanitation practices. Proper cleaning and disinfection of the brooder, feeders, and waterers are also important in preventing the incidence of disease in young chicks.</p>
                                            </div>
                                        </div>
                                    </div>
                                        <div class="chickenimg">
                                            <a href="https://i.imgur.com/bVs9C9C.jpg" target="_blank" rel="noreferrer">
                                                <img src="https://i.imgur.com/bVs9C9C.jpg" alt="Two chicks on someones chest" width="100%"></img>
                                            </a>
                                            <div class="chickenimgtext">
                                                <p>Chicks napping on mom.</p>
                                            </div>
                                        </div>
                                        <div>
                                        <h2 class="chickentitle">Chicken run with an entry</h2>
                                        <div class="chickenimg">
                                            <a href="https://i.imgur.com/abtfmTd.jpg" target="_blank" rel="noreferrer">
                                                <img src="https://i.imgur.com/abtfmTd.jpg" alt="Chicken coop and chicken run with a door" width="100%"></img>
                                            </a>
                                            <div class="chickenimgtext">
                                                <p>Our chicken run add-on with a door.</p>
                                            </div>
                                        </div>
                                        <div class="chickentext">
                                            <p class="boldleft">04.02.2023</p>
                                            <p class="left">With the extra fence pieces we extended the chicken run and added a door so it would be easy to access the run and the chickens if we need to, also would give them a way out to range when we can let them. We also painted some of the trim pieces around the coop and added a solar light by the chicken run.</p>
                                            <div class="facts">
                                                <p class="left">The length of time a chicken should range depends on several factors such as the size of the outdoor area, the weather, and the individual needs and behavior of the chickens. In general, chickens should have access to outdoor areas for at least a few hours each day, weather permitting.</p>
                                                <p class="left">If you have a large outdoor area, you may be able to allow your chickens to range freely throughout the day. However, if you have a smaller area or live in an urban or suburban environment, you may need to provide more structured outdoor time to ensure their safety and well-being.</p>
                                                <p class="left">It's important to note that chickens are active during the day and rest at night, so it's best to provide outdoor time during the daytime hours. Additionally, chickens should not be left outside in extreme weather conditions such as high heat or cold temperatures. In hot weather, make sure to provide plenty of shade and water, and in cold weather, provide shelter from the wind and access to warm areas.</p>
                                                <p class="left">Ultimately, the goal is to provide a safe and comfortable environment for your chickens both indoors and outdoors. Observing your birds' behavior and making adjustments as needed can help ensure their happiness and well-being.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <h2 class="chickentitle">Expanded the chicken run</h2>
                                        <div class="chickenimg">
                                            <a href="https://imgur.com/hikEbXh.jpeg" target="_blank" rel="noreferrer">
                                                <img src="https://imgur.com/hikEbXh.jpeg" alt="Two chickens on a picnic table with a chicken coop in the background" width="100%"></img>
                                            </a>
                                            <div class="chickenimgtext">
                                                <p>Sesame and Cuckoo looking for dinner.</p>
                                            </div>
                                        </div>
                                        <div class="chickentext">
                                            <p class="boldleft">04.15.2023</p>
                                            <p class="left">We decided to expand the chicken run a bit so we can add more stuff in it and so the chickens would have more space as they are getting bigger. Either chickens grow fast or we been feeding them too much?
                                                            This time we bought the lumber instead of using left overs to make it a nicer chicken run. It took about two days to complete and we painted black. The chickens seem to enjoy it even thought they free range all day.
                                            </p>
                                            <div class="facts">
                                                <p class="left">Chickens go through various stages of development from hatching to maturity. Here's a general overview of the development stages of chickens:</p>
                                                <p class="left">
                                                    <ol>
                                                        <li>Embryonic Development (Inside the Egg): Chickens start developing inside the egg before they hatch. The incubation period for chicken eggs is typically around 21 days. During this time, the embryo undergoes rapid development, forming organs, feathers, and the beak.</li>
                                                        <li>Hatching: At the end of the incubation period, the chicken embryo will hatch from the egg. Newly hatched chicks are quite small, fluffy, and fragile.</li>
                                                        <li>Brooding Stage (0-6 Weeks): During this stage, chicks are highly dependent on heat for their survival. They need to be kept in a warm environment (around 95-100°F or 35-37.5°C) and provided with appropriate chick feed and water. They will grow quickly during this period, developing feathers and gradually becoming more independent.</li>
                                                        <li>Grower Stage (6-20 Weeks): During this phase, the chicks are referred to as "growers." They are past the fragile stage and will continue to develop feathers, grow in size, and transition to eating a diet appropriate for their growth. This period is important for their skeletal and muscle development.</li>
                                                        <li>Pullet Stage (20-24 Weeks): Female chickens are called pullets at this stage. They are nearing sexual maturity and will start laying eggs soon. Their growth rate slows down compared to the earlier stages.</li>
                                                        <li>Cockerel Stage (20-24 Weeks): Male chickens are called cockerels. They will also show signs of sexual maturity, such as changes in behavior and physical appearance. However, they do not lay eggs.</li>
                                                        <li>Maturity and Egg Production (24+ Weeks): At around 24 to 28 weeks of age, most chicken breeds reach sexual maturity. This is when hens start laying eggs. The frequency of egg laying and the size of the eggs will depend on the breed and individual factors.</li>
                                                        <li>Full Maturity (Varies by Breed): Chickens continue to develop physically and behaviorally as they age. They will reach their full size and may live for several years, with egg production decreasing as they get older.</li>
                                                    </ol>
                                                </p>
                                                <p class="left">Keep in mind that the exact timing of these stages can vary depending on factors such as breed, genetics, diet, environment, and care. Additionally, some breeds may mature faster or slower than others. It's important to provide appropriate care, nutrition, and housing throughout each stage of a chicken's development to ensure their health and well-being.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <h2 class="chickentitle">Snap, Crackle, Pop</h2>
                                        <div class="chickenimg">
                                            <a href="https://imgur.com/XVbqAZy.jpeg" target="_blank" rel="noreferrer">
                                                <img src="https://imgur.com/XVbqAZy.jpeg" alt="Three chickens on a wood pallet leaned against the wall of a chicken run" width="100%"></img>
                                            </a>
                                            <div class="chickenimgtext">
                                                <p>Snap, Crackle, and Pop are growing so fast and they might be ready to sleep outside with the rest of the flock.</p>
                                            </div>
                                        </div>
                                        <div class="chickentext">
                                            <p class="boldleft">04.28.2023</p>
                                            <p class="left">Snap, Crackle, and Pop are growing so fast and we introduced to the rest of the flock whenever we have time to supervise. We think this helps as it helps to slowly introduce them and they will get used to each other. The older chickens do still chase them and occasionally peck at them to establish their pecking order. 
                                                            Snap, Crackle, and Pop do avert to using the wood pallet to get away from whoever is chasing them. 
                                                            We also think they are ready to sleep in the coop as they seem to be able to hold their own and the flock getting used to seeing them everyday. The first night the slept together in the corner of the coop.
                                                            </p>
                                            <div class="facts">
                                                <p class="left">Introducing new chicks to an existing flock of chickens requires careful planning to minimize stress, aggression, and potential harm to both the chicks and the adult birds. Here's a step-by-step guide on how to introduce chicks to your existing flock:</p>
                                                <p class="left">
                                                    <ol>
                                                        <li>Quarantine and Health Check: Before introducing new chicks to your existing flock, it's important to quarantine the new chicks for at least two weeks. This helps ensure that the new chicks are healthy and won't introduce any diseases to your established flock.</li>
                                                        <li>Choose the Right Time: Introduce new chicks when they are big enough to defend themselves a bit, but still small enough that the size difference is less intimidating to the adult birds. This is usually around 6 to 8 weeks of age.</li>
                                                        <li>Separate but Visible: Place the brooder or enclosure with the new chicks within the sight of the existing flock but in a way that prevents physical contact. This allows the birds to become familiar with each other without direct interaction.</li>
                                                        <li>Gradual Introduction: After a few days of having the new chicks in sight of the older chickens, you can start with short and supervised introductions. Allow the older chickens to approach the chicks while you closely observe their behavior. If any aggression or pecking occurs, be prepared to intervene.</li>
                                                        <li>Supervise Interaction: Over the course of several days, gradually increase the length of time the chicks and adult chickens spend together. Keep a close eye on their interactions, especially during feeding and drinking times.</li>
                                                        <li>Provide Multiple Feeding and Water Stations: Ensure there are enough feeding and water stations so that both the new chicks and the existing flock have access without intense competition. This reduces stress and prevents bullying.</li>
                                                        <li>Provide Hiding Spaces: Introduce hiding spots or obstacles in the enclosure that chicks can use to escape if they feel threatened by the older birds.</li>
                                                        <li>Monitor Behavior: Pay attention to the body language and behavior of both the chicks and the adult birds. Some pecking and establishing a pecking order is normal, but if you see excessive aggression, injury, or bullying, you might need to separate the birds again.</li>
                                                        <li>Space and Resources: Make sure the coop and run are spacious enough to accommodate the increased numbers without causing overcrowding. Adequate space reduces stress and aggression.</li>
                                                        <li>Patience: The process of integrating new chicks into an existing flock can take time. Be patient and allow the birds to gradually adjust to each other's presence.</li>
                                                        <li>Nighttime Integration: If possible, consider placing the new chicks with the older chickens at night when they are less active. This can help them wake up together and reduce daytime confrontations.</li>
                                                        <li>Provide Distractions: Offer treats, food scraps, or other distractions to redirect the attention of both the chicks and the older birds, promoting positive interactions.</li>
                                                    </ol>
                                                </p>
                                                <p class="left">Remember that each flock is unique, and the integration process might vary depending on the personalities and dynamics of your chickens. Keep a close watch on their interactions and be prepared to separate individuals if needed to ensure the safety and well-being of all birds involved.</p>
                                            </div>
                                        </div>
                                        <div class="chickenimg">
                                            <a href="https://imgur.com/RP0HPTr.jpeg" target="_blank" rel="noreferrer">
                                                <img src="https://imgur.com/RP0HPTr.jpeg" alt="Three chicks in the chicken coop with the rest of the flock" width="100%"></img>
                                            </a>
                                            <div class="chickenimgtext">
                                                <p>First night out in the coop for Snap, Crackle, and Pop.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <h2 class="chickentitle">Wet chicken</h2>
                                        <div class="chickenimg">
                                            <a href="https://i.imgur.com/DVYQNhJ.jpg" target="_blank" rel="noreferrer">
                                                <img src="https://i.imgur.com/DVYQNhJ.jpg" alt="A wet black silkie chicken" width="100%"></img>
                                            </a>
                                            <div class="chickenimgtext">
                                                <p>Mulligan enjoying the free shower</p>
                                            </div>
                                        </div>
                                        <div class="chickentext">
                                            <p class="boldleft">06.27.2023</p>
                                            <p class="left">Its been raining here several days and the flock seems to start embracing getting wet. They definitely need it since we do not give them baths besides letting them bathe in the dirty.</p>
                                            <div class="facts">
                                                <p class="left">If your chicken got wet and you need to dry it, follow these steps to ensure its comfort and safety:
                                                    <ol>
                                                        <li>Remove the Chicken from the Wet Environment: If the chicken is still wet, gently pick it up and move it to a dry and warm area. Avoid exposing the chicken to cold drafts or strong wind, as this can worsen its condition.</li>
                                                        <li>Blot with Towels: Gently blot the chicken's feathers with clean, dry towels. Do not rub vigorously as this could damage the feathers or stress the bird.</li>
                                                        <li>Use a Hair Dryer (Optional): If the chicken is comfortable with noise and the sensation of warm air, you can use a hair dryer on its lowest setting. Maintain a safe distance and do not use hot air as it can burn the delicate skin or feathers.</li>
                                                        <li>Provide Warmth: Ensure the chicken is in a warm and comfortable environment. You can use heat lamps or warming pads, making sure they are positioned in a way that the chicken can move away from the heat source if it gets too warm.</li>
                                                        <li>Monitor the Chicken: Keep a close eye on the chicken to make sure it is responding well to the drying process. If the bird seems stressed, discontinue the use of the hair dryer or heat source.</li>
                                                        <li>Allow Natural Drying: If the chicken seems stressed by the drying process, it's best to allow it to dry naturally in a warm and dry environment. Make sure it has access to a warm and sheltered area.</li>
                                                        <li>Observe Behavior: Keep observing the chicken's behavior. If it starts preening and fluffing its feathers, it's a sign that it's feeling better and is taking care of itself.</li>
                                                        <li>Prevent Chilling: Wet chickens are susceptible to hypothermia, so it's crucial to keep them warm until they are completely dry. If necessary, you might need to keep them indoors until they are fully dried and their feathers regain their insulating properties.</li>
                                                    </ol>
                                                </p>
                                                <p class="left">Remember, chickens are sensitive creatures, and stress can have adverse effects on their health. Always prioritize their well-being and comfort. If the chicken shows signs of distress, injury, or prolonged discomfort, it's a good idea to consult a veterinarian with experience in treating poultry.</p>
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
                                        <div class="chickenimg">
                                            <a href="https://i.imgur.com/899ZugO.jpg" target="_blank" rel="noreferrer">
                                                <img src="https://i.imgur.com/899ZugO.jpg" alt="Group picture of baby chicks" width="100%"></img>
                                            </a>
                                            <div class="chickenimgtext">
                                                <p>03.11.2023 - Part of the flock picture.</p>
                                            </div>
                                        </div>
                                        <div class="chickenimg">
                                            <a href="https://imgur.com/qpR47DV.jpg" target="_blank" rel="noreferrer">
                                                <img src="https://imgur.com/qpR47DV.jpg" alt="Chickens in a coop roosting" width="100%"></img>
                                            </a>
                                            <div class="chickenimgtext">
                                                <p>04.16.2023 - Roosting.</p>
                                            </div>
                                        </div>
                                        <div class="chickenimg">
                                            <a href="https://imgur.com/K0KJDps.jpg" target="_blank" rel="noreferrer">
                                                <img src="https://imgur.com/K0KJDps.jpg" alt="Chickens in a coop roosting some on the higher roosting bar" width="100%"></img>
                                            </a>
                                            <div class="chickenimgtext">
                                                <p>04.23.2023 - Roosting on the next level.</p>
                                            </div>
                                        </div>
                                        <div class="chickenimg">
                                            <a href="https://imgur.com/EHcjvaO.jpg" target="_blank" rel="noreferrer">
                                                <img src="https://imgur.com/EHcjvaO.jpg" alt="Flock of chickens eating outside in the grass" width="100%"></img>
                                            </a>
                                            <div class="chickenimgtext">
                                                <p>05.07.2023 - A Hungry flock.</p>
                                            </div>
                                        </div>
                                        <div class="chickenimg">
                                            <a href="https://i.imgur.com/63B1YiK.jpg" target="_blank" rel="noreferrer">
                                                <img src="https://i.imgur.com/63B1YiK.jpg" alt="Black silkie chicken with white rice over her face" width="100%"></img>
                                            </a>
                                            <div class="chickenimgtext">
                                                <p>08.07.2023 - Mulligan saving some rice for later.</p>
                                            </div>
                                        </div>
                                        <div class="chickenimg">
                                            <a href="https://imgur.com/Gpgibja.jpg" target="_blank" rel="noreferrer">
                                                <img src="https://imgur.com/Gpgibja.jpg" alt="Brown chicken with an egg" width="100%"></img>
                                            </a>
                                            <div class="chickenimgtext">
                                                <p>Sesame's egg.</p>
                                            </div>
                                        </div>
                                        <div class="chickenimg">
                                            <a href="https://imgur.com/DJTmXuw.jpg" target="_blank" rel="noreferrer">
                                                <img src="https://imgur.com/DJTmXuw.jpg" alt="Black chicken with white spots with an egg" width="100%"></img>
                                            </a>
                                            <div class="chickenimgtext">
                                                <p>Lacey's egg.</p>
                                            </div>
                                        </div>
                                        <div class="chickenimg">
                                            <a href="https://imgur.com/TwpJMWo.jpg" target="_blank" rel="noreferrer">
                                                <img src="https://imgur.com/TwpJMWo.jpg" alt="Grey silkie chicken with an egg" width="100%"></img>
                                            </a>
                                            <div class="chickenimgtext">
                                                <p>Mulligan's egg.</p>
                                            </div>
                                        </div>
                                        <div class="chickenimg">
                                            <a href="https://imgur.com/qVRD7pB.jpg" target="_blank" rel="noreferrer">
                                                <img src="https://imgur.com/qVRD7pB.jpg" alt="Black silkie chicken with an egg" width="100%"></img>
                                            </a>
                                            <div class="chickenimgtext">
                                                <p>My Little Gal's egg.</p>
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
