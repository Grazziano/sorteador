import React from 'react';
import { useListParticipants } from '../../state/hooks/useListParticipants';

function NameDraw() {
  const participants = useListParticipants();

  return (
    <section>
      <form>
        <select name="participants" id="participants">
          {participants.map((participant) => (
            <option key={participant} value={participant}>
              {participant}
            </option>
          ))}
        </select>
      </form>
    </section>
  );
}

export default NameDraw;
