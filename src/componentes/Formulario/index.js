import "./formulario.css";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botão";
import { useState } from "react";

const Formulario = (props) => {

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [recompensa, setRecompensa] = useState('');
    const [imagem, setImagem] = useState('');
    const [tripulacao, setTripulacao] = useState('');

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoPirataCadastrado({
            nome:nome,
            cargo:cargo,
            recompensa:recompensa,
            imagem:imagem,
            tripulacao:tripulacao
        })
        setNome('');
        setCargo('');
        setRecompensa('');
        setImagem('');
        setTripulacao('');
    }
    
    return (
        <section className="formulario">
        <form  onSubmit={aoSalvar}>
            <h3>Preencha os dados para criar o cartaz do pirata.</h3>
             <CampoTexto 
                obrigatorio={true} 
                label="Nome"
                placeholder="Digite o nome do pirata" 
                valor={nome}
                aoAlterado={valor => setNome(valor)}/>
            <CampoTexto 
                obrigatorio={true}
                label="Cargo na tripulação" 
                placeholder="Digite o cargo do pirata"
                valor={cargo}
                aoAlterado={valor => setCargo(valor)}/>
            <CampoTexto 
                obrigatorio={true} 
                label="Recompensa" 
                placeholder="Digite a recompensa do pirata"
                valor={recompensa}
                aoAlterado={valor => setRecompensa(valor)} />
            <p>*Caso a recompensa seja desconhecida, preencha o campo com "Desconhecida"*</p>
            <CampoTexto 
                label="Imagem"
                placeholder="Informe o endereço da imagem do pirata"
                valor={imagem}
                aoAlterado={valor => setImagem(valor)} />
            <ListaSuspensa 
                obrigatorio={true} 
                label="Tripulações" 
                itens={props.tripulacoes}
                valor={tripulacao}
                aoAlterado={valor => setTripulacao(valor)}/>
            <Botao>
                Criar cartaz
            </Botao>
        </form>
        </section>
    )
}

export default Formulario