import React from 'react';
import ReactDom from 'react-dom';
import App from './App';

document.addEventListener('DOMContentLoaded', () => {
  const bedrock = window.__BEDROCK__ || {};
  const { features } = bedrock;
  ReactDom.render(<App features={features} />, document.getElementById('app'));
});
