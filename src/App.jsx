import { useState } from 'react';
import './App.scss';
import pokedex from './img/pokedex.png'

export default function App() {
  const [nome, setNome] = useState('');
  const [numero, setNumero] = useState('');
  const [imagem, setImagem] = useState('');
  const [pesquisa, setPesquisa] = useState('');

  const fetchPokemon = async(pokemon) => {
      const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
      const dados = await APIResponse.json();
      return dados;
  }
  
  const renderPokemon = async(pokemon) => {
    const dados = await fetchPokemon(pokemon);
    setNome(dados.name);
    setNumero(dados.id);
    setImagem(dados['sprites']['versions']['generation-v']['black-white']['animated']['front_default']);
  }
  renderPokemon('1')

  return (
    <div className="container">
      <img src={imagem} alt="pokemon" className='pokemon-img'/>
      
      <h1 className='dados-pokemon'>
        <span className='numero-pokemon'>{numero} - </span>  
        <span className='nome-pokemon'>{nome}</span>
      </h1>
      
      <form className='form'>
        <input type="search" placeholder='nome ou número' className='input_pesquisa' id='input' required value={pesquisa}/>
      </form>

      <div className='buttons'>
        <button className='btn'>Voltar &lt;</button>
        <button className='btn'>Próximo &gt;</button>
      </div>

      <img src={pokedex} alt="Pokedex" className='pokedex'/>
    </div>
  );
}


