import { render } from '@testing-library/react';
import BlogPostItem from './BlogPostItem';

const post = {
  title: 'Sample Post',
  description: 'This is a sample post description',
  publishedAt: new Date().toISOString(),
};

test('renders BlogPostItem component', () => {
  const { getByText } = render(<BlogPostItem post={post} />);
  expect(getByText(/sample post/i)).toBeInTheDocument();
});
