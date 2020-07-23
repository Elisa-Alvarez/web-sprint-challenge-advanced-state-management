import React, { useState, useEffect } from "react";
import { SmurfContext } from '../contexts/smurfContext'
import { SmurfFormContext } from '../contexts/smurfFormContext'

import axios from 'axios'
import "./App.css";

import Smurf from './Smurf'
import { Route } from 'react-router-dom'
import SmurfForm from "./SmurfForm.js";


const initialFormValues = {

    name: '',
    age: '',
    height: ''
  
  }




function App() {

  const [ smurfs, setSmurfs ] = useState([]);
  const [ formInput, setFormInput ] = useState(initialFormValues)
  

  const onChange = evt => {
    const name = evt.target.name
    const value = evt.target.value

      setFormInput({
        ...formInput,
        [name]: value 
    })
  }

    const onFormSubmit = evt => {
      evt.preventDefault()
  
      const newSmurf = {
        name: formInput.name.trim(),
        age: formInput.age.trim(),
        height: formInput.height.trim(),
        id: new Date()
      }

      postNewSmuf(newSmurf)
    }

    const postNewSmuf = addNewSmurf => {
  
      axios.post('http://localhost:3333/smurfs', addNewSmurf)
        .then(res => {
          console.log(res.data)
          setSmurfs(res.data)
        })
        .catch(err => {
          debugger
        })
        .finally(() => {
          setFormInput(initialFormValues)
        })
    }


  useEffect(() => { 
    axios.get(`http://localhost:3333/smurfs`)
      .then(res => {
        console.log(res)
        setSmurfs(res.data)
      })
      .catch(err => {
        console.log(err)
      })
    }, [])

    
    
  const smurfRemove = smurf => {

      axios.delete(`http://localhost:3333/smurfs/${smurf}`)
      .then(res => {
        setSmurfs(res.data)
      })
      .catch(err => {
        debugger
      })

    }

    return (
    <SmurfContext.Provider value={{smurfs, smurfRemove}}>
      <SmurfFormContext.Provider value={{onChange, onFormSubmit, formInput}}>
                  <Smurf/>
                  <SmurfForm/>
        </SmurfFormContext.Provider>
    </SmurfContext.Provider>
    )

}

export default App;