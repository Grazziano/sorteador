import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useListParticipants } from '../../state/hooks/useListParticipants';
import './Footer.css';

function Footer() {
  const participants = useListParticipants();

  const navigate = useNavigate();

  const start = () => {
    navigate('/sorteio');
  };

  return (
    <footer className="rodape-configuracoes">
      <button
        className="botao"
        disabled={participants.length < 3}
        onClick={start}
      >
        Iniciar brincadeira
      </button>
      <img src="/imagens/sacolas.png" alt="Sacolas de compras" />
    </footer>
  );
}

export default Footer;
