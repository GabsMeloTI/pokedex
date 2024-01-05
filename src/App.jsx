import { useEffect, useState } from 'react';
import './App.scss';
import pokedex from './img/pokedex.png'
import erro from './img/download.png'

export default function App() {
  const [nome, setNome] = useState('');
  const [numero, setNumero] = useState('');
  const [imagem, setImagem] = useState('');
  const [pesquisa, setPesquisa] = useState('');
  let numeroPokemon = 1;

  const fetchPokemon = async(pokemon) => {
      const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
      if(APIResponse.status === 200) {
        const dados = await APIResponse.json();
        return dados;
      }
  }
  
  const renderPokemon = async(pokemon) => {
    setNumero(0);
    setNome("Loading...");
    const dados = await fetchPokemon(pokemon);

    if(dados) {
      setNome(dados.name);
      setNumero(dados.id);
      setImagem(dados['sprites']['versions']['generation-v']['black-white']['animated']['front_default']);
    } else {
      setImagem()
      setNumero("404");
      setNome("Não encontrado")
      setImagem(erro)
    }
  }

  useEffect(() => {
    renderPokemon(numeroPokemon);
  }, []);

  const handleChange = (e) => {
    setPesquisa(e.target.value);
  }

  const handleClickMais = () => {
    numeroPokemon += 1;
    renderPokemon(numeroPokemon)
  }
  const handleClickMenos= () => {
    numeroPokemon -= 1;
    renderPokemon(numeroPokemon)
  }

  

  return (
    <div className="container">
      <img src={imagem} alt="pokemon" className='pokemon-img'/>
      
      <h1 className='dados-pokemon'>
        <span className='numero-pokemon'>{numero} - </span>  
        <span className='nome-pokemon'>{nome}</span>
      </h1>
      
      <form className='form' onSubmit={(e) => {
        e.preventDefault();
        renderPokemon(pesquisa.toLowerCase());
        setPesquisa('')
      }}>
        <input type="search" placeholder='nome ou número' className='input_pesquisa' id='pesquisa' value={pesquisa} onChange={handleChange}/>
      </form>

      <div className='buttons'>
        <button className='btn' onClick={handleClickMenos}>Voltar &lt;</button>
        <button className='btn'onClick={handleClickMais}>Próximo &gt;</button>
      </div>

      <img src={pokedex} alt="Pokedex" className='pokedex'/>
    </div>
  );
}


