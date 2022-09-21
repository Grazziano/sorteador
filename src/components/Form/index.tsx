import { useRef, useState } from 'react';
import { useAddParticipant } from '../../state/hooks/useAddParticipant';
import { useErrorMessage } from '../../state/hooks/useErrorMessage';

function Form() {
  const [name, setName] = useState('');

  const inputRef = useRef<HTMLInputElement>(null);

  const addList = useAddParticipant();

  const errorMessage = useErrorMessage();

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
      {errorMessage && <p role="alert">{errorMessage}</p>}
    </form>
  );
}

export default Form;
