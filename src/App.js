import React from 'react';

import './App.css';
import './'
import Fruit from "./components/fruit/Fruit";

function App() {

    const [ counterStrawberries, setCounterStrawberries ] = React.useState(0)
    const [ counterBananas, setCounterBananas ] = React.useState(0)
    const [ counterApples, setCounterApples ] = React.useState(0)
    const [ counterKiwis, setCounterKiwis ] = React.useState(0)

    //increase counterStrawberries
    const increaseStrawberries = () => {
        setCounterStrawberries(count => count + 1);
    };

    //increase counterBananas
    const increaseBananas = () => {
        setCounterBananas(count => count + 1);
    };

    //increase counterApples
    const increaseApples = () => {
        setCounterApples(count => count + 1);
    };

    //increase counterKiwis
    const increaseKiwis = () => {
        setCounterKiwis(count => count + 1);
    };


    //decrease counterStrawberries
    const decreaseStrawberries = () => {
        if (counterStrawberries > 0)
            setCounterStrawberries(count => count - 1);
    };

    //decrease counterStrawberries
    const decreaseBananas = () => {
        if (counterBananas > 0)
            setCounterBananas(count => count - 1);
    };

    //decrease counterApples
    const decreaseApples = () => {
        if (counterApples > 0)
            setCounterApples(count => count - 1);
    };

    //decrease counterKiwis
    const decreaseKiwis = () => {
        if (counterKiwis > 0)
            setCounterKiwis(count => count - 1);
    };

    //reset counters
    const reset = () => {
        setCounterStrawberries(count => count = 0);
        setCounterBananas(count => count = 0);
        setCounterApples(count => count = 0);
        setCounterKiwis(count => count = 0);
    };


  return (
    <>
        <Fruit
            title="🍓 Aardbeien"
            props1={decreaseStrawberries}
            props2={increaseStrawberries}
            props3={counterStrawberries}
        />

        <Fruit
            title="🍌 Bananen"
            props1={decreaseBananas}
            props2={increaseBananas}
            props3={counterBananas}
        />

        <Fruit
            title="🍏 Apples"
            props1={decreaseApples}
            props2={increaseApples}
            props3={counterApples}
        />

        <Fruit
            title="🥝 Kiwi's"
            props1={decreaseKiwis}
            props2={increaseKiwis}
            props3={counterKiwis}
        />

        <button
            className="reset-btn"
            type="button"
            onClick={reset}
        >
        Reset
        </button>
    </>
  );
}

export default App;
