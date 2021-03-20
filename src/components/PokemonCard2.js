import React from 'react'

export const PokemonCard2 = ({pokemon}) => {
    const {movimientos}=pokemon
    const {move}=movimientos[0]
    console.log(move.name);
    return (
        <div className="card ms-3">
            <div className="row no-gutters">

            
            <div className="card-md-4">
                <img src={pokemon.imagen} alt={pokemon.name} width="100px"/>
            </div>
                <div className="col-md-8">
                    <h5 className="card-title">{pokemon.nombre}</h5>
                    <h6 className="card-text">{pokemon.habilidad}</h6>
                    <ul>
                        {
                            movimientos.map(movimiento=>(
                                 (<li key={movimiento.move.name}>{movimiento.move.name}</li>)
                            ))
                        }
                    </ul>
                </div>
            </div>           
        </div>
    )
}
/*
{nombre:'',imagen:'',habilidad:'',movimientos:[]}
*/