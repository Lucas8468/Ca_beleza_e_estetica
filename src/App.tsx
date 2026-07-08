import { useEffect } from "react";
export default function App() {
  useEffect(() => {
    document.title = "Carine";
  })
  return (
    <>
    <h1 className="h1">Cá: beleza e estética</h1>
    <div className="Container">
      <h1 className="text-servico">Mãos: R$20,00</h1>
      <img src="/Unhas.jpg" alt="Unhas" height="200" className="card-servico"/>
      <h1 className="text-servico">Pés: R$20,00</h1>
      <img src="/Pés.jpg" alt="Pés" height="200" className="card-servico"/>
      <h1 className="text-servico">Pintar Unhas: R$10,00</h1>
      <img src="/pintarUnhas.jpg" alt="Pés" height="200" className="card-servico"/>

      <h1 className="text-servico">Base: R$10,00</h1>
      <img src="/Base.jpg" alt="Pés" height="200" className="card-servico"/>
      
    </div>
    <hr className="hr4"/>
    <h1 className="h1">Informações de Contato</h1>
    <ul className="h2">
      <li className='li'>Contato: +55 11 98324-3545</li>
      <li className='li'>Endereço: Av. Felisberto Pereira Santiago 163. Carapicuíba - SP</li>
    </ul>
    <a className="wpp" href="https://wa.me/5511983243545" target="_blank" rel="noopener noreferrer">Fale conosco no WhatsApp</a>
    </>
  );
}