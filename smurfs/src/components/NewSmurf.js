import React, { useContext } from 'react'
import { SmurfContext } from '../contexts/smurfContext'


const NewSmurf = props => {

    const { smurfRemove } = useContext(SmurfContext)

    return (
        <div>
            
            <h2> {props.smurf.name}</h2>
            <p>Age: {props.smurf.age}</p>
            <p>Height: {props.smurf.height}</p>
            <button onClick={() => smurfRemove(props.smurf.id)}>Delete</button>
        </div>
    )
}

export default NewSmurf