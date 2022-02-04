import * as React from "react"
import {Section, Card} from './styles'

export const Bebidas = ({itens, removerBebida}) => {

    function limitarCaracteres (str, numeroDeCaracteres) {
        if(str.length > numeroDeCaracteres){
           return `${str.substring(0, numeroDeCaracteres - 3)}...`
        }
        return str
    }

   

    return (
        <Section>
            
            {itens.length === 0 && <h1>Nao contem bebidas na lista</h1>}
            {
                itens.map((bebida, index) => 
                    (
                        <Card key={index}>
                            <img src={bebida.image_url} />
                            <h3>{bebida.name}</h3>
                            <p>{limitarCaracteres(bebida.description, 90)}</p>
                            <button onClick={() => removerBebida(bebida)}><i className="fa fa-trash" aria-hidden="true"></i></button>
                        </Card>
                    
                    )
                )
            }
        </Section>
    )
}


