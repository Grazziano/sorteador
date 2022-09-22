import { useSetRecoilState } from 'recoil';
import { finalResult } from '../atom';
import { realizarSorteio } from '../helpers/realizarSorteio';
import { useListParticipants } from './useListParticipants';

export const useSorteador = () => {
  const participants = useListParticipants();

  const setResultado = useSetRecoilState(finalResult);

  return () => {
    const result = realizarSorteio(participants);
    setResultado(result);
  };
};
