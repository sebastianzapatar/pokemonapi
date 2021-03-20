import React, { useEffect, useState } from 'react';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import { useForm } from './useForm';
import { PokemonCard2 } from './PokemonCard2';

export const BuscarPokemon = ({ history }) => {

    const location = useLocation();
    const { q = '' } = queryString.parse(location.search);
    const [pokemon, setPokemon] = useState({ nombre: '', imagen: '', habilidad: '', movimientos: [] })
    console.log(location.search);
   
    const [form, handleInputChange] = useForm({
        searchtext: q,
    });

    const { searchtext } = form;
    console.log(searchtext);
    const getPokemonId = async () => {
        if (searchtext) {
            const url = `https://pokeapi.co/api/v2/pokemon/${searchtext}`;
            const resp = await fetch(url);
            const { abilities, sprites, forms, moves } = await resp.json();
            const { front_default } = sprites;
            const { ability } = abilities[0];
            setPokemon({ nombre: forms[0].name, imagen: front_default, habilidad: ability.name, movimientos: moves });
        }


    }
    useEffect(() => {
        getPokemonId();

    }, [searchtext])
    let mostrar="";
    if(pokemon.movimientos.length>0){
        mostrar=<PokemonCard2 pokemon={pokemon} />
    }
    console.log(pokemon)
    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${searchtext}`);

    }
    return (
        <div>
            <h1>Buscando Pokemon</h1>
            <div className="row">
                <div className="col-5">
                    <h4>Search form</h4>
                    <hr />
                    <form onSubmit={handleSearch}>
                        <input
                            type="text"
                            placeholder="Find your pokemon by id"
                            className="form-control"
                            name="searchtext"
                            value={searchtext}
                            onChange={handleInputChange}
                        >

                        </input>

                    </form>
                </div>
            </div>
            {mostrar}
                
            
                
            
            
        </div>
    )
}
