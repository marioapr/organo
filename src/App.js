import './reset.css'
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import { useState } from 'react';
import Tripulacao from './componentes/Tripulação';
import Rodapé from './componentes/Rodapé';

function App() {

  const Tripulacoes = [
    {
      nome:'Baroque Works',
      corPrimaria:'#FAE9F5',
      corSecundaria:'#DB6EBF',
    },
    {
      nome:'Chapéus de Palha',
      corPrimaria:'#FDE7E8',
      corSecundaria:'#E06B69',
    },
    {
      nome:'Cross Guild',
      corPrimaria:'#E8F8FF',
      corSecundaria:'#82CFFA',
    },
    {
      nome:'Piratas da Big Mom',
      corPrimaria:'#FFF5D9',
      corSecundaria:'#FFBA05',
    },
    {
      nome:'Piratas do Barba Branca',
      corPrimaria:'#E8F8FF',
      corSecundaria:'#82CFFA',
    },
    {
      nome:'Piratas do Ruivo',
      corPrimaria:'#FDE7E8',
      corSecundaria:'#E06B69',
    },
    {
      nome:'Piratas Donquixote',
      corPrimaria:'#FAE9F5',
      corSecundaria:'#DB6EBF',
    },
    {
      nome:'Piratas Heart',
      corPrimaria:'#FFF5D9',
      corSecundaria:'#FFBA05',
    },
    {
      nome:'Piratas Kid',
      corPrimaria:'#FDE7E8',
      corSecundaria:'#E06B69',
    }
  ]

  const [piratas, setPiratas] = useState([])
  const aoPirataAdicionado = (pirata) => {
    console.log(pirata)
    setPiratas([...piratas, pirata])

  }

  return (
    <div className='App'>
      <Banner />
      <Formulario tripulacoes={Tripulacoes.map(tripulacao => tripulacao.nome)} aoPirataCadastrado={pirata => aoPirataAdicionado(pirata)}/>
      
      {Tripulacoes.map(tripulacao => <Tripulacao
      key={tripulacao.nome}
      nome={tripulacao.nome}
      corPrimaria={tripulacao.corPrimaria}
      corSecundaria={tripulacao.corSecundaria}
      piratas={piratas.filter(pirata => pirata.tripulacao === tripulacao.nome)}
      />)}

      <Rodapé/>
    </div>

  );
};

export default App;
