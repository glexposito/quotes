import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Layout from './Layout';
import App from './App';

describe('Layout', () => {
  it('should render Children component correctly', () => {
    render(
      <Layout>
        <App />
      </Layout>
    );
    const element = screen.getByRole('main');
    expect(element).toBeInTheDocument();
  });
});
