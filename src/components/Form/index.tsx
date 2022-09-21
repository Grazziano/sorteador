import { useRef, useState } from 'react';
import { useAddParticipant } from '../../state/hooks/useAddParticipant';
import { useErrorMessage } from '../../state/hooks/useErrorMessage';
import './Form.css';

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
      <div className="grupo-input-btn">
        <input
          ref={inputRef}
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Insira os nomes dos participantes"
        />
        <button disabled={!name}>Adicionar</button>
      </div>
      {errorMessage && (
        <p role="alert" className="alerta erro">
          {errorMessage}
        </p>
      )}
    </form>
  );
}

export default Form;
