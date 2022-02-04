import * as React from 'react'
import { InputBusca } from '../components/inputBusca'
import { Bebidas } from '../components/bebidas'
import { pegarBebidas } from '../services/api'
import { Context } from '../context'

export const Listagem = () => {
    const [busca, setBusca] = React.useState('')
    const [bebidasAtuais, setBebidasAtuais] = React.useState([])
    const { listaDeBebidas, setListaDeBebidas } = React.useContext(Context)
    function handleChange(event) {
        setBusca(event.target.value)
    }

    function filtrarBebidas() {
        const bebidasFiltradas = listaDeBebidas.filter((bebida) => {
            const buscaMinuscula = busca.toLowerCase()
            return (
                bebida.name.toLowerCase().includes(buscaMinuscula)
                ||
                bebida.description.toLowerCase().includes(buscaMinuscula)
            )
        })

        setBebidasAtuais(bebidasFiltradas)
        setBusca('')
    }

    function removerBebida(bebida) {
        const bebidaRemovida = listaDeBebidas.filter(bebidaAtual => bebidaAtual.id !== bebida)
        setListaDeBebidas(bebidaRemovida)
    }

    React.useEffect(() => {
        const fetchData = async () => {
            const data = await pegarBebidas()
            setListaDeBebidas(data)
            setBebidasAtuais(data)
        }

        if (listaDeBebidas.length < 1) {
            fetchData()
        }
    }, [])

    React.useEffect(() => {
        setBebidasAtuais(listaDeBebidas)
    }, [listaDeBebidas])

    return (
        <>
            <InputBusca
                value={busca}
                onChange={handleChange}
                pesquisar={filtrarBebidas}
                filtrarBebidas={filtrarBebidas} />
            <Bebidas
                itens={bebidasAtuais}
                removerBebida={(bebida) => removerBebida(bebida.id)} />

        </>
    )
}