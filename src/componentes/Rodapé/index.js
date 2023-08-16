import './Rodapé.css';

const Rodapé = () => {
    return (
        <footer className='rodape'>
            <div className='links'>
                <a href='https://www.instagram.com/mario_apr/'>
                    <img src='/images/ig.png'/>
                </a>
                <a href='https://twitter.com/AnthonycomY'>
                    <img src='/images/tw.png'/>
                </a>
            </div>
            <div>
                <img src='/images/logo.png'/>
            </div>
            <div className='texto'>
                <p>Desenvolvido por Mário Anthony</p>
            </div>
        </footer>
    )
}

export default Rodapé