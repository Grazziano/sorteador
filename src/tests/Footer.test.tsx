import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { RecoilRoot } from 'recoil';
import Footer from '../components/Footer';
import { useListParticipants } from '../state/hooks/useListParticipants';

jest.mock('../state/hooks/useListParticipants', () => {
  return {
    useListParticipants: jest.fn(),
  };
});

const mockNavigate = jest.fn();
const mockSorteio = jest.fn();

jest.mock('react-router-dom', () => {
  return {
    useNavigate: () => mockNavigate,
  };
});

jest.mock('../state/hooks/useSorteador', () => {
  return {
    useSorteador: () => mockSorteio,
  };
});

describe('Quando não existem participantes suficientes', () => {
  beforeEach(() => {
    (useListParticipants as jest.Mock).mockReturnValue([]);
  });

  test('A brincadeira não pode ser iniciada', () => {
    render(
      <RecoilRoot>
        <Footer />
      </RecoilRoot>
    );

    const button = screen.getByRole('button');

    expect(button).toBeDisabled();
  });
});

describe('Quando existem participantes suficientes', () => {
  beforeEach(() => {
    (useListParticipants as jest.Mock).mockReturnValue([
      'Naruto',
      'Sasuke',
      'Sakura',
      'Jiraiya',
      'Tsunade',
    ]);
  });

  test('A brincadeira pode ser iniciada', () => {
    render(
      <RecoilRoot>
        <Footer />
      </RecoilRoot>
    );

    const button = screen.getByRole('button');

    expect(button).not.toBeDisabled();
  });

  test('A brincadeira foi iniciada', () => {
    render(
      <RecoilRoot>
        <Footer />
      </RecoilRoot>
    );

    const button = screen.getByRole('button');

    fireEvent.click(button);

    expect(mockNavigate).toHaveBeenCalledTimes(1);
    expect(mockNavigate).toHaveBeenCalledWith('/sorteio');
    expect(mockSorteio).toHaveBeenCalledTimes(1);
  });
});
