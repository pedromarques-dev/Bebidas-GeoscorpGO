import * as React from 'react'
import { Section } from './styles.js'
import { Context } from '../../context'


export const FormularioDeCadastro = () => {
    const { listaDeBebidas, setListaDeBebidas } = React.useContext(Context)
    const [nome, setNome] = React.useState('')
    const [descricao, setDescricao] = React.useState('')
    let key = listaDeBebidas.length


    function adicionarBebida() {
        if(nome.length > 0 && descricao.length > 0){
            setListaDeBebidas([
                ...listaDeBebidas,
                { id: key++, image_url: 'http://via.placeholder.com/100x150', name: nome, description: descricao }
            ])
            setNome('')
            setDescricao('')
            alert('Bebida adicionada com sucesso 😀')
        } else {
            alert('Preencha todos os campos para realizar cadastro')
            return false;
        }
    }

    return (
        <Section>
            <div>
                <h2>Bebida:</h2>
                <input
                    type='text'
                    value={nome}
                    onKeyDown={(e) => console.log(e)}
                    onChange={(e) => { setNome(e.target.value) }} />
                <h2>Descrição:</h2>
                <input
                    type='text'
                    value={descricao}
                    onKeyPress={(event) => {
                        if (event.key === 'Enter') {
                            event.preventDefault()
                            adicionarBebida()
                        }
                    }}
                    onChange={(e) => setDescricao(e.target.value)} />

                <br />
                <button onClick={adicionarBebida} >Salvar</button>
            </div>
        </Section>
    )
}

