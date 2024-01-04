import './App.scss';
import pokedex from './img/pokedex.png'

export default function App() {
  return (
    <div className="container">
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/25.png" alt="pokemon" className='pokemon-img'/>
      
      <h1 className='dados-pokemon'>
        <span className='numero-pokemon'>25 - </span>  
        <span className='nome-pokemon'>Pikachu</span>
      </h1>
      
      <form className='form'>
        <input type="search" placeholder='nome ou número' className='input_pesquisa' id='input' required/>
      </form>

      <div className='buttons'>
        <button className='btn'>Voltar &lt;</button>
        <button className='btn'>Próximo &gt;</button>
      </div>

      <img src={pokedex} alt="Pokedex" className='pokedex'/>
    </div>
  );
}


