import { render, screen } from '@testing-library/react';
import BlogPostList from './BlogPostList';

test('renders BlogPostList component', () => {
  render(<BlogPostList />);
  const linkElement = screen.getByText(/loading/i);
  expect(linkElement).toBeInTheDocument();
});
