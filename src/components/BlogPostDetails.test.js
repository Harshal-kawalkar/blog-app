import { render } from '@testing-library/react';
import BlogPostDetails from './BlogPostDetails';

test('renders BlogPostDetails component', () => {
  render(<BlogPostDetails />);
  const linkElement = screen.getByText(/loading/i);
  expect(linkElement).toBeInTheDocument();
});
