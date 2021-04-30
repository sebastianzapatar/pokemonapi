import React,{useEffect,useState} from 'react'
import { PokeCards } from './PokeCards';
import { BreakinCard } from './BreakinCard';
export const Home = () => {
    const [Pokemon, setPokemon] = useState([])
    const [episodios,SetEspisodios]=useState([]);
    const [estudiantes,SetEstudiantes]=useState([]);
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
    const getEstudiantes=async()=>{
        const url = `http://127.0.0.1:8000/estudiantes/`;
        const resp = await fetch(url);
        const results  = await resp.json();
        SetEstudiantes(results);
    }
    const getEpisodes = async () => {
        const resp = await fetch('https://breakingbadapi.com/api/episodes/');
        const data  = await resp.json();
       
        const capitulos = data.map(episode => {
            return {
                id: episode.episode_id,
                title: episode.title,
                characters:episode.characters[0]
            }
        })
        

        SetEspisodios(capitulos);
    }
    useEffect(() => {
        //getPokemon();
        //getEpisodes();
        getEstudiantes();
    },[])
    console.log(Pokemon);
    console.log("Datos asigandos");
    console.log(estudiantes);
    
    return (
        <div>
            <h1>Mostrando algunos Pokemon</h1>
            {/*Pokemon.map(pokemom=>(
                <PokeCards key={pokemom.name} pokemon={pokemom}/>
            ))*/}
            {episodios.map(episode=>(
                <BreakinCard key={episode.id} episodio={episode}/>
            ))}

        </div>
    )
}
