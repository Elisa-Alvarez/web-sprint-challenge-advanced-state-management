import React, { useContext } from 'react'
import { SmurfContext } from '../contexts/smurfContext'

import NewSmurf from './NewSmurf'

const Smurf = () => {

    const { smurfs } = useContext(SmurfContext)

    return (
        <div className='App'>
            <h2>My Smurf Village</h2>
        
                <div >
                    
                    {
                        smurfs.map(item => (
                            <NewSmurf key={item.id} smurf={item}/>
                        ))

                    }
            </div>
    </div>
    )
}

export default Smurf