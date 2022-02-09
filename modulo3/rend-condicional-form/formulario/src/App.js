import { render } from '@testing-library/react';
import './App.css';
import Etapa1 from './components/Etapa1';
import Etapa2 from './components/Etapa2';
import Etapa3 from './components/Etapa3';
import Final from './components/Final';

export default function App() {
 state = {
   login: false

 }

  render () {
    let pagina = <h1>Página erro</h1>
    if (this.state.login) {
      pagina = <Etapa1 />
    } else {
      pagina = <Etapa2 />
    }
  }

  return (
    <div className="App">

      <Etapa1 />
      <Etapa2 />
      <Etapa3 />
      <Final />
 
    </div>
  );
}
