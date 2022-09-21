import React from 'react';
import { useListParticipants } from '../../state/hooks/useListParticipants';

function List() {
  const participants: string[] = useListParticipants();

  return (
    <ul>
      {participants.map((participant) => (
        <li key={participant}>{participant}</li>
      ))}
    </ul>
  );
}

export default List;
