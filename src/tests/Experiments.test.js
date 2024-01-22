import { render, screen } from '@testing-library/react';
import Experiments from '../components/pages/Experiments';

test('renders learn react link', () => {
  render(<Experiments />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
