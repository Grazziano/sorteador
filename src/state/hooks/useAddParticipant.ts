import { useSetRecoilState } from 'recoil';
import { listaParticipantesState } from '../atom';

export const useAddParticipant = () => {
  const setList = useSetRecoilState(listaParticipantesState);
  return (nomeDoParticipante: string) => {
    return setList((listaAtual) => [...listaAtual, nomeDoParticipante]);
  };
};
