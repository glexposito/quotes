import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

describe('App', () => {
  it('should render App component conrrectly', () => {
    render(<App />);
    const element = screen.getByRole('main');
    expect(element).toBeInTheDocument();
  });
});
