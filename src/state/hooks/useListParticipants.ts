import { useRecoilValue } from 'recoil';
import { listaParticipantesState } from '../atom';

export const useListParticipants = () => {
  return useRecoilValue(listaParticipantesState);
};
