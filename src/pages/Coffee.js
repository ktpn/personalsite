import "../App.css";

export const Coffee = () => {
    
    return (
        <div className="App coffeestuff">
            <div className="coffeestuffinfo">

                <h1>Coffee Stuff</h1>
                <a href="https://honestcoffeeguide.com/tools/coffee-to-water-ratio/">Link for calculating coffee ratios</a>
                    
                <div className="coffee1">
                    <div className="coffeeitem">
                        <h2 className="underline">Espresso</h2>
                        <p>Ratio: 1:2 coffee:water</p>
                        <p>Grind setting: 8-10</p>
                        <p>Input: 15.5g-17.5g</p>
                        <p>Output: 30g-40g</p>
                        <p>Extraction time: 30-40sec</p>
                        <p>Ideal: 15.5g in to 40g out in 30sec</p>
                    </div>
                    
                    <div className="coffeeitem">
                        <h2 className="underline">Pour-Over</h2>
                        <p>Ratio: 1:15 coffee:water</p>
                        <p>Grind setting: 25-30</p>
                        <p>Input: 20g</p>
                        <p>Output: 300g</p>
                        <p>Extraction time: 3-4mins</p>
                        <p>Add 1:2 of water, wait 45sec. Slowly add the rest</p>
                    </div>
                </div>


                <div className="coffee1">
                    <div className="coffeeitem">
                        <h2 className="underline">French Press</h2>
                        <p>Ratio: 1:16 coffee:water</p>
                        <p>Grind setting: 25-30</p>
                        <p>Input: 16g</p>
                        <p>Output: 250g</p>
                        <p>Extraction time: 4mins</p>
                        <p>Press and pour slowly.</p>
                    </div>

                    <div className="coffeeitem">
                        <h2 className="underline">Cold-Brew</h2>
                        <p>Ratio: 1:8 coffee:water</p>
                        <p>Grind setting: 25-30</p>
                        <p>Input: 16g</p>
                        <p>Output: 130g</p>
                        <p>Refrigerate for 20 hours</p>
                        <p>Add 1:1 water when ready to drink</p>
                    </div>
                </div>

                <div className="coffee1">
                    <div className="coffeeitem">
                        <h2 className="underline">Nespresso Vertuo Pod</h2>
                        <p>Grind setting: 15</p>
                        <p>Input: 10.5g</p>
                    </div>
                </div>
            </div>



        </div>
    
    );
};