import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useListParticipants } from '../../state/hooks/useListParticipants';

function Footer() {
  const participants = useListParticipants();

  const navigate = useNavigate();

  return (
    <footer>
      <button disabled={participants.length < 3}>Iniciar brincadeira</button>
    </footer>
  );
}

export default Footer;
