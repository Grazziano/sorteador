import { render, screen } from '@testing-library/react';
import React from 'react';
import { RecoilRoot } from 'recoil';
import List from '../components/List';
import { useListParticipants } from '../state/hooks/useListParticipants';

jest.mock('../state/hooks/useListParticipants', () => {
  return {
    useListParticipants: jest.fn(),
  };
});

describe('Uma lista vazia de participantes', () => {
  beforeEach(() => {
    (useListParticipants as jest.Mock).mockReturnValue([]);
  });

  test('Deve ser renderizada sem elementos', () => {
    render(
      <RecoilRoot>
        <List />
      </RecoilRoot>
    );

    const itens = screen.queryAllByRole('listitem');
    expect(itens).toHaveLength(0);
  });
});

describe('Uma lista preenchida de participantes', () => {
  const participants = ['Lara', 'Jill', 'Clare'];

  beforeEach(() => {
    (useListParticipants as jest.Mock).mockReturnValue(participants);
  });

  test('Deve ser renderizada sem elementos', () => {
    render(
      <RecoilRoot>
        <List />
      </RecoilRoot>
    );

    const itens = screen.queryAllByRole('listitem');
    expect(itens).toHaveLength(participants.length);
  });
});
