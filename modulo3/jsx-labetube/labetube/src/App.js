import './App.css';

function App() {
  const titulo1 = "Vídeo 01"; alert("O vídeo está sendo reproduzido")
  const titulo2 = "Vídeo 02"; alert("O vídeo está sendo reproduzido")
  const titulo3 = "Vídeo 03"; alert("O vídeo está sendo reproduzido")
  const titulo4 = "Vídeo 04"; alert("O vídeo está sendo reproduzido")
  const titulo5 = "Vídeo 05"; alert("O vídeo está sendo reproduzido")
  const titulo6 = "Vídeo 06"; alert("O vídeo está sendo reproduzido")
  const titulo7 = "Vídeo 07"; alert("O vídeo está sendo reproduzido")
  const titulo8 = "Vídeo 08"; alert("O vídeo está sendo reproduzido")
  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido")    
  }
  return (
    <div className="tela-inteira">
        <header>
            <h1>FutureTube</h1>
            <input type="text" placeholder="Busca" id="campoDeBusca" />
        </header>

        <main>
            <nav classname="menu-vertical">
                <ul>
                    <li className="botoes-meunu-vertical">Início</li>
                    <li className="botoes-meunu-vertical">Em alta</li>
                    <li className="botoes-meunu-vertical">Inscrições</li>
                    <hr />
                    <li className="bo0toes-meunu-vertical">Originais</li>
                    <li className="botoes-meunu-vertical">Histórico</li>
                </ul>
            </nav>
            
            <section className="painel-de-videos">
                  <div className="box-pagina-principal media1" onClick={reproduzVideo()}>
                    <img src="https://picsum.photos/400/400?a=1 " alt="" />
                    <h4>{titulo1}</h4>
                </div>
                <div className="box-pagina-principal media2" onClick={reproduzVideo()}>
                    <img src="https://picsum.photos/400/400?a=2 " alt="" />
                    <h4>{titulo2}</h4>
                </div>
                <div className="box-pagina-principal media3" onClick={reproduzVideo()}>
                    <img src="https://picsum.photos/400/400?a=3 " alt="" />
                    <h4>{titulo3}</h4>
                </div>
                <div className="box-pagina-principal media4" onClick={reproduzVideo()}>
                    <img src="https://picsum.photos/400/400?a=4 " alt="" />
                    <h4>{titulo4}</h4>
                </div>
                <div className="box-pagina-principal media5" onClick={reproduzVideo()}>
                    <img src="https://picsum.photos/400/400?a=5 " alt="" />
                    <h4>{titulo5}</h4>
                </div>
                <div className="box-pagina-principal media6" onClick={reproduzVideo()}>
                    <img src="https://picsum.photos/400/400?a=6 " alt="" />
                    <h4>{titulo6}</h4>
                </div>
                <div className="box-pagina-principal media7" onClick={reproduzVideo()}>
                    <img src="https://picsum.photos/400/400?a=7 " alt="" />
                    <h4>{titulo7}</h4>
                </div>
                <div className="box-pagina-principal media8" onClick={reproduzVideo()}>
                    <img src="https://picsum.photos/400/400?a=8 " alt="" />
                    <h4>{titulo8}</h4>
                </div>
            </section>
        </main>

        <footer>
            <h4>Oi! Eu moro no footer!</h4>
        </footer>
    </div>      
 );
}


export default App;
