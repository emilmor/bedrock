import React from 'react';
import SpacingSwatches from '@basalt/bedrock-spacing-swatch';
import { demoPropTypes } from './utils';

export const SpacingDemo = ({ tokens }) => {
  if (!tokens) return null;
  return <SpacingSwatches spaces={tokens} />;
};

SpacingDemo.propTypes = demoPropTypes;
