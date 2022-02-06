import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import { Cabecalho } from "../components/header";
import { Cadastro } from "./cadastro";
import { Listagem } from "./listagem";


export function AppRoutes() {
    return (
        <Router>
            <Cabecalho />
            <Routes>
                <Route path='/' element={<Listagem />} />
                <Route path='/cadastro' element={<Cadastro />} />
            </Routes>
        </Router>
    )
}