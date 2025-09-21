import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import List from './List';

describe('<List />', () => {
  test('it should mount', () => {
    render(<List tasks={[]} />);

    const list = screen.getByTestId('List');

    expect(list).toBeInTheDocument();
  });
});