import { createContext, useState } from 'react'

export const Context = createContext({})

export const Provider = (props) => {

    const [ listaDeBebidas, setListaDeBebidas ] = useState([])

    return (
        <Context.Provider value={{listaDeBebidas, setListaDeBebidas}}>
            {props.children}
        </Context.Provider>
    )
}
  


