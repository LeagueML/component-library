import React from 'react';
import { render } from '@testing-library/react';
import { BasicPlatformSelector, SpecifiedPlatformSelector } from './platform-selector.composition';

it('default platform should render "NA" correctly', () => {
  const { getByText } = render(<BasicPlatformSelector />);
  const rendered = getByText('NA');
  expect(rendered).toBeTruthy();
});

it('initial platform should render correctly', () => {
  const { getByText } = render(<SpecifiedPlatformSelector />);
  const rendered = getByText('EUW');
  expect(rendered).toBeTruthy();
});