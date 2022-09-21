import { useRef, useState } from 'react';
import { useAddParticipant } from '../../state/hooks/useAddParticipant';

function Form() {
  const [name, setName] = useState('');

  const inputRef = useRef<HTMLInputElement>(null);

  const addList = useAddParticipant();

  const addParticipant = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    addList(name);

    setName('');
    inputRef.current?.focus();
  };

  return (
    <form onSubmit={addParticipant}>
      <input
        ref={inputRef}
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Insira os nomes dos participantes"
      />
      <button disabled={!name}>Adicionar</button>
    </form>
  );
}

export default Form;
