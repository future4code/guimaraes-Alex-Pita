import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import Eu from './img/alex.jpeg'
import IconeEmail from './img/icone-email.png'
import IconeRua from './img/icone-rua.png'
function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={Eu} 
          nome="Alex Bitencourt Pita" 
          descricao="Sempre me encantei pelo mundo da tecnologia, até que resolvi arriscar. Estou em transição de carreira e meus estudos tenho focado no desenvolvimento fullstack.

          Alguns projetos é possível visualizar através do meu."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno
          imagem={IconeEmail}
          fixo="Email"
          valor="Alex321654654@gmail.com"
        />
         <CardPequeno
        imagem={IconeRua}
        fixo="Endereço"
        valor="Rua Salvador"
        />
      </div>

      
       
      
      
      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="" 
          nome="" 
          descricao="Desenvolvimento FullStack, – Labenu – Cursando
          OUTUBRO DE 2021 – SETEMBRO DE 2022
          !" 
        />
        
        <CardGrande 
          imagem="https://img.icons8.com/color/452/nasa.png" 
          nome="NASA" 
          descricao="Apontando defeitos." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />
        <ImagemButton 
          imagem="https://icones.pro/wp-content/uploads/2021/03/icone-linkedin-ronde-originale.png" 
          texto="Linkdin" 
        />        
      </div>
    </div>
  );
}

export default App;
