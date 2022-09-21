import { useRecoilValue, useSetRecoilState } from 'recoil';
import { errorState, listaParticipantesState } from '../atom';

export const useAddParticipant = () => {
  const setList = useSetRecoilState(listaParticipantesState);

  const list = useRecoilValue(listaParticipantesState);

  const setError = useSetRecoilState(errorState);

  return (nomeDoParticipante: string) => {
    if (list.includes(nomeDoParticipante)) {
      setError('Nomes duplicadosnão são permitidos!');
      setTimeout(() => {
        setError('');
      }, 5000);
      return;
    }
    return setList((listaAtual) => [...listaAtual, nomeDoParticipante]);
  };
};
