import React from 'react';
import CopyToClipboard from '@basalt/bedrock-copy-to-clipboard';
import { demoPropTypes } from './utils';
import { ShadowDemoBox } from './styles';

export const BoxShadowDemo = ({ tokens }) => {
  if (!tokens) return null;
  return tokens.map(token => (
    <ShadowDemoBox
      key={token.name}
      style={{
        boxShadow: token.value,
      }}
    >
      <h4>{token.name}</h4>
      {token.code && (
        <h6>
          <CopyToClipboard snippet={token.code} />
          <br />
          <CopyToClipboard snippet={token.value} />
        </h6>
      )}
      {token.comment && (
        <p>
          <small>{token.comment}</small>
        </p>
      )}
    </ShadowDemoBox>
  ));
};

BoxShadowDemo.propTypes = demoPropTypes;
