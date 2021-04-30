import React from 'react'

export const BreakinCard = ({episodio}) => {
    return (
        <div>
            <h1>{episodio.id}</h1>
            <h2>{episodio.title}</h2>
            <h2>{episodio.characters}</h2>
        </div>
    )
}
