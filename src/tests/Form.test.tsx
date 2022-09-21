import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { RecoilRoot } from 'recoil';
import { textSpanEnd } from 'typescript';
import Form from '../components/Form';

test('Quando a entrada está vazia, novos participantes não podem ser adicionados', () => {
  render(
    <RecoilRoot>
      <Form />
    </RecoilRoot>
  );

  // Encontra no DOM o input
  const input = screen.getByPlaceholderText(
    'Insira os nomes dos participantes'
  );

  // Encontra o botão
  const button = screen.getByRole('button');

  // Garantir que o input esteja no documento
  expect(input).toBeInTheDocument();
  // Garantir que o botão esteja desabilitado
  expect(button).toBeDisabled();
});

test('Adicionar um participante caso exista um nome preenchido', () => {
  render(
    <RecoilRoot>
      <Form />
    </RecoilRoot>
  );

  // Encontra no DOM o input
  const input = screen.getByPlaceholderText(
    'Insira os nomes dos participantes'
  );

  // Encontra o botão
  const button = screen.getByRole('button');

  // Inserir um valor no input
  fireEvent.change(input, {
    target: {
      value: 'Lara Croft',
    },
  });

  // clicar no botão de submter
  fireEvent.click(button);

  // garantir que o input esta com foco ativo
  expect(input).toHaveFocus();

  // garantir que o input não tenha um valor
  expect(input).toHaveValue('');
});

test('Nomes duplicados não podem ser adicionados na lista', () => {
  render(
    <RecoilRoot>
      <Form />
    </RecoilRoot>
  );

  const input = screen.getByPlaceholderText(
    'Insira os nomes dos participantes'
  );

  const button = screen.getByRole('button');

  fireEvent.change(input, {
    target: {
      value: 'Lara Croft',
    },
  });

  fireEvent.click(button);

  fireEvent.change(input, {
    target: {
      value: 'Lara Croft',
    },
  });

  fireEvent.click(button);

  const errorMessage = screen.getByRole('alert');

  expect(errorMessage.textContent).toBe('Nomes duplicadosnão são permitidos!');
});
