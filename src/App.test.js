import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the portfolio hero and core sections', () => {
  render(<App />);

  expect(screen.getByText(/shivaji/i)).toBeInTheDocument();
  expect(screen.getByText(/what i do/i)).toBeInTheDocument();
  expect(screen.getByText(/contact/i)).toBeInTheDocument();
});