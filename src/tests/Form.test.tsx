import { render, screen } from '@testing-library/react';
import React from 'react';

test('When the input is empty, new participants cannot be added', () => {
  render(<Form />);

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
