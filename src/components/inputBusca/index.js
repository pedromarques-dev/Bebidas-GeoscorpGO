import React from "react"
import { Pesquisa } from "./styles"

export const InputBusca = ({ busca, onChange, pesquisar, filtrarBebidas }) => {
    return (
        <Pesquisa>
            <input
                onKeyPress={(event) => {
                    if (event.key === 'Enter') {
                        event.preventDefault()
                        filtrarBebidas()
                    }
                }}
                value={busca}
                onChange={onChange}
                type='search'
                placeholder="Pesquisar..." />

            <button
                onClick={pesquisar}>
                <i className="fas fa-search"></i>
            </button>
        </Pesquisa>
    )
}
