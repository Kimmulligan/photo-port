import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Contact from '..';
import ContactForm from '..';

afterEach(cleanup);

describe('Contact form', () => {
  it('renders', () => {
    render(<ContactForm></ContactForm>);
  });
})