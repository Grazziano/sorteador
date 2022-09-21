import { render } from '@testing-library/react';
import React from 'react';
import { RecoilRoot } from 'recoil';
import Home from '../pages/Home';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => {
  return {
    useNavigate: () => mockNavigate,
  };
});

describe('A página de configuração', () => {
  test('Deve ser renderizada corretamente', () => {
    const { container } = render(
      <RecoilRoot>
        <Home />
      </RecoilRoot>
    );

    expect(container).toMatchSnapshot();
  });
});
