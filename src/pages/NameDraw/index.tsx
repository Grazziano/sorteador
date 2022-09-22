import React, { useState } from 'react';
import Card from '../../components/Card';
import { useListParticipants } from '../../state/hooks/useListParticipants';
import { useResultadoSorteio } from '../../state/hooks/useResultadoSorteio';
import './NameDraw.css';

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
    <Card>
      <section className="sorteio">
        <h2>Quem vai tirar o papelzinho?</h2>
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
          <p>Clique em em sortear para ver quem é seu amigo secreto!</p>
          <button className="botao-sortear">Sortear</button>
        </form>
        {amigo && <p role="alert">{amigo}</p>}
        <footer className="sorteio">
          <img
            src="/images/aviao.png"
            className="aviao"
            alt="Um desenho de um avião de papel"
          />
        </footer>
      </section>
    </Card>
  );
}

export default NameDraw;
