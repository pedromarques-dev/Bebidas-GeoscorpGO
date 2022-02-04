import { useNavigate } from 'react-router-dom'
import { Header } from './styles'
 
export const Cabecalho = () => {

    const navigate = useNavigate()
    
    return (
        <>
        <Header>
            <h2 onClick={() => navigate('/')}>Bebidas GescorpoGO</h2>

            <nav>
                <ul>
                    <li><a onClick={() => navigate('/')}>Listagem</a></li>
                    <li><a onClick={() => navigate('/cadastro')}>Cadastro</a></li>
                </ul>
            </nav>
        </Header>
        </>
    )
}



