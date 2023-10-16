import App from './App';
import { expect, test } from 'vitest';
import { render } from '@testing-library/react';

test ('Header renders', () => {
    const { getByText } = render(<App />);
    expect(getByText("Whitney-Rene's Weather App")).toBeDefined();
});