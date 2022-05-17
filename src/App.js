import React from 'react';
import { useForm } from 'react-hook-form';

import './App.css';
import './'
import Fruit from "./components/fruit/Fruit";


function App() {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    const [ counterStrawberries, setCounterStrawberries ] = React.useState(0)
    const [ counterBananas, setCounterBananas ] = React.useState(0)
    const [ counterApples, setCounterApples ] = React.useState(0)
    const [ counterKiwis, setCounterKiwis ] = React.useState(0)

    //increase counterStrawberries
    function increaseStrawberries(){
        setCounterStrawberries(counterStrawberries => counterStrawberries + 1);
    }

    //increase counterBananas
    function increaseBananas(){
        setCounterBananas(counterBananas => counterBananas + 1);
    }

    //increase counterApples
    function increaseApples(){
        setCounterApples(counterApples => counterApples + 1);
    }

    //increase counterKiwis
    function increaseKiwis(){
        setCounterKiwis(counterKiwis => counterKiwis + 1);
    }


    //decrease counterStrawberries
    function decreaseStrawberries(){
        setCounterStrawberries(count => count - 1);
    }

    //decrease counterStrawberries
    function decreaseBananas(){
        setCounterBananas(count => count - 1);
    }

    //decrease counterApples
    function decreaseApples(){
        setCounterApples(count => count - 1);
    }

    //decrease counterKiwis
    function decreaseKiwis(){
        setCounterKiwis(count => count - 1);
    }

    //reset counters
    function reset(){
        setCounterStrawberries(count => count = 0);
        setCounterBananas(count => count = 0);
        setCounterApples(count => count = 0);
        setCounterKiwis(count => count = 0);
    }


  return (
    <>
        <h1>Fruitmand bezorgservice</h1>
        <Fruit
            emoticon="🍓"
            type="Aardbeien"
            name="strawberries"
            decrease={decreaseStrawberries}
            increase={increaseStrawberries}
            counter={counterStrawberries}
        />

        <Fruit
            emoticon="🍌"
            type="Bananen"
            name="bananas"
            decrease={decreaseBananas}
            increase={increaseBananas}
            counter={counterBananas}
        />

        <Fruit
            emoticon="🍏"
            type="Appels"
            name="apples"
            decrease={decreaseApples}
            increase={increaseApples}
            counter={counterApples}
        />

        <Fruit
            emoticon="🥝"
            type="Kiwi's"
            name="kiwi"
            decrease={decreaseKiwis}
            increase={increaseKiwis}
            counter={counterKiwis}
        />

        <button
            className="reset-btn"
            type="button"
            onClick={reset}
        >
        Reset
        </button>

        <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset>
                <legend>Bestelformulier:</legend>
                <label htmlFor="details-firstname">
                    Voornaam
                    <input
                        id="details-firstname"
                        {...register("firstname")}
                    />
                </label>
                <br/>
                <label htmlFor="details-lastname">
                    Achternaam
                    <input
                        id="details-lastname"
                        {...register("lastname")}
                    />
                </label>
                <br/>
                <label htmlFor="details-age">
                    Leeftijd
                    <input
                        type="number"
                        id="details-age"
                        {...register("age")}
                    />
                </label>
                <br/>
                <label htmlFor="details-postalcode">
                    Postcode
                    <input
                        type="text"
                        id="details-postalcode"
                        {...register("postalcode")}
                    />
                </label>
                <br/>
                <label htmlFor="delivery-period">
                    Bezorgfrequentie
                    <br/>
                    <select
                        id="delivery-period"
                        {...register("period")}
                    >
                        <option value="oneweek">Iedere week</option>
                        <option value="twoweeks">Om de week</option>
                        <option value="month">Iedere maand</option>
                    </select>
                </label>
                <br/><br/>
                <label htmlFor="delivery-moment-afternoon">
                    Overdag
                    <input
                        type="radio"
                        id="delivery-moment-afternoon"
                        {...register("afternoon")}
                        value="overdag"
                    />
                </label>
                <label htmlFor="delivery-moment-evening">
                    's Avonds
                    <input
                        type="radio"
                        id="delivery-moment-evening"
                        {...register("evening")}
                        value="s avonds"
                    />
                </label>
                <br/>
                <label htmlFor="details-comments">
                    Opmerking
                    <br/>
                    <textarea
                        id="details-comments"
                        cols="50"
                        rows="5"
                        {...register("comments")}
                    >
                    </textarea>
                </label>
                <br/>
                <label htmlFor="checkbox">
                    <input
                        type="checkbox"
                        {...register("checkbox")}
                    />
                    Ik ga akkoord met de voorwaarden
                </label>
                <br/>
                <label htmlFor="btn-submit">
                    <button
                        type="submit"
                    >
                        Versturen
                    </button>
                </label>
            </fieldset>
        </form>
    </>
  );
}

export default App;
