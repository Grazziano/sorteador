import { realizarSorteio } from '../state/helpers/realizarSorteio';

describe('Dado um sorteio de amigo secreto', () => {
  test('Cada participante não sorteio o próprio nome', () => {
    const participantes = ['Goku', 'Vegeta', 'Trunks'];

    const sorteio = realizarSorteio(participantes);

    participantes.forEach((participante) => {
      const amigoSecreto = sorteio.get(participante);

      expect(amigoSecreto).not.toEqual(participante);
    });
  });
});
