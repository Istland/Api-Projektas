import './BeerInformation.css';

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BeerInformation = () => {

    let params = useParams();

    const [beer, setBeer] = useState(null);

    useEffect(() => {
        fetch('https://api.punkapi.com/v2/beers/' + params.beerId)
            .then(response => response.json())
            .then(data => setBeer(data))
    }, [params.beerId]);

    return (
        <div>
            {!beer ? (<h1>Loading...</h1>) : (
                <><h1>Name of  recipe: {beer[0].name}</h1>
                    <h3>Description: {beer[0].description}</h3>
                    <p>Production temperature: {beer[0].method.mash_temp[0].temp.value} Celsius</p>
                    <p>Fermentation temperature: {beer[0].method.fermentation.temp.value} Celsius</p>
                    <p>Ingredients Malt:</p>
                    <ul>
                        {beer[0].ingredients.malt.map((elem, index) => {
                            return <li key={index}>{elem.name}</li>
                        })}
                    </ul>
                    <p>Ingredients Hops:</p>
                    <ul>
                        {beer[0].ingredients.hops.map((elem, index) => {
                            return <li key={index}>{elem.name}</li>
                        })}
                    </ul>
                    <p>Ingredients Yeast: {beer[0].ingredients.yeast}</p>

                    <p>Food Pairing:</p>
                    <ul>
                        {beer[0].food_pairing.map((elem, index) => {
                            return <li key={index}>{elem}</li>
                        })}
                    </ul>

                    <p>Brewers tips: {beer[0].brewers_tips}</p>
                    <p>Author: {beer[0].contributed_by}</p>
                    <img src={beer[0].image_url} /></>)
            }
        </div>
    )
}


export default BeerInformation;