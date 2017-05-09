import React from 'react';
import ReactDOM from 'react-dom';

import 'script-loader!jquery';
import 'script-loader!foundation-sites';

import './styles/app.scss';

$(document).foundation();

ReactDOM.render(
  <div><h4>Webpack 2 + React + Foundation Boilerplate</h4></div>,
  document.getElementById('app')
);
