import "./Cartaz.css";

const  Cartaz = (props) =>{
    return (
        <div className="cartaz">
            <h4 className="cargo">{props.cargo}</h4>
            <div className="cartaz-conteudo">
                <div className="cartaz-imagem">
                    <img src={props.imagem} alt={props.nome}/>
                </div>
                    <h4 className="nome">{props.nome}</h4>
                    <h5 className="recompensa">{props.recompensa}</h5>
            </div>
        </div>
    )
};

export default Cartaz