import React from 'react';
import { render, screen } from '@testing-library/react';
import ShopPage from './page';
import '@testing-library/jest-dom';

test('renders MallCo header', () => {
    render(<ShopPage />);
    const headerElement = screen.getByText(/MallCo/i);
    expect(headerElement).toBeInTheDocument();
});