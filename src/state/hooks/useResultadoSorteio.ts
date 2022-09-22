import { useRecoilValue } from 'recoil';
import { finalResult } from '../atom';

export const useResultadoSorteio = () => {
  return useRecoilValue(finalResult);
};
