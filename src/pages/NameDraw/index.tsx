import React, { useState } from 'react';
import { useListParticipants } from '../../state/hooks/useListParticipants';
import { useResultadoSorteio } from '../../state/hooks/useResultadoSorteio';

function NameDraw() {
  const participants = useListParticipants();

  const [participante, setParticipante] = useState('');
  const [amigo, setAmigo] = useState('');

  const result = useResultadoSorteio();

  const sortear = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (result.has(participante)) {
      setAmigo(result.get(participante)!);
    }
  };

  return (
    <section>
      <form onSubmit={sortear}>
        <select
          value={participante}
          onChange={(event) => setParticipante(event.target.value)}
          required
          name="participants"
          id="participants"
          placeholder="Selecione o seu nome"
        >
          {participants.map((participant) => (
            <option key={participant} value={participant}>
              {participant}
            </option>
          ))}
        </select>
        <button>Sortear</button>
      </form>
      {amigo && <p role="alert">{amigo}</p>}
    </section>
  );
}

export default NameDraw;
