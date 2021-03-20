import React,{useEffect,useState} from 'react'
import { PokeCards } from './PokeCards';

export const Home = () => {
    const [Pokemon, setPokemon] = useState([])
    const getPokemon = async () => {
        const url = `https://pokeapi.co/api/v2/pokemon?offset=00&limit=20`;
        const resp = await fetch(url);
        const { results } = await resp.json();
        
        
        const pokemon = results.map(pokemon => {
            return {
                name: pokemon.name,
                url: pokemon.url,
                
            }

        })
        //console.log(pokemon);
        setPokemon(pokemon)   ;
    }
    useEffect(() => {
        getPokemon()
    }, [])
    console.log(Pokemon);
    return (
        <div>
            <h1>Mostrando algunos Pokemon</h1>
            {Pokemon.map(pokemom=>(
                <PokeCards key={pokemom.name} pokemon={pokemom}/>
            ))}
        </div>
    )
}
