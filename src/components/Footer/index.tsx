import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useListParticipants } from '../../state/hooks/useListParticipants';

function Footer() {
  const participants = useListParticipants();

  const navigate = useNavigate();

  const start = () => {
    navigate('/sorteio');
  };

  return (
    <footer>
      <button disabled={participants.length < 3} onClick={start}>
        Iniciar brincadeira
      </button>
    </footer>
  );
}

export default Footer;
