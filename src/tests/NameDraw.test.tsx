import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { RecoilRoot } from 'recoil';
import NameDraw from '../pages/NameDraw';
import { useListParticipants } from '../state/hooks/useListParticipants';
import { useResultadoSorteio } from '../state/hooks/useResultadoSorteio';

jest.mock('../state/hooks/useListParticipants', () => {
  return {
    useListParticipants: jest.fn(),
  };
});

jest.mock('../state/hooks/useResultadoSorteio', () => {
  return {
    useResultadoSorteio: jest.fn(),
  };
});

describe('A página de sorteio', () => {
  const participants = ['Goku', 'Vegeta', 'Gohan', 'Trunks'];

  const resultado = new Map([
    ['Goku', 'Gohan'],
    ['Trunks', 'Vegeta'],
  ]);

  beforeEach(() => {
    (useListParticipants as jest.Mock).mockReturnValue(participants);
    (useResultadoSorteio as jest.Mock).mockReturnValue(resultado);
  });

  test('Todos os participantes podem exibir o seu amigo secreto', () => {
    render(
      <RecoilRoot>
        <NameDraw />
      </RecoilRoot>
    );

    const options = screen.queryAllByRole('option');
    expect(options).toHaveLength(participants.length);
  });

  test('O amigo secreto é exibido quando solicitado', () => {
    render(
      <RecoilRoot>
        <NameDraw />
      </RecoilRoot>
    );

    const select = screen.getByPlaceholderText('Selecione o seu nome');

    fireEvent.change(select, {
      target: {
        value: participants[0],
      },
    });

    const button = screen.getByRole('button');

    fireEvent.click(button);

    const secretFriend = screen.getByRole('alert');

    expect(secretFriend).toBeInTheDocument();
  });
});
