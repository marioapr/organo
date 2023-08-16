import Cartaz from "../Cartaz"
import "./Tripulacao.css"

const Tripulacao = (props) => {
    return (

        (props.piratas.length > 0) ? <section style={{backgroundColor:props.corPrimaria}} className="tripulacao">
            <h3 style={{borderColor:props.corSecundaria}}>{props.nome}</h3>
            <div className="tripulacao-conteudo">
            {props.piratas.map(pirata => <Cartaz key={pirata.nome} nome={pirata.nome} cargo={pirata.cargo} recompensa={pirata.recompensa} imagem={pirata.imagem}/>)}
            </div>
        </section> : ""
    )
}

export default Tripulacao