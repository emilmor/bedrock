import React from 'react';
import { demoPropTypes } from './utils';
import { BordersDemoBox } from './styles';

export const BorderRadiusDemo = ({ tokens }) => {
  if (!tokens) return null;
  return tokens.map(token => (
    <div key={token.name}>
      <h4>
        {token.name}
        <code>: {token.value}</code>
      </h4>
      {token.comment && <small>{token.comment}</small>}
      <BordersDemoBox
        style={{
          borderRadius: token.value,
          border: '1px solid black',
        }}
      />
    </div>
  ));
};

BorderRadiusDemo.propTypes = demoPropTypes;
