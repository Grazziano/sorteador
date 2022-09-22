import shuffle from 'just-shuffle';
import { useSetRecoilState } from 'recoil';
import { finalResult } from '../atom';
import { useListParticipants } from './useListParticipants';

export const useSorteador = () => {
  const participants = useListParticipants();

  const setResultado = useSetRecoilState(finalResult);

  return () => {
    const totalPartcipants = participants.length;

    const shuffleParticipants = shuffle(participants);

    const result = new Map<string, string>();

    for (let index = 0; index < totalPartcipants; index++) {
      const friendIndex = index === totalPartcipants - 1 ? 0 : index + 1;
      result.set(shuffleParticipants[index], shuffleParticipants[friendIndex]);
    }

    setResultado(result);
  };
};
