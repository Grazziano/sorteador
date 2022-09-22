import { render, screen } from '@testing-library/react';
import React from 'react';
import { RecoilRoot } from 'recoil';
import NameDraw from '../pages/NameDraw';
import { useListParticipants } from '../state/hooks/useListParticipants';

jest.mock('../state/hooks/useListParticipants', () => {
  return {
    useListParticipants: jest.fn(),
  };
});

describe('A página de sorteio', () => {
  const participants = ['Goku', 'Vegeta', 'Gohan', 'Trunks'];

  beforeEach(() => {
    (useListParticipants as jest.Mock).mockReturnValue(participants);
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
});
