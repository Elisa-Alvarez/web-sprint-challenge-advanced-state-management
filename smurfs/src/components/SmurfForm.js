import React, { useContext }  from 'react'
import { SmurfFormContext } from '../contexts/smurfFormContext'

const AddSmurf = () => {

    const { onChange, onFormSubmit, formInput } = useContext(SmurfFormContext)
 

    return (
        <div className='form-container'>
            <h2>Add Smurf</h2>
                <form onSubmit={onFormSubmit}>
                    <label>Name</label>
                        <input 
                            name='name'
                            value={formInput.name}
                            onChange={onChange}
                        />
                    <label>Age</label>
                        <input
                            name='age'
                            value={formInput.age}
                            onChange={onChange}
                        />
                    <label>Height</label>
                    <input
                        name='height'
                        value={formInput.height}
                        onChange={onChange}
                        />

                    <button>Submit</button>
                    
                </form>
        </div>
    )
}

export default AddSmurf