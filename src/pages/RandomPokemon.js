import Axios from "axios"
import { useEffect, useState } from "react";

const getRndInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min) ) + min;
}



export const RandomPokemon = () => {
    const [pokemon, setPokemon] = useState({})
    const [favour, setFavour] = useState([])


    const fetchPokemon = () => {
        const pokemonID = getRndInteger(0, 386);
        const url = "https://pokeapi.co/api/v2/pokemon/" + pokemonID
        Axios.get(url).then((res)=>{
            setPokemon(prevState => ({
                ...prevState,
                url: url,
                ID: pokemonID,
                // image: res.data.sprites.front_default,
                image: res.data.sprites.other["official-artwork"].front_default,
                default_image: res.data.sprites.front_default,
                name: res.data.name
            }));
        });        
    }

    const saveFavour = () => {
        if (!favour.some(item => item === pokemon)) {
            setFavour(oldArray => [...oldArray, pokemon])
        }

    }

    const capitalize = (str) => {
        if (str){
            return str.charAt(0).toUpperCase() + str.slice(1);
        }
    }

    useEffect(() => {
        fetchPokemon();
    }, [])
    
    return ( 
        <div>
            <button onClick={fetchPokemon}> Choice a pokemon</button>
            <h1>{capitalize(pokemon.name)} </h1>
            <img src={pokemon.image} alt="new"/>
            <div>
                <button onClick={saveFavour}>Save this Pokemon to your list</button>
                {favour.map((value)=>(<img key={value.ID} src={value.default_image} alt="new"></img>))}
                
            </div>
        </div>
    )
};